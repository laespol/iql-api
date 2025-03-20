const { beforeEach } = require('node:test')
const { PrismaClient: PrismaClientCorp } = require('../prisma/client/corp');

const { PrismaClient: PrismaClientIql } = require('../prisma/client/iql');
const { isUndefined } = require('util');

const corp = new PrismaClientCorp();
const iql = new PrismaClientIql();


function exclude(user, keys) {
    for (let key of keys) {
        delete user[key]
    }
    return user
}


function json(param) {
    console.log(param)
    return JSON.stringify(
        param,
        (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    );
};
/*
const corp = new PrismaClientCorp({
    log: [
        {
            emit: 'stdout',
            level: 'query',
        },
        {
            emit: 'stdout',
            level: 'error',
        },
        {
            emit: 'stdout',
            level: 'info',
        },
        {
            emit: 'stdout',
            level: 'warn',
        },
    ],
})
*/


exports.getProcCompras1 = async (req, res, next) => {
    try {

        console.log(req.body);

        var chavearquivo = gerarPassword();
        //   console.log(JSON.stringify(chavearquivo));


        var porcentagem = 0;

        const dataAtual = new Date();


        // Pega o dia da semana (0 = Domingo, 1 = Segunda-feira, ..., 6 = Sábado)
        const diaDaSemana = dataAtual.getDay();

        // Pega o dia do mês (1 a 31)
        const diaDoMes = dataAtual.getDate();
        //    dataAtual = dataAtual.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

        //       console.log(`Dia da semana: ${diaDaSemana}`);
        //       console.log(`Dia do mês: ${diaDoMes}`);

        let mediaconsumo = 0;
        let saldoatual = 0;
        let totcompras = 0;
        let totconsumo = 0;
        let dataultimacompra = null;
        let datacoleta = null;
        let datacoleta15 = null;
        let saldo = 0;
        let datainventario = '2024-10-01';


        let dtfinal = req.body.dtfinal.slice(0, 10);

        //        console.log(dtfinal);


        //        if (diaDaSemana >= 1 && diaDaSemana <= 5) {
        const produtos = await corp.$queryRaw`
		WITH CTE_Coleta AS (
        SELECT 
        ip6.Codigo_produto,
        ia.Desc_tecnica,
        NULL AS consumo
        FROM 
        [dbo].coleta_pedido_insumos AS ip6
        INNER JOIN [dbo].[Capa_producao_estoque] AS cp6 
            ON cp6.Apelido_empresa = ip6.Apelido_empresa 
            AND cp6.Apelido_estabelecimento = ip6.Apelido_estabelecimento 
            AND cp6.id_producao_estoque_capa = ip6.id_producao_estoque_capa
        LEFT JOIN [dbo].[Itens_almox] AS ia 
            ON ia.Apelido_empresa = ip6.Apelido_empresa 
            AND ia.Apelido_estabelecimento = ip6.Apelido_estabelecimento 
            AND ia.Codigo_produto = ip6.Codigo_produto
    WHERE
        ip6.Apelido_empresa = 'IQL Tintas'  
        AND ip6.Apelido_estabelecimento = 'Matriz' 
        AND cp6.status_coleta = '' 
        AND (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005')
        AND cp6.Data_para_coletar <= ${dtfinal}
    GROUP BY 
        ip6.Codigo_produto,
        ia.Desc_tecnica
),
CTE_Consumo AS (
    SELECT 
        io.Codigo_produto,
        ia.Desc_tecnica,
        SUM(io.Quantidade_final) AS consumo
    FROM 
        [dbo].[Itens_op] AS io
        LEFT JOIN [dbo].[Capa_op] AS co 
            ON co.Apelido_empresa = io.Apelido_empresa 
            AND co.Apelido_estabelecimento = io.Apelido_estabelecimento 
            AND co.Numero_op = io.Numero_op
        LEFT JOIN [dbo].[Itens_almox] AS ia 
            ON ia.Apelido_empresa = io.Apelido_empresa 
            AND ia.Apelido_estabelecimento = io.Apelido_estabelecimento 
            AND ia.Codigo_produto = io.Codigo_produto
    WHERE 
        io.Apelido_empresa = 'IQL Tintas' 
        AND io.Apelido_estabelecimento = 'Matriz'
        AND co.Status_op = 'Cadastrada'
        AND (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005')
        AND co.Termino_previsto <= ${dtfinal}
    GROUP BY 
        io.Codigo_produto,
        ia.Desc_tecnica
)
SELECT 
    Codigo_produto,
    Desc_tecnica as desc_tecnica,
    MAX(consumo) AS consumo
FROM (
    SELECT * FROM CTE_Coleta
    UNION
    SELECT * FROM CTE_Consumo
) AS Combined
GROUP BY 
    Codigo_produto,
    Desc_tecnica
ORDER BY 
    Codigo_produto;
                `;

        await corp.$disconnect();
        console.log(produtos.length)
        dtnecessidade = new Date(req.body.dtfinal)

        for (i = 0; i <= produtos.length - 1; i++) {
            let inventario = await verificaInventario(produtos[i].Codigo_produto);
            console.log(inventario.length);
            if (inventario.length == 0 || inventario.isUndefined) {
                saldo = 0;
                datainventario = '2024-10-01';

            } else {
                saldo = inventario.saldo;
                datainventario = inventario.datainventario;
            }

            if (inventario.datainventario == null) {
                saldo = 0;
                datainventario = new Date('2024-10-01');
            }

            console.log('Saldo = ' + inventario.saldo + ' - ' + inventario.datainventario);

            let dados = await verificaDados(produtos[i].Codigo_produto, datainventario, dtfinal);

            const gravaanalise = await iql.necessidade.create({
                data: {
                    dtrelatorio: dataAtual,
                    codigo_produto: produtos[i].Codigo_produto,
                    desc_tecnica: produtos[i].desc_tecnica,
                    vlrultcompra: ultimacompra.valorultimacompra,
                    dtultcompra: ultimacompra.dataultimacompra,
                    saldoinv: Number(saldo),
                    dtinventario: datainventario,
                    opfinalizada: Number(opfinalizada),
                    opemprocesso: Number(opemprocesso),
                    mediaconsumo: Number(mediaconsumo),
                    compraentregue: Number(opcompraEntregue),
                    compraparcial: Number(opcompraparc),
                    saldoatual: Number(saldo) + (Number(opcompraEntregue) + Number(opcompraparc)) - (Number(opfinalizada) + Number(opemprocesso)),
                    compraprevista: Number(opcompra15),
                    opcadastrada: Number(opcadastrada15),
                    opcoleta: Number(ultimacoleta15.opcoleta15),
                    dtcoleta: ultimacoleta15.datacoleta15,
                    saldonecessidade: Number(saldo) + (Number(opcompraEntregue) + Number(opcompraparc) + Number(opcompra15)) - (Number(opfinalizada) + Number(opemprocesso) + Number(opcadastrada15) + Number(ultimacoleta15.opcoleta15)),
                    vlrpedido: Number(valorvenda),
                    dtnecessidade: dtnecessidade,
                    vlrcompra: ((Number(saldo) + (Number(opcompraEntregue) + Number(opcompraparc) + Number(opcompra15)) - (Number(opfinalizada) + Number(opemprocesso) + Number(opcadastrada15) + Number(ultimacoleta15.opcoleta15))) * -1) * Number(ultimacompra.valorultimacompra),

                },
            });
            await iql.$disconnect()
        }


        //       }
        
 //                 console.log('dataAtual' + dataAtual)
           // dataAtual = '2024-11-18 12:26:56';
 //             let dataAtual1 = '2024-11-28 21:48:42';

                console.log('dataAtual' + dataAtual)
      //  console.log(dataAtual);    
     //   dataAtual = new Date('2024-11-28 21:48:42')
        //    dataAtual = '2024-11-28 21:48:42';
 //       console.log(dataAtual);

        const relcompras = await iql.$queryRaw`
        SELECT  
      co.*
        FROM hospital.necessidade co
        where 
        co.dtrelatorio = ${dataAtual} 
        order by co.codigo_produto

        
            `;

        await iql.$disconnect();

        const response = {
            ok: true,
            length: relcompras.length,
            relcompras: relcompras
        }
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        await corp.$disconnect()
        return res.status(500).send({
            ok: false,
            error: error
        });
    }
};

async function verificaInventario(Codigo_produto) {

    saldo = 0;
    datainventario = null;

    const inventario = await iql.$queryRaw`
    SELECT hi.cod_produto, SUM(hi.quantidade) as saldo , data as datainventario FROM hospital.inventario as hi
    where cod_produto = ${Codigo_produto}
    group by 
    cod_produto,
    data
    order by
    data desc
    LIMIT 1
     `;

    await iql.$disconnect();

    if (inventario.length != 0) {
        //           console.log(emprocesso[0].opemprocesso);
        saldo = inventario[0].saldo;
        datainventario = inventario[0].datainventario;
    }
    return { saldo, datainventario };

}

async function verificaDados(Codigo_produto, datainventario,dtfinal) {

    let dadosproduto = [];

    const finalizado = await corp.$queryRaw`
 WITH CTE_Coleta AS (
    SELECT 
        ip6.Codigo_produto,
        ia.Desc_tecnica
    FROM 
        [dbo].coleta_pedido_insumos AS ip6 WITH(NOLOCK)
        INNER JOIN [dbo].[Capa_producao_estoque] AS cp6 
            ON cp6.Apelido_empresa = ip6.Apelido_empresa 
            AND cp6.Apelido_estabelecimento = ip6.Apelido_estabelecimento 
            AND cp6.id_producao_estoque_capa = ip6.id_producao_estoque_capa
        LEFT JOIN [dbo].[Itens_almox] AS ia 
            ON ia.Apelido_empresa = ip6.Apelido_empresa 
            AND ia.Apelido_estabelecimento = ip6.Apelido_estabelecimento 
            AND ia.Codigo_produto = ip6.Codigo_produto
    WHERE
        ip6.Apelido_empresa = 'IQL Tintas'  
        AND ip6.Apelido_estabelecimento = 'Matriz' 
        AND cp6.status_coleta = '' 
        AND (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005')
        AND cp6.Data_para_coletar <=  '2024-12-13'
    GROUP BY 
        ip6.Codigo_produto,
        ia.Desc_tecnica
),
CTE_Consumo AS (
    SELECT 
        io.Codigo_produto,
        ia.Desc_tecnica
    FROM 
        [dbo].[Itens_op] AS io WITH(NOLOCK)
        LEFT JOIN [dbo].[Capa_op] AS co 
            ON co.Apelido_empresa = io.Apelido_empresa 
            AND co.Apelido_estabelecimento = io.Apelido_estabelecimento 
            AND co.Numero_op = io.Numero_op
        LEFT JOIN [dbo].[Itens_almox] AS ia 
            ON ia.Apelido_empresa = io.Apelido_empresa 
            AND ia.Apelido_estabelecimento = io.Apelido_estabelecimento 
            AND ia.Codigo_produto = io.Codigo_produto
    WHERE 
        io.Apelido_empresa = 'IQL Tintas' 
        AND io.Apelido_estabelecimento = 'Matriz'
        AND co.Status_op = 'Cadastrada'
        AND (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005')
        AND co.Termino_previsto <= '2024-12-13'
    GROUP BY 
        io.Codigo_produto,
        ia.Desc_tecnica
)
    SELECT 
    Codigo_produto,
    Desc_tecnica as desc_tecnica,
ISNULL(( -- Valor da Ultima Compra
	    select top 1
rq.[valor unitario final] 
    FROM [dbo].[requisicao] as [rq] WITH(NOLOCK)
    LEFT JOIN [dbo].[Pedido compra] AS pc ON 
    (
		pc.[Apelido_empresa]         = rq.[Apelido_empresa] AND 
        pc.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
        pc.[Pedido compra numero]    = rq.[Pedido compra numero]
    )
  	LEFT JOIN [dbo].Item_recebimento AS ir ON 
    (   
		rq.[Apelido_empresa]         = ir.[Apelido_empresa] AND 
        rq.[Apelido_estabelecimento] = ir.[Apelido_estabelecimento] AND 
        rq.[Pedido compra numero]    = ir.[Pedido_Compra] AND
		rq.[Codigo material]         = ir.[Codigo_produto]
    )
	LEFT JOIN [dbo].Capa_recebimento AS cr ON 
    (
	    ir.[Apelido_empresa]         = cr.[Apelido_empresa] AND 
        ir.[Apelido_estabelecimento] = cr.[Apelido_estabelecimento] AND 
        ir.[Id_caparec]              = cr.[Id_caparec]
    )
    where 
    [rq].Apelido_empresa = 'IQL Tintas' and
    [rq].Apelido_estabelecimento = 'Matriz' and
    [rq].[Codigo material] =  Combined.Codigo_produto and
    [rq].[Status requisicao] = 'Atendido' 
	order by
	[cr].[Data_entrada] desc
	),0) as valorultimacompra,
	( -- Data Ultima compra
	    select top 1
rq.[Data compra] 
    FROM [dbo].[requisicao] as [rq] WITH(NOLOCK)
    LEFT JOIN [dbo].[Pedido compra] AS pc ON 
    (
		pc.[Apelido_empresa]         = rq.[Apelido_empresa] AND 
        pc.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
        pc.[Pedido compra numero]    = rq.[Pedido compra numero]
    )
  	LEFT JOIN [dbo].Item_recebimento AS ir ON 
    (   
		rq.[Apelido_empresa]         = ir.[Apelido_empresa] AND 
        rq.[Apelido_estabelecimento] = ir.[Apelido_estabelecimento] AND 
        rq.[Pedido compra numero]    = ir.[Pedido_Compra] AND
		rq.[Codigo material]         = ir.[Codigo_produto]
    )
	LEFT JOIN [dbo].Capa_recebimento AS cr ON 
    (
	    ir.[Apelido_empresa]         = cr.[Apelido_empresa] AND 
        ir.[Apelido_estabelecimento] = cr.[Apelido_estabelecimento] AND 
        ir.[Id_caparec]              = cr.[Id_caparec]
    )
    where 
    [rq].Apelido_empresa = 'IQL Tintas' and
    [rq].Apelido_estabelecimento = 'Matriz' and
    [rq].[Codigo material] =  Combined.Codigo_produto and
    [rq].[Status requisicao] = 'Atendido' 
	order by
	[cr].[Data_entrada] desc
	) as dataultimacompra, 
	ISNULL((  -- Verifica OP Finalizada
	select SUM(io.Quantidade_final) as opfinalizada
    from [dbo].[Itens_op] as io WITH(NOLOCK)
    LEFT JOIN [dbo].[Capa_op] AS co ON 
    (   co.Apelido_empresa = io.Apelido_empresa AND
       co.Apelido_estabelecimento = io.Apelido_estabelecimento AND
       co.Numero_op = io.Numero_op 
    )
    LEFT JOIN [dbo].[Itens_almox] AS ia ON 
    (  ia.[Apelido_empresa] = io.[Apelido_empresa] AND 
       ia.[Apelido_estabelecimento] = io.[Apelido_estabelecimento] AND 
       ia.[Codigo_produto] = io.Codigo_produto
    )
    where 
        io.Apelido_empresa         = 'IQL Tintas' 
    and io.Apelido_estabelecimento = 'Matriz'
    and co.Status_op = 'Finalizada' 
    and co.Data_finalizacao >= '2024-10-01'
    and io.Codigo_produto = Combined.Codigo_produto
    group by
    io.Apelido_empresa ,       
    io.Apelido_estabelecimento ,
    io.Codigo_produto
	),0) AS OPFinalizada,
	ISNULL(( --Verifica OP Cadstradas
	   select SUM(io4.Quantidade_inicial) as opcadastrada
    from [dbo].[Itens_op] as io4 WITH(NOLOCK)
    LEFT JOIN [dbo].[Capa_op] AS co4 ON 
    (   co4.Apelido_empresa = io4.Apelido_empresa AND
        co4.Apelido_estabelecimento = io4.Apelido_estabelecimento AND
        co4.Numero_op = io4.Numero_op 
    )
    LEFT JOIN [dbo].[Itens_almox] AS ia4 ON 
    (  ia4.[Apelido_empresa] = io4.[Apelido_empresa] AND 
       ia4.[Apelido_estabelecimento] = io4.[Apelido_estabelecimento] AND 
       ia4.[Codigo_produto] = io4.Codigo_produto
    )
    where 
        io4.Apelido_empresa         = 'IQL Tintas' 
    and io4.Apelido_estabelecimento = 'Matriz'
    and co4.Status_op               = 'Cadastrada' 
    and io4.Codigo_produto          = Combined.Codigo_produto
    and (co4.data_producao          <= '2024-12-13' or co4.data_producao          is Null)
	),0) AS OPCadastrada,
	ISNULL(( -- Verifica OP em Processo
	   select SUM(io3.Quantidade_inicial) as opemprocesso
    from [dbo].[Itens_op] as io3 WITH(NOLOCK)
    LEFT JOIN [dbo].[Capa_op] AS co3 ON 
    (   co3.Apelido_empresa = io3.Apelido_empresa AND
       co3.Apelido_estabelecimento = io3.Apelido_estabelecimento AND
       co3.Numero_op = io3.Numero_op 
    )
    LEFT JOIN [dbo].[Itens_almox] AS ia3 ON 
    (  ia3.[Apelido_empresa] = io3.[Apelido_empresa] AND 
       ia3.[Apelido_estabelecimento] = io3.[Apelido_estabelecimento] AND 
       ia3.[Codigo_produto] = io3.Codigo_produto
    )
    where 
        io3.Apelido_empresa         = 'IQL Tintas' 
    and io3.Apelido_estabelecimento = 'Matriz'
    and co3.Status_op = 'Em andamento' 
    and co3.Data_inicio >= '2024-10-01'
    and io3.Codigo_produto = Combined.Codigo_produto
    group by
    io3.Apelido_empresa ,       
    io3.Apelido_estabelecimento ,
    io3.Codigo_produto
	),0) as OPAndamento,
	ISNULL(( -- Compra Realizada e não entregue
	select 
    sum([rq].[Quantidade requisitada]-[rq].quantidade_recebida)  as opcompra
    FROM [dbo].[requisicao] as [rq] WITH(NOLOCK)
    	LEFT JOIN [dbo].[Pedido compra] AS pc ON 
    (
		pc.[Apelido_empresa]         = rq.[Apelido_empresa] AND 
        pc.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
        pc.[Pedido compra numero]    = rq.[Pedido compra numero]
    )
    where 
    [rq].Apelido_empresa = 'IQL Tintas' and
    [rq].Apelido_estabelecimento = 'Matriz' and
    [rq].[Codigo material] = Combined.Codigo_produto and
    [rq].[Status requisicao] = 'Comprado' and
    [rq].[data compra] >= '2024-10-01' and
   	[rq].[Data necessidade]  <= '2024-12-13' and
    [pc].status_pedido <> 'NÃO APROVADO'
    group by 
    [rq].Apelido_empresa,
    [rq].Apelido_estabelecimento,
    [rq].[Codigo material],
    [rq].[Status requisicao]
	),0) as CompraNaoEntregue,
	ISNULL(( -- Compra Parcial
	 select 
    sum([rq].quantidade_recebida)  as opcompraEntregue
    FROM [dbo].[requisicao] as [rq] WITH(NOLOCK)
    		   LEFT JOIN [dbo].[Pedido compra] AS pc ON 
    (
		pc.[Apelido_empresa]         = rq.[Apelido_empresa] AND 
        pc.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
        pc.[Pedido compra numero]    = rq.[Pedido compra numero]
    )
  	LEFT JOIN [dbo].Item_recebimento AS ir ON 
    (   
		rq.[Apelido_empresa]         = ir.[Apelido_empresa] AND 
        rq.[Apelido_estabelecimento] = ir.[Apelido_estabelecimento] AND 
        rq.[Pedido compra numero]    = ir.[Pedido_Compra] AND
		rq.[Codigo material]         = ir.[Codigo_produto]
    )
	LEFT JOIN [dbo].Capa_recebimento AS cr ON 
    (
	    ir.[Apelido_empresa]         = cr.[Apelido_empresa] AND 
        ir.[Apelido_estabelecimento] = cr.[Apelido_estabelecimento] AND 
        ir.[Id_caparec]              = cr.[Id_caparec]
    )
    where 
    [rq].Apelido_empresa = 'IQL Tintas' and
    [rq].Apelido_estabelecimento = 'Matriz' and
    [rq].[Codigo material] = Combined.Codigo_produto and
    [rq].[Status requisicao] = 'Comprado' and
    [cr].[Data_entrada] >= '2024-10-01' and
    [pc].status_pedido <> 'NÃO APROVADO'
    group by 
    [rq].Apelido_empresa,
    [rq].Apelido_estabelecimento,
    [rq].[Codigo material],
    [rq].[Status requisicao]
	),0) as CompraParcial,
	ISNULL(( -- Compra Entregue
	     select 
    sum([rq].quantidade_recebida)  as opcompraEntregue
    FROM [dbo].[requisicao] as [rq] WITH(NOLOCK)
    		   LEFT JOIN [dbo].[Pedido compra] AS pc ON 
    (
		pc.[Apelido_empresa]         = rq.[Apelido_empresa] AND 
        pc.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
        pc.[Pedido compra numero]    = rq.[Pedido compra numero]
    )
  	LEFT JOIN [dbo].Item_recebimento AS ir ON 
    (   
		rq.[Apelido_empresa]         = ir.[Apelido_empresa] AND 
        rq.[Apelido_estabelecimento] = ir.[Apelido_estabelecimento] AND 
        rq.[Pedido compra numero]    = ir.[Pedido_Compra] AND
		rq.[Codigo material]         = ir.[Codigo_produto]
    )
	LEFT JOIN [dbo].Capa_recebimento AS cr ON 
    (
	    ir.[Apelido_empresa]         = cr.[Apelido_empresa] AND 
        ir.[Apelido_estabelecimento] = cr.[Apelido_estabelecimento] AND 
        ir.[Id_caparec]              = cr.[Id_caparec]
    )
    where 
    [rq].Apelido_empresa = 'IQL Tintas' and
    [rq].Apelido_estabelecimento = 'Matriz' and
    [rq].[Codigo material] = Combined.Codigo_produto and
    [rq].[Status requisicao] = 'Atendido' and
    [cr].[Data_entrada] >= '2024-10-01' and
    [pc].status_pedido <> 'NÃO APROVADO'
    group by 
    [rq].Apelido_empresa,
    [rq].Apelido_estabelecimento,
    [rq].[Codigo material],
    [rq].[Status requisicao]
	),0) as CompraEntregue,
	ISNULL(( -- Pedido de Vendas
	select sum(ip.Valor) as valorvenda
    from [dbo].[Itens_op] as io4 WITH(NOLOCK)
    LEFT JOIN [dbo].[Capa_op] AS co4 ON 
    (   co4.Apelido_empresa = io4.Apelido_empresa AND
        co4.Apelido_estabelecimento = io4.Apelido_estabelecimento AND
        co4.Numero_op = io4.Numero_op 
    )
    LEFT JOIN [dbo].[Itens_almox] AS ia4 ON 
    (  ia4.[Apelido_empresa] = io4.[Apelido_empresa] AND 
       ia4.[Apelido_estabelecimento] = io4.[Apelido_estabelecimento] AND 
       ia4.[Codigo_produto] = io4.Codigo_produto
    )
    LEFT JOIN [dbo].[Itens_Pedido] AS ip ON 
       ip.[Apelido_empresa] = co4.[Apelido_empresa] 
    AND ip.[Apelido_estabelecimento] = co4.[Apelido_estabelecimento] 
    AND ip.[Numero Pedido] = co4.[Numero_pedido_venda] 
    AND LEFT(ip.Codigo_produto, 
        CASE 
            WHEN CHARINDEX('-' + ip.Codigo_embalagem, ip.Codigo_produto) > 0 
            THEN CHARINDEX('-' + ip.Codigo_embalagem, ip.Codigo_produto) - 1 
            ELSE LEN(ip.Codigo_produto) 
        END
    ) = co4.Codigo_produto

    where 
        io4.Apelido_empresa         = 'IQL Tintas' 
    and io4.Apelido_estabelecimento = 'Matriz'
    and co4.Status_op = 'Cadastrada' 
    and io4.Codigo_produto =  Combined.Codigo_produto
	and co4.Termino_previsto  <= '2024-12-13'
	),0) as valorvenda,
	ISNULL(( -- Media de Consumo
	(select SUM(io.Quantidade_final) 
                from [dbo].[Itens_op] as io WITH(NOLOCK)
                LEFT JOIN [dbo].[Capa_op] AS co ON 
                (   co.Apelido_empresa = io.Apelido_empresa AND
                    co.Apelido_estabelecimento = io.Apelido_estabelecimento AND
                    co.Numero_op = io.Numero_op 
                )
                LEFT JOIN [dbo].[Itens_almox] AS ia ON 
                (   ia.[Apelido_empresa] = io.[Apelido_empresa] AND 
                    ia.[Apelido_estabelecimento] = io.[Apelido_estabelecimento] AND 
                    ia.[Codigo_produto] = io.[Codigo_produto]
                )
                where 
                    io.Apelido_empresa         = 'IQL Tintas' 
                and io.Apelido_estabelecimento = 'Matriz'
                and co.Status_op               = 'Finalizada'
                and io.Codigo_produto =  Combined.Codigo_produto
                and co.Data_finalizacao        >= DATEADD(MONTH, -12, GETDATE())
                and (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005')
                group by 
                io.Codigo_produto ,
                ia.Desc_tecnica
		)/12),0) AS consumo,
	ISNULL(( -- Valor de op Coletada
    select SUM([ip6].Quantidade_pedido) 
    from [dbo].coleta_pedido_insumos as [ip6]  WITH(NOLOCK)
    inner JOIN [dbo].[Capa_producao_estoque] AS cp6 ON 
    (cp6.Apelido_empresa         = [ip6].Apelido_empresa AND
    cp6.Apelido_estabelecimento  = [ip6].Apelido_estabelecimento AND
    cp6.id_producao_estoque_capa = [ip6].id_producao_estoque_capa)
    where
    [ip6].Apelido_empresa         = 'IQL Tintas'  and 
    [ip6].Apelido_estabelecimento = 'Matriz' and
    [cp6].[status_coleta]         = '' and
    [ip6].Codigo_produto          = Combined.Codigo_produto and
    [cp6].Data_para_coletar  <= '2024-12-13'
    group by
    [ip6].Apelido_empresa       ,
    [ip6].Apelido_estabelecimento ,
    [cp6].[status_coleta]        ,
    [ip6].Codigo_produto       ,
	[cp6].Data_para_coletar
		),0) as opcoleta,
	( -- Valor de op Coletada
    select top 1 [cp6].Data_para_coletar 
    from [dbo].coleta_pedido_insumos as [ip6]  WITH(NOLOCK)
    inner JOIN [dbo].[Capa_producao_estoque] AS cp6 ON 
    (cp6.Apelido_empresa         = [ip6].Apelido_empresa AND
    cp6.Apelido_estabelecimento  = [ip6].Apelido_estabelecimento AND
    cp6.id_producao_estoque_capa = [ip6].id_producao_estoque_capa)
    where
    [ip6].Apelido_empresa         = 'IQL Tintas'  and 
    [ip6].Apelido_estabelecimento = 'Matriz' and
    [cp6].[status_coleta]         = '' and
    [ip6].Codigo_produto          = Combined.Codigo_produto and
    [cp6].Data_para_coletar  <= '2024-12-13'
	order by
    [cp6].Data_para_coletar desc
		) as datacoleta
FROM (
    SELECT * FROM CTE_Coleta
    UNION
    SELECT * FROM CTE_Consumo
) AS Combined
GROUP BY 
    Codigo_produto,
    Desc_tecnica
ORDER BY 
    Codigo_produto;

    `;

    await corp.$disconnect();

    if (finalizado.length != 0) {
        //           console.log(finalizado[0].opfinalizada);
        opfinalizada = finalizado[0].opfinalizada;

    }
    return (opfinalizada);
}




