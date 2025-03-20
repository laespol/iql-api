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
exports.postConsultaComprasPeriodo = async (req, res, next) => {
    try {

        console.log(req.body);
        let dtinicio = req.body.dtinicio.slice(0, 10);
        let dtfinal = req.body.dtfinal.slice(0, 10);

        const comprasperiodos = await corp.$queryRaw`
                select 
             	cr.Doc_Numero,
                cr.Doc_Serie,
                cr.Doc_Tipo ,
            	ag.Nome,
                rq.[Pedido compra numero] as Pedido_compra_numero, 
                rq.[Codigo material] as Codigo_material, 
                rq.[Quantidade requisitada] as Quantidade_requisitada,
                rq.[quantidade_recebida] as quantidade_recebida,
                rq.[Data requisicao] as Data_requisicao,
                rq.[Data compra] as Data_compra,
                rq.[Data necessidade] as Data_necessidade,
               	cr.[Data_entrada] as Data_entrada,
                cr.Valor_nf,
				rq.[valor unitario final] as valor_unitario,
               	ag1.Nome as fornecedor,
            	ag1.telefone as telefone
                FROM [corp].[dbo].[requisicao] as [rq]
                LEFT JOIN [dbo].[Itens_almox] AS ia ON 
                (
            		ia.[Apelido_empresa]         = rq.[Apelido_empresa] AND 
                    ia.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
                    ia.[Codigo_produto]          = rq.[Codigo material]
                )
                LEFT JOIN [dbo].[Pedido compra] AS pc ON 
                (
        		pc.[Apelido_empresa]         = rq.[Apelido_empresa] AND 
                pc.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
                pc.[Pedido compra numero]    = rq.[Pedido compra numero]
                )
            	left join [dbo].[Agente] as ag1 on 
                ( 
            	pc.Apelido_empresa = ag1.Apelido_empresa and
            	pc.Apelido_estabelecimento = ag1.Apelido_estabelecimento and
            	pc.[Codigo] = ag1.[Codigo_agentes]
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
	    left join [dbo].[Agente] as ag on 
  ( 
	cr.Apelido_empresa = ag.Apelido_empresa and
	cr.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	cr.[Codigo_agentes] = ag.[Codigo_agentes]
  )
    where 
    [rq].Apelido_empresa = 'IQL Tintas' and
    [rq].Apelido_estabelecimento = 'Matriz' and
	cr.[Data_entrada] >= ${dtinicio} and
	cr.[Data_entrada] <= ${dtfinal} and
    (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005') and
    [pc].status_pedido <> 'NÃO APROVADO'
	ORDER BY cr.[Data_entrada]
                `;

        await corp.$disconnect();

        const somacompras = await corp.$queryRaw`
        select 
        SUM(cr.Valor_nf) as somatotal
        FROM [corp].[dbo].[requisicao] as [rq]
        LEFT JOIN [dbo].[Itens_almox] AS ia ON 
        (
            ia.[Apelido_empresa]         = rq.[Apelido_empresa] AND 
            ia.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
            ia.[Codigo_produto]          = rq.[Codigo material]
        )
        LEFT JOIN [dbo].[Pedido compra] AS pc ON 
        (
        pc.[Apelido_empresa]         = rq.[Apelido_empresa] AND 
        pc.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
        pc.[Pedido compra numero]    = rq.[Pedido compra numero]
        )
        left join [dbo].[Agente] as ag1 on 
        ( 
        pc.Apelido_empresa = ag1.Apelido_empresa and
        pc.Apelido_estabelecimento = ag1.Apelido_estabelecimento and
        pc.[Codigo] = ag1.[Codigo_agentes]
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
left join [dbo].[Agente] as ag on 
( 
cr.Apelido_empresa = ag.Apelido_empresa and
cr.Apelido_estabelecimento = ag.Apelido_estabelecimento and
cr.[Codigo_agentes] = ag.[Codigo_agentes]
)
where 
[rq].Apelido_empresa = 'IQL Tintas' and
[rq].Apelido_estabelecimento = 'Matriz' and
cr.[Data_entrada] >= ${dtinicio} and
cr.[Data_entrada] <= ${dtfinal} and
(ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005') and
[pc].status_pedido <> 'NÃO APROVADO'
        `;

        await corp.$disconnect();

        console.log(JSON.stringify(somacompras[0].somatotal))


        const response = {
            ok: true,
            length: comprasperiodos.length,
            comprasperiodos: comprasperiodos,
            somacompras: somacompras[0].somatotal
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


exports.getProcCompras = async (req, res, next) => {
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


        let dtfinal = req.body.dtfinal.slice(0, 10);

        //        console.log(dtfinal);


        if (diaDaSemana >= 1 && diaDaSemana <= 5) {
            if (diaDoMes < 16) {
                porcentagem = 50;
            } else {
                porcentagem = 25;
            }

            const produtos = await corp.$queryRaw`
                select io.Codigo_produto,ia.desc_tecnica, SUM(io.Quantidade_final) as consumo
                from [dbo].[Itens_op] as io
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
                and co.Data_finalizacao        >= DATEADD(MONTH, -12, GETDATE())
                and (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005')
                group by 
                io.Codigo_produto ,
                ia.Desc_tecnica
                order by 
				io.Codigo_produto
                `;

            await corp.$disconnect();

            for (i = 0; i <= produtos.length - 1; i++) {

                //        console.log(produtos[i].Codigo_produto + ' - ' + i);

                let opfinalizada = await verificaFinalizado(produtos[i].Codigo_produto);
                let opemprocesso = await verificaEmprocesso(produtos[i].Codigo_produto);
                //                let opcadastrada = await verificaCadastrada(produtos[i].Codigo_produto);
                let opcadastrada15 = await verificaCadastrada15(produtos[i].Codigo_produto, dtfinal);
                //                let opcadastrada30 = await verificaCadastrada30(produtos[i].Codigo_produto);
                //                let opcoleta = await verificaColeta(produtos[i].Codigo_produto);
                let ultimacoleta15 = await verificaColeta15(produtos[i].Codigo_produto, dtfinal);
                //                let opcoleta30 = await verificaColeta30(produtos[i].Codigo_produto);
                //                let opcompra = await verificaCompra(produtos[i].Codigo_produto);
                let opcompra15 = await verificaCompra15(produtos[i].Codigo_produto, dtfinal);
                //                let opcompra30 = await verificaCompra30(produtos[i].Codigo_produto);
                let opcompraparc = await verificaCompraParcial(produtos[i].Codigo_produto);
                let opcompraEntregue = await verificaCompraEntregue(produtos[i].Codigo_produto);
                let saldo = await verificaInventario(produtos[i].Codigo_produto);
                let ultimacompra = await verificaUltimacompra(produtos[i].Codigo_produto);

                //                console.log(ultimacoleta15);

                mediaconsumo = (produtos[i].consumo / 12);
                /*
                        console.log(porcentagem);
                
                        console.log("produto :" + produtos[i].Codigo_produto);
                        console.log("Saldo Inventario = " + saldo);
                        console.log("Consumo 12 Meses = " + produtos[i].consumo);
                        mediaconsumo = (produtos[i].consumo / 12);
                        console.log("Media 12 meses = " + mediaconsumo);
                        console.log("Compras Não entregue = " + opcompra);
                        console.log("Compras entregues = " + opcompraEntregue);
                        console.log("Op Finalizada =  " + opfinalizada);
                        console.log("Ops em Processo = " + opemprocesso);
                        console.log("Ops Cadstradas = " + opcadastrada);
                        console.log("Coletas = " + opcoleta);
                        totcompras = opcompra + opcompraEntregue;
                        console.log("Total Compras = " + totcompras);
                        totconsumo = opfinalizada + opemprocesso + opcadastrada + opcoleta;
                        console.log("Total Consumo = " + totconsumo);
                        saldoatual = saldo + totcompras - totconsumo;
                        console.log("Saldo Atual = " + saldoatual);
                        console.log("data ultima compra =" + this.dataultimacompra);
                        console.log("Valor Ultima compra" + valorultimacompra);
 */
                //console.log( ((Number(mediaconsumo) * (Number(porcentagem) / 100)) - (Number(saldo) + (Number(opcompra15) + Number(opcompraEntregue) + Number(opcompraparc)) - (Number(opfinalizada) + Number(opemprocesso) + Number(opcadastrada15) + Number(ultimacoleta15.opcoleta15)))))

                const gravaanalise = await iql.compras.create({
                    data: {
                        chavearquivo: chavearquivo,
                        porcentagem: porcentagem,
                        codigo_produto: produtos[i].Codigo_produto,
                        desc_tecnica: produtos[i].desc_tecnica,
                        saldo: Number(saldo),
                        consumo12: produtos[i].consumo,
                        mediaconsumo: Number(mediaconsumo),
                        //    opcompra: Number(opcompra),
                        opcompraEntregue: (Number(opcompraEntregue) + Number(opcompraparc)),
                        opfinalizada: Number(opfinalizada),
                        opemprocesso: Number(opemprocesso),
                        //    opcadastrada: Number(opcadastrada),
                        //    opcoleta: Number(opcoleta),
                        //    totcompras: (Number(opcompra) + Number(opcompraEntregue) + Number(opcompraparc)),
                        //    totconsumo: (Number(opfinalizada) + Number(opemprocesso) + Number(opcadastrada) + Number(opcoleta)),
                        //    saldoatual: (Number(saldo) + (Number(opcompra) + Number(opcompraEntregue) + Number(opcompraparc)) - (Number(opfinalizada) + Number(opemprocesso) + Number(opcadastrada) + Number(opcoleta))),
                        saldometa: (Number(mediaconsumo) * (Number(porcentagem) / 100)),
                        compra: ((Number(mediaconsumo) * (Number(porcentagem) / 100)) - (Number(saldo) + (Number(opcompra15) + Number(opcompraEntregue) + Number(opcompraparc)) - (Number(opfinalizada) + Number(opemprocesso) + Number(opcadastrada15) + Number(ultimacoleta15.opcoleta15)))),
                        valorultimacompra: ultimacompra.valorultimacompra,
                        dataultimacompra: ultimacompra.dataultimacompra,
                        datacoleta: ultimacoleta15.datacoleta15,
                        opcadastrada15: Number(opcadastrada15),
                        opcoleta15: Number(ultimacoleta15.opcoleta15),
                        opcompra15: Number(opcompra15),
                        totcompras15: (Number(opcompra15) + Number(opcompraEntregue) + Number(opcompraparc)),
                        totconsumo15: (Number(opfinalizada) + Number(opemprocesso) + Number(opcadastrada15) + Number(ultimacoleta15.opcoleta15)),
                        saldoatual15: (Number(saldo) + (Number(opcompra15) + Number(opcompraEntregue) + Number(opcompraparc)) - (Number(opfinalizada) + Number(opemprocesso) + Number(opcadastrada15) + Number(ultimacoleta15.opcoleta15))),
                        //     opcadastrada30: Number(opcadastrada30),
                        //     opcoleta30: Number(opcoleta30),
                        //     opcompra30: Number(opcompra30),
                        //     totcompras30: (Number(opcompra30) + Number(opcompraEntregue) + Number(opcompraparc)),
                        //     totconsumo30: (Number(opfinalizada) + Number(opemprocesso) + Number(opcadastrada30 + Number(opcompraparc)) + Number(opcoleta30)),
                        //     saldoatual30: (Number(saldo) + (Number(opcompra) + Number(opcompraEntregue) + Number(opcompraparc)) - (Number(opfinalizada) + Number(opemprocesso) + Number(opcadastrada) + Number(opcoleta))),
                    },
                });
                await iql.$disconnect()
            }


        }

        //    dataAtual = '2024-10-11 19:19:56';

        const relcompras = await iql.$queryRaw`
        SELECT  
        co.codigo_produto, 
        co.desc_tecnica, 
        co.saldo as saldoinicial,
        co.dataultimacompra, 
        co.valorultimacompra, 
        co.mediaconsumo, 
        co.opfinalizada,
        co.opemprocesso,
        co.opcadastrada15 as opcadastrada,
        co.opcoleta15 as opcoleta,
        co.datacoleta,
        co.totcompras15 as totalcompra,
        co.totconsumo15 as totalconsumo,
        co.saldoatual15 as totalsaldo,
        co.saldometa as meta, 
        co.compra as necessidade
        FROM hospital.compras co
        where 
        chavearquivo = ${chavearquivo} 
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

            let ultimacompra = await verificaUltimacompra(produtos[i].Codigo_produto);
            let opfinalizada = await verificaFinalizado(produtos[i].Codigo_produto, datainventario);
            let opemprocesso = await verificaEmprocesso(produtos[i].Codigo_produto, datainventario);
            let opcadastrada15 = await verificaCadastrada15(produtos[i].Codigo_produto, dtfinal);
            let ultimacoleta15 = await verificaColeta15(produtos[i].Codigo_produto, dtfinal);
            let opcompra15 = await verificaCompra15(produtos[i].Codigo_produto, dtfinal);
            let opcompraparc = await verificaCompraParcial(produtos[i].Codigo_produto, datainventario);
            let opcompraEntregue = await verificaCompraEntregue(produtos[i].Codigo_produto, datainventario);
            let consumo = await verificaConsumoMedio(produtos[i].Codigo_produto);
            let valorcompra = await verificaValorCompra();
            let valorvenda = await verificaValorVenda(produtos[i].Codigo_produto, dtfinal);
            mediaconsumo = (consumo / 12);

            console.log('Valor venda = ' + valorvenda);

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

exports.getProcIntermediario = async (req, res, next) => {
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

    SELECT 
        io.Codigo_produto,
        ia.Desc_tecnica as desc_tecnica,
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
        AND ia.Codigo_tipo_item = '002' 
        AND co.Termino_previsto <= ${dtfinal}
    GROUP BY 
        io.Codigo_produto,
        ia.Desc_tecnica
                `;

        await corp.$disconnect();
        console.log(produtos.length)
        dtnecessidade = new Date(req.body.dtfinal)

        for (i = 0; i <= produtos.length - 1; i++) {
            let inventario = await verificaInventario(produtos[i].Codigo_produto);
            console.log('produtos[i].Codigo_produto = ' + produtos[i].Codigo_produto);
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

            let ultimacompra = await verificaUltimacompra(produtos[i].Codigo_produto);
            let opfinalizada = await verificaFinalizado(produtos[i].Codigo_produto, datainventario);
            let opemprocesso = await verificaEmprocesso(produtos[i].Codigo_produto, datainventario);
            let opcadastrada15 = await verificaCadastrada15(produtos[i].Codigo_produto, dtfinal);
            let ultimacoleta15 = await verificaColeta15Intermediario(produtos[i].Codigo_produto, dtfinal);
            let opcompra15 = await verificaCadastrada15Intermediario(produtos[i].Codigo_produto, dtfinal);
            let opcompraparc = await verificaEmprocessoIntermediario(produtos[i].Codigo_produto, datainventario);
            let opcompraEntregue = await verificaFinalizadoIntermediario(produtos[i].Codigo_produto, datainventario);
            let consumo = await verificaConsumoMedioIntermediario(produtos[i].Codigo_produto);
            //                let valorcompra = await verificaValorCompra();
            //                let valorvenda = await verificaValorVenda(produtos[i].Codigo_produto, dtfinal);
            mediaconsumo = (consumo / 12);

            //                console.log('Valor venda = ' + valorvenda);

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
                    opcadastrada: Number(opcadastrada15),
                    opcoleta: Number(ultimacoleta15.opcoleta15),
                    dtcoleta: ultimacoleta15.datacoleta15,
                    compraentregue: Number(opcompraEntregue),
                    compraparcial: Number(opcompraparc),
                    saldoatual: Number(saldo) + (Number(opcompraEntregue) + Number(opcompraparc)) - (Number(opfinalizada) + Number(opemprocesso)),
                    compraprevista: Number(opcompra15),
                    saldonecessidade: Number(saldo) + (Number(opcompraEntregue) + Number(opcompraparc) + Number(opcompra15)) - (Number(opfinalizada) + Number(opemprocesso) + Number(opcadastrada15) + Number(ultimacoleta15.opcoleta15)),
                    dtnecessidade: dtnecessidade,

                },
            });
            await iql.$disconnect()
        }


        //       }

        //    dataAtual = '2024-10-11 19:19:56';

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

async function verificaFinalizado(Codigo_produto, datainventario) {

    let opfinalizada = 0;

    const finalizado = await corp.$queryRaw`
    select SUM(io.Quantidade_final) as opfinalizada
    from [dbo].[Itens_op] as io
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
    and co.Data_finalizacao >= ${datainventario}
    and io.Codigo_produto = ${Codigo_produto}
    group by
    io.Apelido_empresa ,       
    io.Apelido_estabelecimento ,
    io.Codigo_produto
    `;

    await corp.$disconnect();

    if (finalizado.length != 0) {
        //           console.log(finalizado[0].opfinalizada);
        opfinalizada = finalizado[0].opfinalizada;

    }
    return (opfinalizada);
}

async function verificaConsumoMedio(Codigo_produto) {

    let consumo = 0;

    const finalizado = await corp.$queryRaw`
                select SUM(io.Quantidade_final) as consumo
                from [dbo].[Itens_op] as io
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
                and io.Codigo_produto = ${Codigo_produto}
                and co.Data_finalizacao        >= DATEADD(MONTH, -12, GETDATE())
                and (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005')
                group by 
                io.Codigo_produto ,
                ia.Desc_tecnica
                order by 
				io.Codigo_produto
    `;

    await corp.$disconnect();

    if (finalizado.length != 0) {
        //           console.log(finalizado[0].opfinalizada);
        consumo = finalizado[0].consumo;

    }
    return (consumo);
}

async function verificaConsumoMedioIntermediario(Codigo_produto) {

    let consumo = 0;

    const finalizado = await corp.$queryRaw`
                 select SUM(io.Quantidade_final) as consumo
                from [dbo].[Itens_op] as io
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
                and io.Codigo_produto = ${Codigo_produto}
                and co.Data_finalizacao        >= DATEADD(MONTH, -12, GETDATE())
                and ia.Codigo_tipo_item = '002' 
                group by 
                io.Codigo_produto ,
                ia.Desc_tecnica
                order by 
				io.Codigo_produto
    `;

    await corp.$disconnect();

    if (finalizado.length != 0) {
        //           console.log(finalizado[0].opfinalizada);
        consumo = finalizado[0].consumo;

    }
    return (consumo);
}

async function verificaEmprocesso(Codigo_produto, datainventario) {

    opemprocesso = 0;

    const emprocesso = await corp.$queryRaw`
    select SUM(io3.Quantidade_inicial) as opemprocesso
    from [dbo].[Itens_op] as io3
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
    and co3.Data_inicio >= ${datainventario}
    and io3.Codigo_produto = ${Codigo_produto}
    group by
    io3.Apelido_empresa ,       
    io3.Apelido_estabelecimento ,
    io3.Codigo_produto
    `;

    await corp.$disconnect();

    if (emprocesso.length != 0) {
        //           console.log(emprocesso[0].opemprocesso);
        opemprocesso = emprocesso[0].opemprocesso;

    }

    return (opemprocesso);
}

async function verificaCadastrada(Codigo_produto) {

    opcadastrada = 0;

    const cadastrada = await corp.$queryRaw`
    select SUM(io.Quantidade_inicial) as opcadastrada
    from [dbo].[Itens_op] as io
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
    and co.Status_op = 'Cadastrada' 
    and io.Codigo_produto = ${Codigo_produto}
    group by
    io.Apelido_empresa ,       
    io.Apelido_estabelecimento ,
    io.Codigo_produto
    `;

    await corp.$disconnect();


    if (cadastrada.length != 0) {
        //            console.log(cadastrada[0].opcadastrada);
        opcadastrada = cadastrada[0].opcadastrada;

    }

    return (opcadastrada);

}

async function verificaCadastrada15(Codigo_produto, dtfinal) {

    opcadastrada15 = 0;

    const cadastrada = await corp.$queryRaw`
    select SUM(io4.Quantidade_inicial) as opcadastrada
    from [dbo].[Itens_op] as io4
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
    and io4.Codigo_produto          = ${Codigo_produto}
    and (co4.data_producao          <= ${dtfinal} or co4.data_producao          is Null)
    `;

    await corp.$disconnect();


    if (cadastrada.length != 0) {

        console.log(Codigo_produto + ' ' + cadastrada[0].opcadastrada + ' ' + dtfinal);
        opcadastrada15 = cadastrada[0].opcadastrada;

    }

    return (opcadastrada15);

}

async function verificaCadastrada30(Codigo_produto) {

    opcadastrada30 = 0;

    const cadastrada = await corp.$queryRaw`
    select SUM(io.Quantidade_inicial) as opcadastrada
    from [dbo].[Itens_op] as io
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
    and co.Status_op = 'Cadastrada' 
    and io.Codigo_produto = ${Codigo_produto}
	and co.Termino_previsto  >= DATEADD(DAY, 15, GETDATE())
	and co.Termino_previsto  < DATEADD(DAY, 30, GETDATE())
    `;

    await corp.$disconnect();


    if (cadastrada.length != 0) {
        //            console.log(cadastrada[0].opcadastrada);
        opcadastrada30 = cadastrada[0].opcadastrada;

    }

    return (opcadastrada30);

}

async function verificaColeta(Codigo_produto) {

    opcoleta = 0;
    datacoleta = null;

    const coleta = await corp.$queryRaw`
    select SUM([ip].Quantidade_pedido) as opcoleta, [cp].Data_para_coletar as datacoleta
    from [dbo].coleta_pedido_insumos as [ip]
    inner JOIN [dbo].[Capa_producao_estoque] AS cp ON 
    (cp.Apelido_empresa         = [ip].Apelido_empresa AND
    cp.Apelido_estabelecimento  = [ip].Apelido_estabelecimento AND
    cp.id_producao_estoque_capa = [ip].id_producao_estoque_capa)
    where
    [ip].Apelido_empresa         = 'IQL Tintas'  and 
    [ip].Apelido_estabelecimento = 'Matriz' and
    [cp].[status_coleta]         = '' and
    [ip].Codigo_produto          = ${Codigo_produto} 
    group by
    [ip].Apelido_empresa       ,
    [ip].Apelido_estabelecimento ,
    [cp].[status_coleta]        ,
    [ip].Codigo_produto       ,
	[cp].Data_para_coletar
    order by 
	[cp].Data_para_coletar desc
   
    `;

    await corp.$disconnect();

    if (coleta.length != 0) {
        //           console.log(coleta[0].opcoleta);
        opcoleta = coleta[0].opcoleta;
        datacoleta = coleta[0].datacoleta;

    }

    return (opcoleta);

}

async function verificaColeta15(Codigo_produto, dtfinal) {

    opcoleta15 = 0;
    datacoleta15 = null;

    const ultimacoleta15 = await corp.$queryRaw`
    select SUM([ip6].Quantidade_pedido) as opcoleta, [cp6].Data_para_coletar as datacoleta
    from [dbo].coleta_pedido_insumos as [ip6]
    inner JOIN [dbo].[Capa_producao_estoque] AS cp6 ON 
    (cp6.Apelido_empresa         = [ip6].Apelido_empresa AND
    cp6.Apelido_estabelecimento  = [ip6].Apelido_estabelecimento AND
    cp6.id_producao_estoque_capa = [ip6].id_producao_estoque_capa)
    where
    [ip6].Apelido_empresa         = 'IQL Tintas'  and 
    [ip6].Apelido_estabelecimento = 'Matriz' and
    [cp6].[status_coleta]         = '' and
    [ip6].Codigo_produto          = ${Codigo_produto} and
    [cp6].Data_para_coletar  <= ${dtfinal}
    group by
    [ip6].Apelido_empresa       ,
    [ip6].Apelido_estabelecimento ,
    [cp6].[status_coleta]        ,
    [ip6].Codigo_produto       ,
	[cp6].Data_para_coletar
    order by 
	[cp6].Data_para_coletar desc
   
    `;

    await corp.$disconnect();

    if (ultimacoleta15.length != 0) {

        opcoleta15 = ultimacoleta15[0].opcoleta;
        datacoleta15 = ultimacoleta15[0].datacoleta;
    } else {

    }

    return { opcoleta15, datacoleta15 };

}

async function verificaColeta30(Codigo_produto) {

    opcoleta30 = 0;
    datacoleta30 = null;

    const coleta = await corp.$queryRaw`
    select SUM([ip].Quantidade_pedido) as opcoleta, [cp].Data_para_coletar as datacoleta
    from [dbo].coleta_pedido_insumos as [ip]
    inner JOIN [dbo].[Capa_producao_estoque] AS cp ON 
    (cp.Apelido_empresa         = [ip].Apelido_empresa AND
    cp.Apelido_estabelecimento  = [ip].Apelido_estabelecimento AND
    cp.id_producao_estoque_capa = [ip].id_producao_estoque_capa)
    where
    [ip].Apelido_empresa         = 'IQL Tintas'  and 
    [ip].Apelido_estabelecimento = 'Matriz' and
    [cp].[status_coleta]         = '' and
    [ip].Codigo_produto          = ${Codigo_produto} and
    [cp].Data_para_coletar  >= DATEADD(DAY, 15, GETDATE()) and
	[cp].Data_para_coletar  < DATEADD(DAY, 30, GETDATE())
    group by
    [ip].Apelido_empresa       ,
    [ip].Apelido_estabelecimento ,
    [cp].[status_coleta]        ,
    [ip].Codigo_produto       ,
	[cp].Data_para_coletar
    order by 
	[cp].Data_para_coletar desc
   
    `;

    await corp.$disconnect();

    if (coleta.length != 0) {
        //           console.log(coleta[0].opcoleta);
        opcoleta30 = coleta[0].opcoleta;
        datacoleta30 = coleta[0].datacoleta;

    }

    return (opcoleta30);

}

async function verificaCompra(Codigo_produto) {

    opcompra = 0;

    const compra = await corp.$queryRaw`
    select 
    sum([rq].[Quantidade requisitada]-[rq].quantidade_recebida)  as opcompra
    FROM [corp].[dbo].[requisicao] as [rq]
    where 
    [rq].Apelido_empresa = 'IQL Tintas' and
    [rq].Apelido_estabelecimento = 'Matriz' and
    [rq].[Codigo material] = ${Codigo_produto} and
    [rq].[Status requisicao] = 'Comprado' and
    [rq].[data compra] >= '2024-10-01'
    group by 
    [rq].Apelido_empresa,
    [rq].Apelido_estabelecimento,
    [rq].[Codigo material],
    [rq].[Status requisicao]
    `;

    await corp.$disconnect();

    if (compra.length != 0) {
        //           console.log(compra[0].opcompra);
        opcompra = compra[0].opcompra;
    }

    return (opcompra);

}

async function verificaCompra15(Codigo_produto, dtfinal) {

    opcompra15 = 0;

    const compra = await corp.$queryRaw`
   select 
    sum([rq].[Quantidade requisitada]-[rq].quantidade_recebida)  as opcompra
    FROM [dbo].[requisicao] as [rq]
    	LEFT JOIN [dbo].[Pedido compra] AS pc ON 
    (
		pc.[Apelido_empresa]         = rq.[Apelido_empresa] AND 
        pc.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
        pc.[Pedido compra numero]    = rq.[Pedido compra numero]
    )
    where 
    [rq].Apelido_empresa = 'IQL Tintas' and
    [rq].Apelido_estabelecimento = 'Matriz' and
    [rq].[Codigo material] = ${Codigo_produto} and
    [rq].[Status requisicao] = 'Comprado' and
    [rq].[data compra] >= '2024-10-01' and
   	[rq].[Data necessidade]  <= ${dtfinal} and
    [pc].status_pedido <> 'NÃO APROVADO'
    group by 
    [rq].Apelido_empresa,
    [rq].Apelido_estabelecimento,
    [rq].[Codigo material],
    [rq].[Status requisicao]
    `;

    await corp.$disconnect();

    if (compra.length != 0) {
        //           console.log(compra[0].opcompra);
        opcompra15 = compra[0].opcompra;
    }

    return (opcompra15);

}

async function verificaCompra30(Codigo_produto) {

    opcompra30 = 0;

    const compra = await corp.$queryRaw`
    select 
    sum([rq].[Quantidade requisitada]-[rq].quantidade_recebida)  as opcompra
    FROM [corp].[dbo].[requisicao] as [rq]
    where 
    [rq].Apelido_empresa = 'IQL Tintas' and
    [rq].Apelido_estabelecimento = 'Matriz' and
    [rq].[Codigo material] = ${Codigo_produto} and
    [rq].[Status requisicao] = 'Comprado' and
    [rq].[data compra] >= '2024-10-01' and
    [rq].[Data necessidade]  >= DATEADD(DAY, 15, GETDATE()) and
	[rq].[Data necessidade]  < DATEADD(DAY, 30, GETDATE())
    group by 
    [rq].Apelido_empresa,
    [rq].Apelido_estabelecimento,
    [rq].[Codigo material],
    [rq].[Status requisicao]
    `;

    await corp.$disconnect();

    if (compra.length != 0) {
        //           console.log(compra[0].opcompra);
        opcompra30 = compra[0].opcompra;
    }

    return (opcompra30);

}

async function verificaCompraParcial(Codigo_produto, datainventario) {

    opcompraparc = 0;

    const compra = await corp.$queryRaw`
     select 
    sum([rq].quantidade_recebida)  as opcompraEntregue
    FROM [dbo].[requisicao] as [rq]
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
    [rq].[Codigo material] = ${Codigo_produto} and
    [rq].[Status requisicao] = 'Comprado' and
    [cr].[Data_entrada] >= ${datainventario} and
    [pc].status_pedido <> 'NÃO APROVADO'
    group by 
    [rq].Apelido_empresa,
    [rq].Apelido_estabelecimento,
    [rq].[Codigo material],
    [rq].[Status requisicao]
    `;

    await corp.$disconnect();

    if (compra.length != 0) {
        //           console.log(compra[0].opcompra);
        opcompraparc = compra[0].opcompraparc;
    }

    return (opcompraparc);

}

async function verificaCompraEntregue(Codigo_produto, datainventario) {

    opcompraEntregue = 0;

    const compraatendido = await corp.$queryRaw`
     select 
    sum([rq].quantidade_recebida)  as opcompraEntregue
    FROM [dbo].[requisicao] as [rq]
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
    [rq].[Codigo material] = ${Codigo_produto} and
    [rq].[Status requisicao] = 'Atendido' and
    [cr].[Data_entrada] >= ${datainventario} and
    [pc].status_pedido <> 'NÃO APROVADO'
    group by 
    [rq].Apelido_empresa,
    [rq].Apelido_estabelecimento,
    [rq].[Codigo material],
    [rq].[Status requisicao]
    `;

    await corp.$disconnect();

    if (compraatendido.length != 0) {
        //           console.log(compra[0].opcompra);
        opcompraEntregue = compraatendido[0].opcompraEntregue;

    }

    return (opcompraEntregue);



}

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

async function verificaValorCompra() {



}

async function verificaValorVenda(Codigo_produto, dtfinal) {
    valorvenda = 0;

    const pedidovenda = await corp.$queryRaw`
    select sum(ip.Valor) as valorvenda
    from [dbo].[Itens_op] as io4
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
    and io4.Codigo_produto =  ${Codigo_produto}
	and co4.Termino_previsto  <= ${dtfinal}
   `;

    await corp.$disconnect();

    if (pedidovenda.length != 0) {
        console.log("Valor pedido venda = " + pedidovenda[0].valorvenda);
        valorvenda = pedidovenda[0].valorvenda;

    }

    return (valorvenda);

}

async function verificaUltimacompra(Codigo_produto) {

    valorultimacompra = 0;
    dataultimacompra = null;


    const ultimacompra = await corp.$queryRaw`
    select top 1
rq.[valor unitario final] as valorultimacompra, rq.[Data compra] as dataultimacompra
    FROM [dbo].[requisicao] as [rq]
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
    [rq].[Codigo material] =  ${Codigo_produto} and
    [rq].[Status requisicao] = 'Atendido' 
	order by
	[cr].[Data_entrada] desc
    `;

    await corp.$disconnect();

    if (ultimacompra.length != 0) {
        //           console.log(emprocesso[0].opemprocesso);
        valorultimacompra = ultimacompra[0].valorultimacompra;
        dataultimacompra = ultimacompra[0].dataultimacompra;
    }

    return { valorultimacompra, dataultimacompra };
    // return (valorultimacompra);
}

async function verificaFinalizadoIntermediario(Codigo_produto, datainventario) {

    console.log('verificaFinalizadoIntermediario', datainventario, Codigo_produto);

    let opfinalizada = 0;

    const finalizado = await corp.$queryRaw`
   select SUM(co.Quantidade_final) as opfinalizada
    from [dbo].[Capa_op] as co
    LEFT JOIN [dbo].[Itens_almox] AS ia ON 
    (  ia.[Apelido_empresa] = co.[Apelido_empresa] AND 
       ia.[Apelido_estabelecimento] = co.[Apelido_estabelecimento] AND 
       ia.[Codigo_produto] = co.Codigo_produto
    )
    where 
        co.Apelido_empresa         = 'IQL Tintas' 
    and co.Apelido_estabelecimento = 'Matriz'
    and co.Status_op = 'Finalizada' 
    and co.Data_finalizacao >= ${datainventario}
    and co.Codigo_produto = ${Codigo_produto}
    group by
    co.Apelido_empresa ,       
    co.Apelido_estabelecimento ,
    co.Codigo_produto
 
    `;

    await corp.$disconnect();

    if (finalizado.length != 0) {
        console.log(finalizado[0].opfinalizada);
        opfinalizada = finalizado[0].opfinalizada;

    }
    return (opfinalizada);
}

async function verificaEmprocessoIntermediario(Codigo_produto, datainventario) {

    opemprocesso = 0;

    const emprocesso = await corp.$queryRaw`
    select SUM(co.Quantidade_inicial) as opemprocesso
    from [dbo].[Capa_op] as co
    LEFT JOIN [dbo].[Itens_almox] AS ia ON 
    (  ia.[Apelido_empresa] = co.[Apelido_empresa] AND 
       ia.[Apelido_estabelecimento] = co.[Apelido_estabelecimento] AND 
       ia.[Codigo_produto] = co.Codigo_produto
    )
    where 
        co.Apelido_empresa         = 'IQL Tintas' 
    and co.Apelido_estabelecimento = 'Matriz'
    and co.Status_op = 'Em andamento' 
    and co.Data_finalizacao >= ${datainventario}
    and co.Codigo_produto = ${Codigo_produto}
    group by
    co.Apelido_empresa ,       
    co.Apelido_estabelecimento ,
    co.Codigo_produto
    `;

    await corp.$disconnect();

    if (emprocesso.length != 0) {
        //           console.log(emprocesso[0].opemprocesso);
        opemprocesso = emprocesso[0].opemprocesso;

    }

    return (opemprocesso);
}

async function verificaCadastrada15Intermediario(Codigo_produto, dtfinal) {

    opcadastrada15 = 0;

    const cadastrada = await corp.$queryRaw`
    select SUM(co.Quantidade_inicial) as opcadastrada
        from [dbo].[Capa_op] as co
        LEFT JOIN [dbo].[Itens_almox] AS ia ON 
        (
          ia.[Apelido_empresa] = co.[Apelido_empresa] AND 
          ia.[Apelido_estabelecimento] = co.[Apelido_estabelecimento] AND 
          ia.[Codigo_produto] = co.Codigo_produto
        )
        where 
              co.Apelido_empresa         = 'IQL Tintas' 
          and co.Apelido_estabelecimento = 'Matriz'
          and co.Status_op = 'Cadastrada' 
          and co.Data_finalizacao >= ${dtfinal}
          and co.Codigo_produto = ${Codigo_produto}
        group by
          co.Apelido_empresa ,       
          co.Apelido_estabelecimento ,
          co.Codigo_produto
    `;

    await corp.$disconnect();


    if (cadastrada.length != 0) {

        console.log(Codigo_produto + ' ' + cadastrada[0].opcadastrada + ' ' + dtfinal);
        opcadastrada15 = cadastrada[0].opcadastrada;

    }

    return (opcadastrada15);

}

async function verificaColeta15Intermediario(Codigo_produto, dtfinal) {

    opcoleta15 = 0;
    datacoleta15 = null;

    const ultimacoleta15 = await corp.$queryRaw`
    select SUM([ip6].Quantidade_pedido) as opcoleta, [cp6].Data_para_coletar as datacoleta
    from [dbo].coleta_pedido_insumos as [ip6]
    inner JOIN [dbo].[Capa_producao_estoque] AS cp6 ON 
    (cp6.Apelido_empresa         = [ip6].Apelido_empresa AND
    cp6.Apelido_estabelecimento  = [ip6].Apelido_estabelecimento AND
    cp6.id_producao_estoque_capa = [ip6].id_producao_estoque_capa)
    where
    [ip6].Apelido_empresa         = 'IQL Tintas'  and 
    [ip6].Apelido_estabelecimento = 'Matriz' and
    [cp6].[status_coleta]         = '' and
    [ip6].Codigo_produto          = ${Codigo_produto} and
    [cp6].Data_para_coletar  <= ${dtfinal}
    group by
    [ip6].Apelido_empresa       ,
    [ip6].Apelido_estabelecimento ,
    [cp6].[status_coleta]        ,
    [ip6].Codigo_produto       ,
	[cp6].Data_para_coletar
    order by 
	[cp6].Data_para_coletar desc
   
    `;

    await corp.$disconnect();

    if (ultimacoleta15.length != 0) {

        opcoleta15 = ultimacoleta15[0].opcoleta;
        datacoleta15 = ultimacoleta15[0].datacoleta;
    } else {

    }

    return { opcoleta15, datacoleta15 };

}

function gerarPassword() {
    return Math.random().toString(36).slice(-10);
}

exports.getFornecedor = async (req, res, next) => {
    try {

        console.log(req.body);


        const fornecedors = await corp.$queryRaw`
    WITH UltimaCompra AS (
    SELECT 
        rq.[Codigo material] AS codigo_produto,
		ag.[Codigo_agentes] as codigo,
        ag.Nome AS nome,
		ag.Telefone AS telefone,
        rq.quantidade_recebida,
        rq.[Quantidade requisitada] AS quantidade_requisitada,
        rq.[Data compra] AS datacompra,
		rq.[valor unitario final] AS valorunitario,
        ROW_NUMBER() OVER (PARTITION BY ag.Nome ORDER BY rq.[Data compra] DESC) AS row_num
    FROM 
        dbo.requisicao AS rq
    INNER JOIN 
        dbo.[Pedido compra] AS pc ON
        rq.Apelido_empresa = pc.Apelido_empresa AND
        rq.Apelido_estabelecimento = pc.Apelido_estabelecimento AND
        rq.[Pedido compra numero] = pc.[Pedido compra numero]
    LEFT JOIN 
        dbo.[Agente] AS ag ON 
        pc.Apelido_empresa = ag.Apelido_empresa AND
        pc.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
        pc.[Codigo] = ag.[Codigo_agentes]
    WHERE 
        rq.[Codigo material] = ${req.body.codigo_produto}
    )
    SELECT TOP 10 
        codigo_produto,
	    codigo,
        nome,
	    telefone,
        quantidade_recebida,
        quantidade_requisitada,
        datacompra,
	    valorunitario
    FROM 
        UltimaCompra
    WHERE 
        row_num = 1
    ORDER BY 
        datacompra DESC;
 
                `;

        await corp.$disconnect();







        const response = {
            ok: true,
            length: fornecedors.length,
            fornecedors: fornecedors
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

exports.getSituacaoOP = async (req, res, next) => {
    try {

        console.log(req.body);
        const graficoSituacaoOPs = await corp.$queryRaw`
WITH OP_Andamento AS (
    SELECT 
        co.Numero_op, 
        co.Data_criacao, 
        co.Data_inicio,
        co.Status_op,
        CASE 
            WHEN MAX(CASE WHEN pp.Descricao_producao = 'Moagem' THEN 1 ELSE 0 END) = 1 THEN 'Moagem'
            ELSE 'Normal'
        END AS Tipo,
        CASE 
            WHEN MAX(CASE WHEN pp.Descricao_producao = 'Moagem' THEN 1 ELSE 0 END) = 1 
                THEN DATEADD(DAY, 4 + ((4 / 5) * 2) + 
                    CASE WHEN (4 % 5) + DATEPART(WEEKDAY, co.Data_inicio + 1) > 6 THEN 2 
                         WHEN (4 % 5) + DATEPART(WEEKDAY, co.Data_inicio + 1) = 6 THEN 1 
                         ELSE 0 
                    END, co.Data_inicio)
            ELSE DATEADD(DAY, 2 + ((2 / 5) * 2) + 
                    CASE WHEN (2 % 5) + DATEPART(WEEKDAY, co.Data_inicio + 1) > 6 THEN 2 
                         WHEN (2 % 5) + DATEPART(WEEKDAY, co.Data_inicio + 1) = 6 THEN 1 
                         ELSE 0 
                    END, co.Data_inicio)
        END AS Data_Final
    FROM 
        [dbo].[Capa_op] AS co
    LEFT JOIN [dbo].[Processo_op] AS po 
        ON co.Apelido_empresa = po.Apelido_empresa 
        AND co.Apelido_estabelecimento = po.Apelido_estabelecimento 
        AND co.Numero_op = po.Numero_op
    LEFT JOIN [dbo].[Producao_processos] AS pp 
        ON pp.Apelido_empresa = po.Apelido_empresa 
        AND pp.Apelido_estabelecimento = po.Apelido_estabelecimento 
        AND pp.Codigo_processo = po.Codigo_processo
    WHERE 
        co.Apelido_empresa = 'IQL Tintas' 
        AND co.Apelido_estabelecimento = 'Matriz'
        AND co.Status_op = 'Em andamento'
        AND co.Data_criacao > '2024-01-01'
    GROUP BY
        co.Numero_op, 
        co.Data_criacao,
        co.Data_inicio,
        co.Status_op
),
OP_Cadastrada AS (
    SELECT 
        co.Numero_op, 
        co.Data_criacao, 
        cp.Pedido_Para,
        co.Status_op,
        CASE 
            WHEN MAX(CASE WHEN pp.Descricao_producao = 'Moagem' THEN 1 ELSE 0 END) = 1 THEN 'Moagem'
            ELSE 'Normal'
        END AS Tipo,
        CASE 
            WHEN MAX(CASE WHEN pp.Descricao_producao = 'Moagem' THEN 1 ELSE 0 END) = 1 
                THEN DATEADD(DAY, -4 - 
                                ((4 / 5) * 2) - 
                                CASE WHEN (4 % 5) + DATEPART(WEEKDAY, cp.Pedido_Para - 1) > 6 THEN 2 
                                     WHEN (4 % 5) + DATEPART(WEEKDAY, cp.Pedido_Para - 1) = 6 THEN 1 
                                     ELSE 0 
                                END, cp.Pedido_Para - 1)
            ELSE DATEADD(DAY, -2 - 
                             ((2 / 5) * 2) - 
                             CASE WHEN (2 % 5) + DATEPART(WEEKDAY, cp.Pedido_Para - 1) > 6 THEN 2 
                                  WHEN (2 % 5) + DATEPART(WEEKDAY, cp.Pedido_Para - 1) = 6 THEN 1 
                                  ELSE 0 
                             END, cp.Pedido_Para - 1)
        END AS Data_Final
    FROM 
        [dbo].[Capa_op] AS co
    LEFT JOIN [dbo].[Processo_op] AS po 
        ON co.Apelido_empresa = po.Apelido_empresa 
        AND co.Apelido_estabelecimento = po.Apelido_estabelecimento 
        AND co.Numero_op = po.Numero_op
    LEFT JOIN [dbo].[Producao_processos] AS pp 
        ON pp.Apelido_empresa = po.Apelido_empresa 
        AND pp.Apelido_estabelecimento = po.Apelido_estabelecimento 
        AND pp.Codigo_processo = po.Codigo_processo
    LEFT JOIN [dbo].[Capa Pedido] AS cp 
        ON co.Apelido_empresa = cp.Apelido_empresa 
        AND co.Apelido_estabelecimento = cp.Apelido_estabelecimento 
        AND co.Numero_pedido_venda = cp.[Numero Pedido]
    WHERE 
        co.Apelido_empresa = 'IQL Tintas' 
        AND co.Apelido_estabelecimento = 'Matriz'
        AND co.Status_op = 'Cadastrada'
        AND co.Data_criacao > '2024-01-01'
    GROUP BY
        co.Numero_op, 
        co.Data_criacao,
        cp.Pedido_Para,
        co.Status_op
),
FilteredData AS (
    SELECT *, 
           CASE WHEN Data_Final < GETDATE() THEN 'Atrasado' ELSE 'Dentro do prazo' END AS Situacao
    FROM (
        SELECT * FROM OP_Andamento
        UNION ALL
        SELECT * FROM OP_Cadastrada
    ) AS Combined
)
SELECT 
    Status_op,
    Tipo,
    Situacao,
    COUNT(*) AS NumOP
FROM FilteredData
GROUP BY 
    Status_op, 
    Tipo,
    Situacao
ORDER BY
    Tipo,
    Situacao;

                `;

        await corp.$disconnect();

        const response = {
            ok: true,
            length: graficoSituacaoOPs.length,
            graficoSituacaoOPs: graficoSituacaoOPs
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

exports.getPagamentos7dias = async (req, res, next) => {
    try {

        console.log(req.body);
        const graficoPagamentos7dias = await corp.$queryRaw`
SELECT  
    tt.data_vencto AS Data_Vencimento,
    SUM(tt.Valor_titulo) AS Valor_Total_Titulo,
    SUM(tt.Saldo_titulo) AS Saldo_Total_Titulo,
    SUM(tt.Valor_titulo - tt.Saldo_titulo) AS Valor_Total_Pagamento
FROM 
    [corp].[dbo].[Titulos] AS tt
WHERE 
    tt.Apelido_empresa = 'IQL Tintas' AND
    tt.Apelido_estabelecimento = 'Matriz' AND
    tt.pag_rec = 'P' AND
--    tt.data_vencto >= '2024-10-01' AND
    tt.data_vencto > GETDATE() AND
	tt.Saldo_titulo <> 0 AND
	tt.data_vencto < GETDATE() +7
GROUP BY 
    tt.data_vencto
ORDER BY 
    tt.data_vencto ASC;
                `;

        await corp.$disconnect();

        const response = {
            ok: true,
            length: graficoPagamentos7dias.length,
            graficoPagamentos7dias: graficoPagamentos7dias
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

exports.getRecebimento7dias = async (req, res, next) => {
    try {

        console.log(req.body);
        const graficoRecebimentos7dias = await corp.$queryRaw`
SELECT  
    tt.data_vencto AS Data_Vencimento,
    SUM(tt.Valor_titulo) AS Valor_Total_Titulo,
    SUM(tt.Saldo_titulo) AS Saldo_Total_Titulo,
    SUM(tt.Valor_titulo - tt.Saldo_titulo) AS Valor_Total_Pagamento
FROM 
    [corp].[dbo].[Titulos] AS tt
WHERE 
    tt.Apelido_empresa = 'IQL Tintas' AND
    tt.Apelido_estabelecimento = 'Matriz' AND
    tt.pag_rec = 'R' AND
--    tt.data_vencto >= '2024-10-01' AND
    tt.data_vencto > GETDATE() AND
	tt.Saldo_titulo <> 0 AND
	tt.data_vencto < GETDATE() +7
GROUP BY 
    tt.data_vencto
ORDER BY 
    tt.data_vencto ASC;
                `;

        await corp.$disconnect();

        const response = {
            ok: true,
            length: graficoRecebimentos7dias.length,
            graficoRecebimentos7dias: graficoRecebimentos7dias
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

exports.getVendas7dias = async (req, res, next) => {
    try {

        console.log(req.body);
        const graficoVendas7dias = await corp.$queryRaw`
select cp.Data+1 as Data_pedido, 
SUM(cp.Valor_total) as valor_vendas
from dbo.[Capa Pedido] as cp
where 
cp.Data > Getdate() -7 and
cp.Data <= Getdate()
group by
cp.Data
order by 
cp.Data
                `;

        await corp.$disconnect();

        const response = {
            ok: true,
            length: graficoVendas7dias.length,
            graficoVendas7dias: graficoVendas7dias
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

exports.getOpCadstradaCustodias = async (req, res, next) => {
    try {

        const graficoOpCadstradaCustodias = await corp.$queryRaw`
WITH OPCadastrada AS (
SELECT 
	co.lote_interno as Lote,
	co.Numero_pedido_venda as Pedido_vendas,
	ag.Nome as Cliente,
	co.Usuario_cadastramento,
    io.Numero_op,
    co.data_producao,
	co.Data_criacao,
    es.deprec_ct_form_preco AS Depreciacao_preco,
    ISNULL(
        (
            SELECT TOP 1 
                cv.[VALOR CUSTO]
            FROM 
                CUSTO_VALOR AS cv WITH(NOLOCK)
            WHERE 
                cv.APELIDO_EMPRESA = io.APELIDO_EMPRESA AND 
                cv.APELIDO_ESTABELECIMENTO = io.APELIDO_ESTABELECIMENTO AND
                cv.CODIGO_PRODUTO = io.CODIGO_PRODUTO AND
                cv.DATA <= co.DATA_PRODUCAO
            ORDER BY 
                cv.DATA DESC -- Ordena pela data mais recente
        ), 0
    ) AS Valor_unitario,
    io.Quantidade_inicial,
	io.Quantidade_final,
    io.Quantidade_inicial * 
        ISNULL(
            (
                SELECT TOP 1 
                    cv.[VALOR CUSTO]
                FROM 
                    CUSTO_VALOR AS cv WITH(NOLOCK)
                WHERE 
                    cv.APELIDO_EMPRESA = io.APELIDO_EMPRESA AND 
                    cv.APELIDO_ESTABELECIMENTO = io.APELIDO_ESTABELECIMENTO AND
                    cv.CODIGO_PRODUTO = io.CODIGO_PRODUTO AND
                    cv.DATA <= co.DATA_PRODUCAO
                ORDER BY 
                    cv.DATA DESC
            ), 0
        ) * 
        (1 - ISNULL(es.deprec_ct_form_preco, 0) / 100) AS Valor_item
FROM 
    dbo.Itens_op AS io
LEFT JOIN 
    dbo.[Capa_op] AS co 
    ON (
        io.[Apelido_empresa] = co.[Apelido_empresa] AND 
        io.[Apelido_estabelecimento] = co.[Apelido_estabelecimento] AND 
        io.Numero_op = co.Numero_op
    )
LEFT JOIN 
    estoque AS es WITH(NOLOCK) 
    ON (
        es.apelido_empresa = co.apelido_empresa AND 
        es.apelido_estabelecimento = co.apelido_estabelecimento AND
        es.codigo = co.codigo_estoque 
    )
INNER JOIN 
    ITENS_ALMOX AS ia 
    ON (
        io.APELIDO_EMPRESA = ia.APELIDO_EMPRESA AND     
        io.APELIDO_ESTABELECIMENTO = ia.APELIDO_ESTABELECIMENTO AND      
        io.CODIGO_PRODUTO = ia.CODIGO_PRODUTO
    )
	left join dbo.[Capa Pedido] as cp on
(
		co.[Apelido_empresa]         = cp.[Apelido_empresa] AND 
        co.[Apelido_estabelecimento] = cp.[Apelido_estabelecimento] AND 
        co.Numero_pedido_venda       = cp.[Numero Pedido] and
		cp.Situacao_pedido           <> 'CANCELADO'
)
left join [dbo].[Agente] as ag on 
( 
		cp.Apelido_empresa         = ag.Apelido_empresa and
		cp.Apelido_estabelecimento = ag.Apelido_estabelecimento and
		cp.[Agente_Faturamento]    = ag.[Codigo_agentes]
)
WHERE 
--    co.Numero_op= '38882' and
--    data_producao is null and
    co.Status_op = 'Cadastrada' 
)
SELECT 
FORMAT(data_producao, 'dd/MM/yyyy') AS Data_pedido,
SUM(Valor_item) AS Valor_OP
FROM OPCadastrada
where 
data_producao is not null
GROUP BY 
data_producao
Order by
data_producao
                `;

        await corp.$disconnect();

        console.log(graficoOpCadstradaCustodias);

        const response = {
            ok: true,
            length: graficoOpCadstradaCustodias.length,
            graficoOpCadstradaCustodias: graficoOpCadstradaCustodias
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

exports.postConsultaImpostos = async (req, res, next) => {

    const now = new Date();

    // Obter o mês (os meses começam do 0, então somamos 1)
    const month = now.getMonth() + 1;

    // Obter o ano
    const year = now.getFullYear();

    try {

        const DadosdeImpostos = await corp.$queryRaw`
SELECT 
    Imposto,
    SUM(CASE WHEN Entrada_saida = 'ENTRADA' THEN Valor ELSE 0 END) AS Entrada,
    SUM(CASE WHEN Entrada_saida = 'SAIDA' THEN Valor ELSE 0 END) AS Saida,
    SUM(CASE WHEN Entrada_saida = 'SAIDA' THEN Valor ELSE 0 END) - SUM(CASE WHEN Entrada_saida = 'ENTRADA' THEN Valor ELSE 0 END) AS Diferenca
FROM (
    SELECT 
        '2 - ICMS' AS Imposto,
        'Entrada' as Entrada_saida,
        SUM(DISTINCT cr.Valor_ICMS) AS Valor
    FROM dbo.[Capa_recebimento] AS cr WITH(NOLOCK)
    WHERE 
        cr.Apelido_empresa = 'IQL Tintas' AND
        cr.Apelido_estabelecimento = 'Matriz' AND
        MONTH(cr.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cr.Data_Emissao) = ${year}
    GROUP BY Entrada_saida
	
    UNION ALL
	    SELECT 
        '1 - NF' AS Imposto,
        'Entrada' as Entrada_saida,
        SUM(DISTINCT cr.Valor_nf) AS Valor
    FROM dbo.[Capa_recebimento] AS cr WITH(NOLOCK)
    WHERE 
        cr.Apelido_empresa = 'IQL Tintas' AND
        cr.Apelido_estabelecimento = 'Matriz' AND
        MONTH(cr.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cr.Data_Emissao) = ${year}
    GROUP BY Entrada_saida
	
    UNION ALL
		    SELECT 
        '3 - IPI' AS Imposto,
        'Entrada' as Entrada_saida,
        SUM(DISTINCT cr.Valor_IPI) AS Valor
    FROM dbo.[Capa_recebimento] AS cr WITH(NOLOCK)
    WHERE 
        cr.Apelido_empresa = 'IQL Tintas' AND
        cr.Apelido_estabelecimento = 'Matriz' AND
        MONTH(cr.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cr.Data_Emissao) = ${year}
    GROUP BY Entrada_saida
	
    UNION ALL

			    SELECT 
        '9 - CSLL' AS Imposto,
        'Entrada' as Entrada_saida,
        SUM(DISTINCT cr.valor_csll) AS Valor
    FROM dbo.[Capa_recebimento] AS cr WITH(NOLOCK)
    WHERE 
        cr.Apelido_empresa = 'IQL Tintas' AND
        cr.Apelido_estabelecimento = 'Matriz' AND
        MONTH(cr.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cr.Data_Emissao) = ${year}
    GROUP BY Entrada_saida
	
    UNION ALL
	
			    SELECT 
        '4 - INSS' AS Imposto,
        'Entrada' as Entrada_saida,
        SUM(DISTINCT cr.Valor_INSS) AS Valor
    FROM dbo.[Capa_recebimento] AS cr WITH(NOLOCK)
    WHERE 
        cr.Apelido_empresa = 'IQL Tintas' AND
        cr.Apelido_estabelecimento = 'Matriz' AND
        MONTH(cr.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cr.Data_Emissao) = ${year}
    GROUP BY Entrada_saida
	
    UNION ALL
		
			    SELECT 
        '5 - IR' AS Imposto,
        'Entrada' as Entrada_saida,
        SUM(DISTINCT cr.Valor_IR) AS Valor
    FROM dbo.[Capa_recebimento] AS cr WITH(NOLOCK)
    WHERE 
        cr.Apelido_empresa = 'IQL Tintas' AND
        cr.Apelido_estabelecimento = 'Matriz' AND
        MONTH(cr.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cr.Data_Emissao) = ${year}
    GROUP BY Entrada_saida
	
    UNION ALL
			
			    SELECT 
        '6 - COFINS' AS Imposto,
        'Entrada' as Entrada_saida,
        SUM(DISTINCT cr.valor_cofins) AS Valor
    FROM dbo.[Capa_recebimento] AS cr WITH(NOLOCK)
    WHERE 
        cr.Apelido_empresa = 'IQL Tintas' AND
        cr.Apelido_estabelecimento = 'Matriz' AND
        MONTH(cr.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cr.Data_Emissao) = ${year}
    GROUP BY Entrada_saida
	
    UNION ALL

				
			    SELECT 
        '8 - PIS' AS Imposto,
        'Entrada' as Entrada_saida,
        SUM(DISTINCT cr.valor_pis) AS Valor
    FROM dbo.[Capa_recebimento] AS cr WITH(NOLOCK)
    WHERE 
        cr.Apelido_empresa = 'IQL Tintas' AND
        cr.Apelido_estabelecimento = 'Matriz' AND
        MONTH(cr.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cr.Data_Emissao) = ${year}
    GROUP BY Entrada_saida
	
    UNION ALL
    SELECT 
        '2 - ICMS' AS Imposto,
        cf.Entrada_saida,
        SUM(DISTINCT cn.Val_ICMS) AS Valor
    FROM dbo.[Capa Nota] AS cn WITH(NOLOCK)
    LEFT JOIN dbo.Cfop AS cf 
        ON cn.Apelido_empresa = cf.Apelido_empresa AND
           cn.Codigo_CFOP = cf.Codigo_CFOP
    WHERE 
        cn.Apelido_empresa = 'IQL Tintas' AND
        cn.Apelido_estabelecimento = 'Matriz' AND
        cn.Status_sistema_nfe = 'AUTORIZADA' AND
        MONTH(cn.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cn.Data_Emissao) = ${year} AND
		cf.Entrada_saida = 'SAIDA'
    GROUP BY cf.Entrada_saida

    UNION ALL
    	    SELECT 
        '1 - NF' AS Imposto,
        cf.Entrada_saida,
        SUM(DISTINCT cn.Val_NF) AS Valor
    FROM dbo.[Capa Nota] AS cn WITH(NOLOCK)
    LEFT JOIN dbo.Cfop AS cf 
        ON cn.Apelido_empresa = cf.Apelido_empresa AND
           cn.Codigo_CFOP = cf.Codigo_CFOP
    WHERE 
        cn.Apelido_empresa = 'IQL Tintas' AND
        cn.Apelido_estabelecimento = 'Matriz' AND
        cn.Status_sistema_nfe = 'AUTORIZADA' AND
        MONTH(cn.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cn.Data_Emissao) = ${year} AND
		cf.Entrada_saida = 'SAIDA'
    GROUP BY cf.Entrada_saida

    UNION ALL

    SELECT 
        '3 - IPI' AS Imposto,
        cf.Entrada_saida,
        SUM(DISTINCT cn.Val_IPI) AS Valor
    FROM dbo.[Capa Nota] AS cn WITH(NOLOCK)
    LEFT JOIN dbo.Cfop AS cf 
        ON cn.Apelido_empresa = cf.Apelido_empresa AND
           cn.Codigo_CFOP = cf.Codigo_CFOP
    WHERE 
        cn.Apelido_empresa = 'IQL Tintas' AND
        cn.Apelido_estabelecimento = 'Matriz' AND
        cn.Status_sistema_nfe = 'AUTORIZADA' AND
        MONTH(cn.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cn.Data_Emissao) = ${year} AND
		cf.Entrada_saida = 'SAIDA'
    GROUP BY cf.Entrada_saida

    UNION ALL
	    SELECT 
        '9 - CSLL' AS Imposto,
        cf.Entrada_saida,
        SUM(DISTINCT cn.Valor_csll) AS Valor
    FROM dbo.[Capa Nota] AS cn WITH(NOLOCK)
    LEFT JOIN dbo.Cfop AS cf 
        ON cn.Apelido_empresa = cf.Apelido_empresa AND
           cn.Codigo_CFOP = cf.Codigo_CFOP
    WHERE 
        cn.Apelido_empresa = 'IQL Tintas' AND
        cn.Apelido_estabelecimento = 'Matriz' AND
        cn.Status_sistema_nfe = 'AUTORIZADA' AND
        MONTH(cn.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cn.Data_Emissao) = ${year} AND
		cf.Entrada_saida = 'SAIDA'
    GROUP BY cf.Entrada_saida

    UNION ALL
		    SELECT 
        '4 - INSS' AS Imposto,
        cf.Entrada_saida,
        SUM(DISTINCT cn.valor_inss) AS Valor
    FROM dbo.[Capa Nota] AS cn WITH(NOLOCK)
    LEFT JOIN dbo.Cfop AS cf 
        ON cn.Apelido_empresa = cf.Apelido_empresa AND
           cn.Codigo_CFOP = cf.Codigo_CFOP
    WHERE 
        cn.Apelido_empresa = 'IQL Tintas' AND
        cn.Apelido_estabelecimento = 'Matriz' AND
        cn.Status_sistema_nfe = 'AUTORIZADA' AND
        MONTH(cn.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cn.Data_Emissao) = ${year} AND
		cf.Entrada_saida = 'SAIDA'
    GROUP BY cf.Entrada_saida

    UNION ALL
		    SELECT 
        '5 - IR' AS Imposto,
        cf.Entrada_saida,
        SUM(DISTINCT cn.Valor_IR) AS Valor
    FROM dbo.[Capa Nota] AS cn WITH(NOLOCK)
    LEFT JOIN dbo.Cfop AS cf 
        ON cn.Apelido_empresa = cf.Apelido_empresa AND
           cn.Codigo_CFOP = cf.Codigo_CFOP
    WHERE 
        cn.Apelido_empresa = 'IQL Tintas' AND
        cn.Apelido_estabelecimento = 'Matriz' AND
        cn.Status_sistema_nfe = 'AUTORIZADA' AND
        MONTH(cn.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cn.Data_Emissao) = ${year} AND
		cf.Entrada_saida = 'SAIDA'
    GROUP BY cf.Entrada_saida

    UNION ALL

    -- Repita para COFINS, CSLL, INSS, IR...
    SELECT 
        '6 - COFINS' AS Imposto,
        cf.Entrada_saida,
        SUM(DISTINCT cn.valor_cofins) AS Valor
    FROM dbo.[Capa Nota] AS cn WITH(NOLOCK)
    LEFT JOIN dbo.Cfop AS cf 
        ON cn.Apelido_empresa = cf.Apelido_empresa AND
           cn.Codigo_CFOP = cf.Codigo_CFOP
    WHERE 
        cn.Apelido_empresa = 'IQL Tintas' AND
        cn.Apelido_estabelecimento = 'Matriz' AND
        cn.Status_sistema_nfe = 'AUTORIZADA' AND
        MONTH(cn.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cn.Data_Emissao) = ${year} AND
		cf.Entrada_saida = 'SAIDA'
    GROUP BY cf.Entrada_saida

	    UNION ALL


	    -- Repita para COFINS, CSLL, INSS, IR...
    SELECT 
        '8 - PIS' AS Imposto,
        cf.Entrada_saida,
        SUM(DISTINCT cn.valor_pis) AS Valor
    FROM dbo.[Capa Nota] AS cn WITH(NOLOCK)
    LEFT JOIN dbo.Cfop AS cf 
        ON cn.Apelido_empresa = cf.Apelido_empresa AND
           cn.Codigo_CFOP = cf.Codigo_CFOP
    WHERE 
        cn.Apelido_empresa = 'IQL Tintas' AND
        cn.Apelido_estabelecimento = 'Matriz' AND
        cn.Status_sistema_nfe = 'AUTORIZADA' AND
        MONTH(cn.Data_Emissao) = ${month} AND -- Dezembro
        YEAR(cn.Data_Emissao) = ${year} AND
		cf.Entrada_saida = 'SAIDA'
    GROUP BY cf.Entrada_saida

    -- Continue para os demais impostos
) AS Resultados
GROUP BY Imposto
ORDER BY Imposto;
                `;

        await corp.$disconnect();

        //        console.log(DadosdeImpostos);

        const response = {
            ok: true,
            length: DadosdeImpostos.length,
            DadosdeImpostos: DadosdeImpostos
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

exports.getConsultaPedidosemAtraso = async (req, res, next) => {

    const now = new Date();

    // Obter o mês (os meses começam do 0, então somamos 1)
    const month = now.getMonth() + 1;

    // Obter o ano
    const year = now.getFullYear();

    try {

        const pedidosematrasos = await corp.$queryRaw`
select 
'1 - Pedidos Cliente' as descricao,
count(cp.Apelido_empresa) as pedidos, 
SUM(Distinct cp.Valor_Total) as total_pedidos
--select cp.Situacao_pedido , cp.* 
from  dbo.[Capa Pedido] as cp
LEFT JOIN
    dbo.[Capa Nota] cn ON  (
	cp.Apelido_empresa     = cn.Apelido_empresa and
	cp.Apelido_estabelecimento = cn.Apelido_estabelecimento and
	cp.[numero pedido]         = cn.[numero pedido]
	)
LEFT JOIN
    [dbo].[Agente] ag ON (
	cp.Apelido_empresa = ag.Apelido_empresa and
	cp.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	cp.Agente_Faturamento = ag.Codigo_Agentes
	)
where 
cn.Data_Emissao IS NULL 
and cp.Data >= '2024-10-01' -- Últimos 12 meses
and cp.Pedido_Para <= getdate() -1 
and cp.Apelido_empresa = 'IQL Tintas' 
and cp.Apelido_estabelecimento = 'Matriz' 
and cp.Situacao_pedido <> 'CANCELADO'
AND ag.Nome NOT LIKE 'IQL ESTOQUE%' -- Remove IQL Estoque
AND ag.Nome NOT LIKE 'Repintura Estoque%' --Remove IQL Repintura
AND ag.Nome NOT LIKE 'Linha Piso Estoque%' --Remove IQL Piso
group by 
cp.Apelido_empresa ,
cp.Apelido_estabelecimento

union all
select 
'2 - Estoque Repintura' as descricao,
count(cp.Apelido_empresa) as pedidos, 
SUM(Distinct cp.Valor_Total) as total_pedidos
--select cp.Situacao_pedido , cp.* 
from  dbo.[Capa Pedido] as cp
LEFT JOIN
    dbo.[Capa Nota] cn ON  (
	cp.Apelido_empresa     = cn.Apelido_empresa and
	cp.Apelido_estabelecimento = cn.Apelido_estabelecimento and
	cp.[numero pedido]         = cn.[numero pedido]
	)
LEFT JOIN
    [dbo].[Agente] ag ON (
	cp.Apelido_empresa = ag.Apelido_empresa and
	cp.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	cp.Agente_Faturamento = ag.Codigo_Agentes
	)
where 
cn.Data_Emissao IS NULL 
and cp.Data >= '2024-10-01' -- Últimos 12 meses
and cp.Pedido_Para <= getdate() -1 
and cp.Apelido_empresa = 'IQL Tintas' 
and cp.Apelido_estabelecimento = 'Matriz' 
and cp.Situacao_pedido <> 'CANCELADO'
AND ag.Nome NOT LIKE 'IQL ESTOQUE%' -- Remove IQL Estoque
AND ag.Nome LIKE 'Repintura Estoque%' --Remove IQL Repintura
AND ag.Nome NOT LIKE 'Linha Piso Estoque%' --Remove IQL Piso
group by 
cp.Apelido_empresa ,
cp.Apelido_estabelecimento
union all
select 
'3 - Estoque Insdustria' as descricao,
count(cp.Apelido_empresa) as pedidos, 
SUM(Distinct cp.Valor_Total) as total_pedidos
--select cp.Situacao_pedido , cp.* 
from  dbo.[Capa Pedido] as cp
LEFT JOIN
    dbo.[Capa Nota] cn ON  (
	cp.Apelido_empresa     = cn.Apelido_empresa and
	cp.Apelido_estabelecimento = cn.Apelido_estabelecimento and
	cp.[numero pedido]         = cn.[numero pedido]
	)
LEFT JOIN
    [dbo].[Agente] ag ON (
	cp.Apelido_empresa = ag.Apelido_empresa and
	cp.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	cp.Agente_Faturamento = ag.Codigo_Agentes
	)
where 
cn.Data_Emissao IS NULL 
and cp.Data >= '2024-10-01' -- Últimos 12 meses
and cp.Pedido_Para <= getdate() -1 
and cp.Apelido_empresa = 'IQL Tintas' 
and cp.Apelido_estabelecimento = 'Matriz' 
and cp.Situacao_pedido <> 'CANCELADO'
AND ag.Nome LIKE 'IQL ESTOQUE%' -- Remove IQL Estoque
AND ag.Nome NOT LIKE 'Repintura Estoque%' --Remove IQL Repintura
AND ag.Nome NOT LIKE 'Linha Piso Estoque%' --Remove IQL Piso
group by 
cp.Apelido_empresa ,
cp.Apelido_estabelecimento
union all
select 
'4 - Estoque Piso' as descricao,
count(cp.Apelido_empresa) as pedidos, 
SUM(Distinct cp.Valor_Total) as total_pedidos
--select cp.Situacao_pedido , cp.* 
from  dbo.[Capa Pedido] as cp
LEFT JOIN
    dbo.[Capa Nota] cn ON  (
	cp.Apelido_empresa     = cn.Apelido_empresa and
	cp.Apelido_estabelecimento = cn.Apelido_estabelecimento and
	cp.[numero pedido]         = cn.[numero pedido]
	)
LEFT JOIN
    [dbo].[Agente] ag ON (
	cp.Apelido_empresa = ag.Apelido_empresa and
	cp.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	cp.Agente_Faturamento = ag.Codigo_Agentes
	)
where 
cn.Data_Emissao IS NULL 
and cp.Data >= '2024-10-01' -- Últimos 12 meses
and cp.Pedido_Para <= getdate() -1 
and cp.Apelido_empresa = 'IQL Tintas' 
and cp.Apelido_estabelecimento = 'Matriz' 
and cp.Situacao_pedido <> 'CANCELADO'
AND ag.Nome NOT LIKE 'IQL ESTOQUE%' -- Remove IQL Estoque
AND ag.Nome NOT LIKE 'Repintura Estoque%' --Remove IQL Repintura
AND ag.Nome LIKE 'Linha Piso Estoque%' --Remove IQL Piso
group by 
cp.Apelido_empresa ,
cp.Apelido_estabelecimento
                `;

        await corp.$disconnect();

        //       console.log(pedidosematrasos);

        const response = {
            ok: true,
            length: pedidosematrasos.length,
            pedidosematrasos: pedidosematrasos
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

exports.getConsultaTitulosemAtraso = async (req, res, next) => {

    const now = new Date();

    // Obter o mês (os meses começam do 0, então somamos 1)
    const month = now.getMonth() + 1;

    // Obter o ano
    const year = now.getFullYear();

    try {

        const TitulossemAtrasos = await corp.$queryRaw`
SELECT  
--      TT.*
	  SUM( tt.saldo_titulo) as total_titulos,
	  sum( tt.saldo_titulo) as saldo

FROM [corp].[dbo].[Titulos] as tt
      LEFT JOIN 
          dbo.[Agente] AS ag ON 
          tt.Apelido_empresa = ag.Apelido_empresa AND
          tt.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
          tt.[Codigo_agentes] = ag.[Codigo_agentes]
where 
          tt.Apelido_empresa = 'IQL Tintas' 
      AND tt.Apelido_estabelecimento = 'Matriz' 
      AND tt.pag_rec = 'P' 
--	  AND tt.data_vencto between '2024-10-01' and CONVERT(date, GETDATE() -1 )
	  AND tt.data_vencto >= '2024-10-01' 
      AND CONVERT(date, tt.data_vencto) < CONVERT(date, GETDATE())
	  AND tt.Saldo_titulo <> 0 
	  AND tt.Cancelado = 0
      AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
      AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
      AND ag.Nome NOT LIKE '%secretaria%' --remove vendas para acmc
	  AND ag.Nome NOT LIKE '%prefeitura%' --remove vendas para acmc
      AND ag.Nome NOT LIKE '%banco%' --remove vendas para acmc
	  AND ag.Nome NOT LIKE '%caixa%' --remove vendas para acmc
	  AND ag.Nome NOT LIKE '%crédito%' --remove vendas para acmc
	  AND ag.Nome NOT LIKE '%credito%' --remove vendas para acmc
	  AND ag.Nome NOT LIKE '%fundo%' --remove vendas para acmc
      AND ag.Nome NOT LIKE '%FGTS%' --remove vendas para acmc
	  AND ag.Nome NOT LIKE '%MINISTÉRIO DA%' --remove vendas para acmc
	  AND ag.Nome NOT LIKE '%HELEN CRISTINA PIAIA MARQUES%' --remove vendas para acmc
	  AND ag.Nome NOT LIKE '%FABIANO MARZIO FERRARI%' --remove vendas para acmc

group by
      tt.Apelido_empresa,
      tt.Apelido_estabelecimento
                `;

        await corp.$disconnect();

        //        console.log(TitulossemAtrasos);

        const response = {
            ok: true,
            length: TitulossemAtrasos.length,
            TitulossemAtrasos: TitulossemAtrasos
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

exports.getConsultaTitulovenc3meses = async (req, res, next) => {

    const now = new Date();

    // Obter o mês (os meses começam do 0, então somamos 1)
    const month = now.getMonth() + 1;

    // Obter o ano
    const year = now.getFullYear();

    try {

        const Titulosvenc3meses = await corp.$queryRaw`
SELECT  
    CONCAT(FORMAT(tt.data_vencto, 'MM/yyyy'), ' - S', 
           DATEPART(WEEK, tt.data_vencto) - DATEPART(WEEK, DATEFROMPARTS(YEAR(tt.data_vencto), MONTH(tt.data_vencto), 1)) + 1
    ) AS mes_vencimento,
    SUM(CASE WHEN tt.pag_rec = 'R' THEN tt.Valor_Titulo ELSE 0 END) AS Recebido,
    SUM(CASE WHEN tt.pag_rec = 'P' THEN tt.Valor_Titulo ELSE 0 END) AS Pago,
    SUM(CASE WHEN tt.pag_rec = 'R' THEN tt.Valor_Titulo ELSE 0 END) - 
    SUM(CASE WHEN tt.pag_rec = 'P' THEN tt.Valor_Titulo ELSE 0 END) AS Diferenca,
    CASE 
        WHEN SUM(CASE WHEN tt.pag_rec = 'P' THEN tt.Valor_Titulo ELSE 0 END) = 0 
        THEN NULL
        ELSE 
            (CAST(SUM(CASE WHEN tt.pag_rec = 'R' THEN tt.Valor_Titulo ELSE 0 END) 
            AS FLOAT) /
            SUM(CASE WHEN tt.pag_rec = 'P' THEN tt.Valor_Titulo ELSE 0 END)) * 100
    END AS Porcentagem
FROM 
    [corp].[dbo].[Titulos] AS tt
	LEFT JOIN
    [dbo].[Agente] ag ON 
        tt.Apelido_empresa = ag.Apelido_empresa AND
        tt.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
        tt.Codigo_Agentes = ag.Codigo_Agentes
WHERE 
    tt.Apelido_empresa = 'IQL Tintas' 
    AND tt.Apelido_estabelecimento = 'Matriz' 
    AND tt.Saldo_titulo <> 0
    AND tt.data_vencto >= DATEFROMPARTS(YEAR(GETDATE()), MONTH(GETDATE()), 1) -- Início do mês atual
    AND tt.data_vencto < DATEADD(MONTH, 3, DATEFROMPARTS(YEAR(GETDATE()), MONTH(GETDATE()), 1)) -- Próximos 3 meses
    AND ag.Nome NOT LIKE '%idea%' -- Remove vendas para idea
    AND ag.Nome NOT LIKE '%acmc%' -- Remove vendas para acmc
    AND tt.Cancelado = 0
    AND NOT EXISTS (
        SELECT 1 
        FROM [dbo].[movto_titulo] mt
        WHERE 
            tt.Apelido_empresa = mt.Apelido_empresa AND
            tt.Apelido_estabelecimento = mt.Apelido_estabelecimento AND
            tt.nrtitulo = mt.nrtitulo AND
            tt.pag_rec = mt.pag_rec AND
            mt.Codigo = 1013)
GROUP BY
    FORMAT(tt.data_vencto, 'MM/yyyy'), 
    DATEPART(WEEK, tt.data_vencto) - DATEPART(WEEK, DATEFROMPARTS(YEAR(tt.data_vencto), MONTH(tt.data_vencto), 1)) + 1
ORDER BY
    FORMAT(tt.data_vencto, 'MM/yyyy'),
    mes_vencimento;
                `;

        await corp.$disconnect();

        //       console.log(Titulosvenc3meses);

        const response = {
            ok: true,
            length: Titulosvenc3meses.length,
            Titulosvenc3meses: Titulosvenc3meses
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

exports.getConsultaPorcentagemComprasPedidos = async (req, res, next) => {

    const now = new Date();

    // Obter o mês (os meses começam do 0, então somamos 1)
    const month = now.getMonth() + 1;

    // Obter o ano
    const year = now.getFullYear();

    try {


        const Porcentagemcomprapedidos = await corp.$queryRaw`
SELECT 
    CASE 
        WHEN GROUPING(Imposto) = 1 THEN 'Total' 
        ELSE Imposto 
    END AS Imposto,
    SUM(CASE WHEN Entrada_saida = 'ENTRADA' THEN Valor ELSE 0 END) AS Entrada,
    SUM(CASE WHEN Entrada_saida = 'SAIDA' THEN Valor ELSE 0 END) AS Saida,
    (SUM(CASE WHEN Entrada_saida = 'ENTRADA' THEN Valor ELSE 0 END) / NULLIF(SUM(CASE WHEN Entrada_saida = 'SAIDA' THEN Valor ELSE 0 END), 0)) * 100 AS Porcentagem
FROM 
(
    -- Subquery existente com todos os dados
    SELECT 
        'Realizado' AS Imposto,
        cf.Entrada_saida,
        SUM(DISTINCT cn.Val_NF) AS Valor
    FROM dbo.[Capa Nota] AS cn WITH(NOLOCK)
    LEFT JOIN dbo.Cfop AS cf 
        ON cn.Apelido_empresa = cf.Apelido_empresa AND
           cn.Codigo_CFOP = cf.Codigo_CFOP
		   		         LEFT JOIN 
          dbo.[Agente] AS ag ON 
          cn.Apelido_empresa = ag.Apelido_empresa AND
          cn.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
          cn.[Codigo_agentes] = ag.[Codigo_agentes]
    WHERE 
--        cn.Apelido_empresa = 'IQL Tintas' AND
 --       cn.Apelido_estabelecimento = 'Matriz' AND
        (cn.Status_sistema_nfe = 'AUTORIZADA' OR
		        cn.Status_sistema_nfe = 'EMITIDA') AND
        MONTH(cn.Data_Emissao) = MONTH(GETDATE()) AND -- Mês atual
        YEAR(cn.Data_Emissao) = YEAR(GETDATE()) AND   -- Ano atual
        cf.Entrada_saida = 'SAIDA'
		AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
        AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
        AND cf.Codigo_CFOP not like ('59%')
		AND cf.Codigo_CFOP not like ('69%')
--		AND cf.Codigo_CFOP not like ('5902%')
--		AND cf.Codigo_CFOP not like ('5949%')
--		AND cf.Codigo_CFOP not like ('5911%')
--		AND cf.Codigo_CFOP not like ('5920%')
--		AND cf.Codigo_CFOP not like ('5910%')
--        AND cf.Codigo_CFOP not like ('6911%')
    GROUP BY cf.Entrada_saida
    UNION ALL
        select 
	        'Realizado' AS Imposto,
        'Entrada' as Entrada_saida,
        SUM(DISTINCT cr.Valor_nf) AS Valor
	--ir.Valor_total, cr.Valor_nf,cr.*,ia.*,ir.numero, ir.Codigo_Estoque, ia.Codigo_produto, ia.* 
	from [dbo].Item_recebimento AS ir
		                LEFT JOIN [dbo].[Itens_almox] AS ia ON 
                (   ir.[Apelido_empresa] = ia.[Apelido_empresa] AND 
                    ir.[Apelido_estabelecimento] = ia.[Apelido_estabelecimento]  AND 
                    ir.Codigo_produto = ia.[Codigo_produto] 
                )
				LEFT JOIN [dbo].Capa_recebimento AS cr ON 
				(
					ir.[Apelido_empresa]         = cr.[Apelido_empresa] AND 
					ir.[Apelido_estabelecimento] = cr.[Apelido_estabelecimento] AND 
					ir.[Id_caparec]              = cr.[Id_caparec]
				 )
		WHERE 
        cr.Apelido_empresa = 'IQL Tintas' AND
        cr.Apelido_estabelecimento = 'Matriz' AND
        MONTH(cr.Data_Emissao) = MONTH(GETDATE()) AND -- Mês atual
        YEAR(cr.Data_Emissao) = YEAR(GETDATE())   AND    -- Ano atual
		(ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005')
    GROUP BY Entrada_saida
--    SELECT 
--        'Realizado' AS Imposto,
--        'Entrada' as Entrada_saida,
--        SUM(DISTINCT cr.Valor_nf) AS Valor
--    FROM dbo.[Capa_recebimento] AS cr WITH(NOLOCK)
--    WHERE 
--        cr.Apelido_empresa = 'IQL Tintas' AND
--        cr.Apelido_estabelecimento = 'Matriz' AND
--        MONTH(cr.Data_Emissao) = MONTH(GETDATE()) AND -- Mês atual
--        YEAR(cr.Data_Emissao) = YEAR(GETDATE())       -- Ano atual
--    GROUP BY Entrada_saida
    UNION ALL
    SELECT  
        'A Realizar' AS Imposto,
        'Saida' as Entrada_saida,
        SUM(ip.Valor) AS Valor
    FROM dbo.Itens_Pedido AS ip
    LEFT JOIN dbo.[Capa Pedido] AS cp ON
        ip.[Apelido_empresa] = cp.[Apelido_empresa] AND 
        ip.[Apelido_estabelecimento] = cp.[Apelido_estabelecimento] AND 
        ip.[Numero Pedido] = cp.[Numero Pedido]
	LEFT JOIN 
          dbo.[Agente] AS ag ON 
          cp.Apelido_empresa = ag.Apelido_empresa AND
          cp.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
          cp.Agente_Faturamento = ag.[Codigo_agentes]
    WHERE 
    cp.Situacao_pedido <> 'CANCELADO' and
        MONTH(cp.Pedido_Para) = MONTH(GETDATE()) AND -- Mês atual
        YEAR(cp.Pedido_Para) = YEAR(GETDATE()) AND   -- Ano atual
 --       ip.Apelido_empresa = 'IQL Tintas' AND
 --       ip.Apelido_estabelecimento = 'Matriz' AND
        ip.qtde_faturada = 0
		AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
        AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
		and ag.Nome nOT like 'Repintura Estoque'
        and ag.Nome NOT LIKE 'LINHA PISO ESTOQUE'
    UNION ALL
    SELECT 
        'A Realizar' AS Imposto,
        'Entrada' AS Entrada_saida,
        SUM(DISTINCT pc.[Valor total]) AS Valor
    FROM [corp].[dbo].[requisicao] AS [rq]
    LEFT JOIN [dbo].[Itens_almox] AS ia ON 
        ia.[Apelido_empresa] = rq.[Apelido_empresa] AND 
        ia.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
        ia.[Codigo_produto] = rq.[Codigo material]
    LEFT JOIN [dbo].[Pedido compra] AS pc ON 
        pc.[Apelido_empresa] = rq.[Apelido_empresa] AND 
        pc.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
        pc.[Pedido compra numero] = rq.[Pedido compra numero]
    WHERE 
        [rq].Apelido_empresa = 'IQL Tintas' AND
        [rq].Apelido_estabelecimento = 'Matriz' AND
        [rq].[Status requisicao] = 'Comprado' AND
        MONTH([rq].[data compra]) = MONTH(GETDATE()) AND -- Mês atual
        YEAR([rq].[data compra]) = YEAR(GETDATE()) AND   -- Ano atual
        (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005') AND
        [pc].status_pedido <> 'NÃO APROVADO'
    GROUP BY
        [rq].Apelido_empresa
) AS Resultados
GROUP BY GROUPING SETS ((Imposto), ())
ORDER BY 
    CASE 
        WHEN GROUPING(Imposto) = 1 THEN 1 
        ELSE 0 
    END,
    Imposto;

                `;

        await corp.$disconnect();

        //       console.log(Porcentagemcomprapedidos);

        const response = {
            ok: true,
            length: Porcentagemcomprapedidos.length,
            Porcentagemcomprapedidos: Porcentagemcomprapedidos
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

exports.getConsultaPorcentagemComprasPedidosmesant = async (req, res, next) => {

    const now = new Date();

    // Obter o mês (os meses começam do 0, então somamos 1)
    const month = now.getMonth() + 1;

    // Obter o ano
    const year = now.getFullYear();

    try {


        const Porcentagemcomprapedidosmesant = await corp.$queryRaw`
SELECT 
    Imposto,
    (SUM(CASE WHEN Entrada_saida = 'ENTRADA' THEN Valor ELSE 0 END) / NULLIF(SUM(CASE WHEN Entrada_saida = 'SAIDA' THEN Valor ELSE 0 END), 0)) * 100 AS Porcentagem
FROM 
(
    -- Subquery existente com todos os dados
    SELECT 
        'Realizado' AS Imposto,
        cf.Entrada_saida,
        SUM(DISTINCT cn.Val_NF) AS Valor
    FROM dbo.[Capa Nota] AS cn WITH(NOLOCK)
    LEFT JOIN dbo.Cfop AS cf ON 
        cn.Apelido_empresa = cf.Apelido_empresa AND
        cn.Codigo_CFOP = cf.Codigo_CFOP
    LEFT JOIN 
        dbo.[Agente] AS ag ON 
        cn.Apelido_empresa = ag.Apelido_empresa AND
        cn.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
        cn.[Codigo_agentes] = ag.[Codigo_agentes]
    WHERE 
 --       cn.Apelido_empresa = 'IQL Tintas' AND
 --       cn.Apelido_estabelecimento = 'Matriz' AND
        (cn.Status_sistema_nfe = 'AUTORIZADA' OR
		        cn.Status_sistema_nfe = 'EMITIDA') AND
        MONTH(cn.Data_Emissao) = MONTH(DATEADD(MONTH, -1, GETDATE())) AND -- Mês anterior
        YEAR(cn.Data_Emissao) = YEAR(DATEADD(MONTH, -1, GETDATE())) AND  
        cf.Entrada_saida = 'SAIDA'
        AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
        AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
        AND cf.Codigo_CFOP not like ('59%')
		AND cf.Codigo_CFOP not like ('69%')
--		AND cf.Codigo_CFOP not like ('5902%')
--		AND cf.Codigo_CFOP not like ('5949%')
--		AND cf.Codigo_CFOP not like ('5911%')
--		AND cf.Codigo_CFOP not like ('5920%')
--		AND cf.Codigo_CFOP not like ('5910%')
--        AND cf.Codigo_CFOP not like ('6911%')
    GROUP BY cf.Entrada_saida
    UNION ALL
    select 
	        'Realizado' AS Imposto,
        'Entrada' as Entrada_saida,
        SUM(DISTINCT cr.Valor_nf) AS Valor
	--ir.Valor_total, cr.Valor_nf,cr.*,ia.*,ir.numero, ir.Codigo_Estoque, ia.Codigo_produto, ia.* 
	from [dbo].Item_recebimento AS ir
		                LEFT JOIN [dbo].[Itens_almox] AS ia ON 
                (   ir.[Apelido_empresa] = ia.[Apelido_empresa] AND 
                    ir.[Apelido_estabelecimento] = ia.[Apelido_estabelecimento]  AND 
                    ir.Codigo_produto = ia.[Codigo_produto] 
                )
				LEFT JOIN [dbo].Capa_recebimento AS cr ON 
				(
					ir.[Apelido_empresa]         = cr.[Apelido_empresa] AND 
					ir.[Apelido_estabelecimento] = cr.[Apelido_estabelecimento] AND 
					ir.[Id_caparec]              = cr.[Id_caparec]
				 )
		WHERE 
        cr.Apelido_empresa = 'IQL Tintas' AND
        cr.Apelido_estabelecimento = 'Matriz' AND
        MONTH(cr.Data_Emissao) = MONTH(DATEADD(MONTH, -1, GETDATE())) AND -- Mês anterior
        YEAR(cr.Data_Emissao) = YEAR(DATEADD(MONTH, -1, GETDATE()))  and
		(ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005')
    GROUP BY Entrada_saida
) AS Resultados
GROUP BY Imposto
                `;

        await corp.$disconnect();

        console.log(Porcentagemcomprapedidosmesant);

        const response = {
            ok: true,
            length: Porcentagemcomprapedidosmesant.length,
            Porcentagemcomprapedidosmesant: Porcentagemcomprapedidosmesant
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

exports.getConsultaDiferencaproduzida = async (req, res, next) => {

    const now = new Date();

    // Obter o mês (os meses começam do 0, então somamos 1)
    const month = now.getMonth() + 1;

    // Obter o ano
    const year = now.getFullYear();

    try {


        const Diferencaproduzidas = await corp.$queryRaw`
SELECT
    SUM(co.Quantidade_inicial) AS Total_Quantidade_Inicial,
    SUM(co.Quantidade_final) AS Total_Quantidade_Final,
	(SUM(co.Quantidade_inicial) - SUM(co.Quantidade_final)) as Diferenca ,
	((SUM(co.Quantidade_final)/SUM(co.Quantidade_inicial))*100) as Porcentagem 
FROM 
    dbo.[capa_op] co
WHERE
    co.Data_criacao >= DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0) -- Início do mês atual
    AND co.Data_criacao < DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) + 1, 0) -- Início do próximo mês
    AND co.Status_op = 'finalizada';
                `;

        await corp.$disconnect();

        //        console.log(Diferencaproduzidas);

        const response = {
            ok: true,
            length: Diferencaproduzidas.length,
            Diferencaproduzidas: Diferencaproduzidas
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

exports.getConsultaDiferencaproduzidadet = async (req, res, next) => {

    const now = new Date();

    // Obter o mês (os meses começam do 0, então somamos 1)
    const month = now.getMonth() + 1;

    // Obter o ano
    const year = now.getFullYear();

    try {


        const Diferencaproduzidasdet = await corp.$queryRaw`
SELECT TOP 5
    co.numero_op,
	ag.Nome,
    co.Quantidade_inicial,
    co.Quantidade_final,
	ABS((co.Quantidade_inicial - co.Quantidade_final) * 100.0 / NULLIF(co.Quantidade_inicial, 0)) as Porcentagem,
	ABS(co.Quantidade_inicial - co.Quantidade_final) as Diferenca
FROM 
    dbo.[capa_op] co
	      LEFT JOIN 
          dbo.[Agente] AS ag ON 
          co.Apelido_empresa = ag.Apelido_empresa AND
          co.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
          co.[Codigo_agentes] = ag.[Codigo_agentes]

WHERE
        co.Apelido_empresa = 'IQL Tintas' 
    AND co.Apelido_estabelecimento = 'Matriz' 
	AND MONTH(co.Data_criacao) = MONTH(GETDATE())  -- Mês atual
    AND YEAR(co.Data_criacao) = YEAR(GETDATE())   -- Ano atual
    AND co.Status_op = 'finalizada'
    AND ABS((co.Quantidade_inicial - co.Quantidade_final) * 100.0 / NULLIF(co.Quantidade_inicial, 0)) >= 1

order by
co.Data_finalizacao
                `;

        await corp.$disconnect();

        //        console.log(Diferencaproduzidas);

        const response = {
            ok: true,
            length: Diferencaproduzidasdet.length,
            Diferencaproduzidasdet: Diferencaproduzidasdet
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

exports.getConsultaSituacaoTitulosnoMes = async (req, res, next) => {

    const now = new Date();

    // Obter o mês (os meses começam do 0, então somamos 1)
    const month = now.getMonth() + 1;

    // Obter o ano
    const year = now.getFullYear();

    try {


        const SituacaoTitulosMes = await corp.$queryRaw`
 WITH TitulosResumo AS (
SELECT  
    ' 9 - Total Geral' AS situacao,
	COUNT(tt.nrtitulo) AS Nr_titulos,
    ISNULL(SUM(tt.Valor_titulo),0) AS Total_Titulo,
	0  AS Total_Fomento,
	0  AS Diferenca,
	0  AS Porcentagem
FROM 
    [dbo].[Titulos] AS tt
WHERE 
    tt.Apelido_empresa = 'IQL Tintas'  
    AND tt.Apelido_estabelecimento = 'Matriz' 
    AND tt.pag_rec = 'R' 
--	AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
--  AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
    AND MONTH(tt.data_vencto) = ${month} -- Dezembro
    AND YEAR(tt.data_vencto) = ${year}
    AND tt.Cancelado = 0
	union all
	SELECT  
    '10 - Total Idea' AS situacao,
	COUNT(tt.nrtitulo) AS Nr_titulos,
    SUM(tt.Valor_titulo) AS Total_Titulo,
	0  AS Total_Fomento,
	0  AS Diferenca,
	0  AS Porcentagem
FROM 
    [dbo].[Titulos] AS tt
	LEFT JOIN
    [dbo].[Agente] ag ON 
        tt.Apelido_empresa = ag.Apelido_empresa AND
        tt.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
        tt.Codigo_Agentes = ag.Codigo_Agentes
WHERE 
    tt.Apelido_empresa = 'IQL Tintas'  
    AND tt.Apelido_estabelecimento = 'Matriz' 
    AND tt.pag_rec = 'R' 
	AND ag.Nome LIKE '%idea%' --remove vendas para idea
--  AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
    AND MONTH(tt.data_vencto) = ${month} -- Dezembro
    AND YEAR(tt.data_vencto) = ${year}
    AND tt.Cancelado = 0
	union all
	SELECT  
    '11 - Total Acmc' AS situacao,
	COUNT(tt.nrtitulo) AS Nr_titulos,
    ISNULL(SUM(tt.Valor_titulo),0) AS Total_Titulo,
	0  AS Total_Fomento,
	0  AS Diferenca,
	0  AS Porcentagem
FROM 
    [dbo].[Titulos] AS tt
	LEFT JOIN
    [dbo].[Agente] ag ON 
        tt.Apelido_empresa = ag.Apelido_empresa AND
        tt.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
        tt.Codigo_Agentes = ag.Codigo_Agentes
WHERE 
    tt.Apelido_empresa = 'IQL Tintas'  
    AND tt.Apelido_estabelecimento = 'Matriz' 
    AND tt.pag_rec = 'R' 
--	AND ag.Nome LIKE '%idea%' --remove vendas para idea
    AND ag.Nome  LIKE '%acmc%' --remove vendas para acmc
    AND MONTH(tt.data_vencto) = ${month} -- Dezembro
    AND YEAR(tt.data_vencto) = ${year}
    AND tt.Cancelado = 0
	UNION ALL
		SELECT  
    '12 - Total Iql' AS situacao,
	COUNT(tt.nrtitulo) AS Nr_titulos,
    ISNULL(SUM(tt.Valor_titulo),0) AS Total_Titulo,
	0  AS Total_Fomento,
	0  AS Diferenca,
	0  AS Porcentagem
FROM 
    [dbo].[Titulos] AS tt
	LEFT JOIN
    [dbo].[Agente] ag ON 
        tt.Apelido_empresa = ag.Apelido_empresa AND
        tt.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
        tt.Codigo_Agentes = ag.Codigo_Agentes
WHERE 
    tt.Apelido_empresa = 'IQL Tintas'  
    AND tt.Apelido_estabelecimento = 'Matriz' 
    AND tt.pag_rec = 'R' 
	AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
    AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
    AND MONTH(tt.data_vencto) = ${month} -- Dezembro
    AND YEAR(tt.data_vencto) = ${year}
	AND tt.Cancelado = 0

    UNION ALL
    SELECT  
    ' 1 - Recebidos' AS situacao,
    COUNT(tt.nrtitulo) AS Nr_titulos,
    ISNULL(SUM( tt.Valor_titulo), 0) AS Soma_Valor_Titulos,
	0  AS Total_Fomento,
	0  AS Diferenca,
	0  AS Porcentagem
--select 	tt.Apelido_empresa,tt.Apelido_estabelecimento, tt.nrtitulo, tt.Valor_titulo, tt.Codigo_Agentes, ag.Codigo_Agentes, tt.pag_rec
FROM 
    [dbo].[Titulos] AS tt
LEFT JOIN
    [dbo].[Agente] ag ON 
        tt.Apelido_empresa = ag.Apelido_empresa AND
        tt.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
        tt.Codigo_Agentes = ag.Codigo_Agentes
WHERE 
    tt.Apelido_empresa = 'IQL Tintas'  
    AND tt.Apelido_estabelecimento = 'Matriz' 
    AND tt.pag_rec = 'R' 
    AND tt.Saldo_titulo = 0
    AND MONTH(tt.data_vencto) = ${month} -- Dezembro
    AND YEAR(tt.data_vencto) = ${year}
    AND ag.Nome NOT LIKE '%idea%' -- Remove vendas para idea
    AND ag.Nome NOT LIKE '%acmc%' -- Remove vendas para acmc
    AND tt.Cancelado = 0
    AND NOT EXISTS (
    SELECT 1 
    FROM [dbo].[movto_titulo] mt
    WHERE 
        tt.Apelido_empresa = mt.Apelido_empresa AND
        tt.Apelido_estabelecimento = mt.Apelido_estabelecimento AND
        tt.nrtitulo = mt.nrtitulo AND
        tt.pag_rec = mt.pag_rec AND
        mt.Codigo = 1013
)

    UNION ALL
SELECT  
    ' 2 - A Receber' AS situacao,
    COUNT(tt.nrtitulo) AS Nr_titulos,
    ISNULL(SUM( tt.Valor_titulo), 0) AS Soma_Valor_Titulos,
	0  AS Total_Fomento,
	0  AS Diferenca,
	0  AS Porcentagem
--select 	tt.Apelido_empresa,tt.Apelido_estabelecimento, tt.nrtitulo, tt.Valor_titulo, tt.Codigo_Agentes, ag.Codigo_Agentes, tt.pag_rec
FROM 
    [dbo].[Titulos] AS tt
LEFT JOIN
    [dbo].[Agente] ag ON 
        tt.Apelido_empresa = ag.Apelido_empresa AND
        tt.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
        tt.Codigo_Agentes = ag.Codigo_Agentes
WHERE 
    tt.Apelido_empresa = 'IQL Tintas'  
    AND tt.Apelido_estabelecimento = 'Matriz' 
    AND tt.pag_rec = 'R' 
    AND tt.Saldo_titulo <> 0
    AND MONTH(tt.data_vencto) = ${month} -- Dezembro
    AND YEAR(tt.data_vencto) = ${year}
    AND ag.Nome NOT LIKE '%idea%' -- Remove vendas para idea
    AND ag.Nome NOT LIKE '%acmc%' -- Remove vendas para acmc
    AND tt.Cancelado = 0
    AND NOT EXISTS (
    SELECT 1 
    FROM [dbo].[movto_titulo] mt
    WHERE 
        tt.Apelido_empresa = mt.Apelido_empresa AND
        tt.Apelido_estabelecimento = mt.Apelido_estabelecimento AND
        tt.nrtitulo = mt.nrtitulo AND
        tt.pag_rec = mt.pag_rec AND
        mt.Codigo = 1013
)
    UNION ALL
SELECT  
    ' 3 - Pagto Antecipado' AS situacao,
    COUNT(tt.nrtitulo) AS Nr_titulos,
    ISNULL(SUM( tt.Valor_titulo), 0) AS Soma_Valor_Titulos,
	0  AS Total_Fomento,
	0  AS Diferenca,
	0  AS Porcentagem
--select 	tt.Apelido_empresa,tt.Apelido_estabelecimento, tt.nrtitulo, tt.Valor_titulo, tt.Codigo_Agentes, ag.Codigo_Agentes, tt.pag_rec
FROM 
    [dbo].[Titulos] AS tt
LEFT JOIN
    [dbo].[Agente] ag ON 
        tt.Apelido_empresa = ag.Apelido_empresa AND
        tt.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
        tt.Codigo_Agentes = ag.Codigo_Agentes
WHERE 
    tt.Apelido_empresa = 'IQL Tintas'  
    AND tt.Apelido_estabelecimento = 'Matriz' 
    AND tt.pag_rec = 'R' 
    AND tt.Saldo_titulo = 0
    AND MONTH(tt.data_vencto) = ${month} -- Dezembro
    AND YEAR(tt.data_vencto) = ${year}
    AND CONVERT(date, tt.data_vencto) >= CONVERT(date, GETDATE())
    AND ag.Nome NOT LIKE '%idea%' -- Remove vendas para idea
    AND ag.Nome NOT LIKE '%acmc%' -- Remove vendas para acmc
    AND tt.Cancelado = 0
    AND NOT EXISTS (
    SELECT 1 
    FROM [dbo].[movto_titulo] mt
    WHERE 
        tt.Apelido_empresa = mt.Apelido_empresa AND
        tt.Apelido_estabelecimento = mt.Apelido_estabelecimento AND
        tt.nrtitulo = mt.nrtitulo AND
        tt.pag_rec = mt.pag_rec AND
        mt.Codigo = 1013
)
    UNION ALL
	SELECT  
--tt.nrtitulo, tt.Valor_titulo, mt.Valor, tt.Codigo_Agentes, ag.Codigo_Agentes, tt.pag_rec,mt.pag_rec
    ' 4 - Fomento atrasado' AS situacao,
	COUNT( tt.nrtitulo) AS Nr_titulos,
    ISNULL(SUM(tt.Valor_titulo),0) AS Total_Titulo,
	ISNULL(SUM(mt.Valor), 0) AS Total_Fomento,
	ISNULL(SUM(tt.Valor_titulo) - SUM(mt.Valor), 0) AS Diferenca,
	ISNULL(((1-(SUM(mt.Valor) / SUM(tt.Valor_titulo)))*100), 0) AS Porcentagem
FROM 
    [dbo].[Titulos] AS tt
LEFT JOIN
    [dbo].[Agente] ag ON 
	tt.Apelido_empresa = ag.Apelido_empresa and
	tt.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	tt.Codigo_Agentes = ag.Codigo_Agentes
LEFT JOIN 
    [dbo].[movto_titulo] mt ON 
        tt.Apelido_empresa = mt.Apelido_empresa AND
        tt.Apelido_estabelecimento = mt.Apelido_estabelecimento AND
        tt.nrtitulo = mt.nrtitulo AND
        tt.pag_rec = mt.pag_rec AND
        mt.Codigo = 1013
WHERE 
    tt.Apelido_empresa = 'IQL Tintas'  
    AND tt.Apelido_estabelecimento = 'Matriz' 
    AND tt.pag_rec = 'R' 
    AND MONTH(tt.data_vencto) = ${month} -- Dezembro
    AND YEAR(tt.data_vencto) = ${year}
    AND tt.Saldo_titulo <> 0
    AND CONVERT(date, tt.data_vencto) < CONVERT(date, GETDATE())
    and tt.Cancelado = 0
    AND EXISTS (
    SELECT 1 
    FROM [dbo].[movto_titulo] mt
    WHERE 
        tt.Apelido_empresa = mt.Apelido_empresa AND
        tt.Apelido_estabelecimento = mt.Apelido_estabelecimento AND
        tt.nrtitulo = mt.nrtitulo AND
        tt.pag_rec = mt.pag_rec AND
        mt.Codigo = 1013 
)
    UNION ALL
	SELECT  
--tt.nrtitulo, tt.Valor_titulo, mt.Valor, tt.Codigo_Agentes, ag.Codigo_Agentes, tt.pag_rec,mt.pag_rec
    ' 5 - Fomento a vencer' AS situacao,
	COUNT(tt.nrtitulo) AS Nr_titulos,
    ISNULL(SUM(tt.Valor_titulo),0) AS Total_Titulo,
	ISNULL(SUM(mt.Valor), 0) AS Total_Fomento,
	ISNULL(SUM(tt.Valor_titulo) - SUM(mt.Valor), 0) AS Diferenca,
	ISNULL(((1-(SUM(mt.Valor) / SUM(tt.Valor_titulo)))*100), 0) AS Porcentagem
FROM 
    [dbo].[Titulos] AS tt
LEFT JOIN
    [dbo].[Agente] ag ON 
	tt.Apelido_empresa = ag.Apelido_empresa and
	tt.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	tt.Codigo_Agentes = ag.Codigo_Agentes
LEFT JOIN 
    [dbo].[movto_titulo] mt ON 
        tt.Apelido_empresa = mt.Apelido_empresa AND
        tt.Apelido_estabelecimento = mt.Apelido_estabelecimento AND
        tt.nrtitulo = mt.nrtitulo AND
        tt.pag_rec = mt.pag_rec AND
        mt.Codigo = 1013
WHERE 
    tt.Apelido_empresa = 'IQL Tintas'  
    AND tt.Apelido_estabelecimento = 'Matriz' 
    AND tt.pag_rec = 'R' 
    AND MONTH(tt.data_vencto) = ${month} -- Dezembro
    AND YEAR(tt.data_vencto) = ${year}
    AND tt.Saldo_titulo <> 0
    AND CONVERT(date, tt.data_vencto) >= CONVERT(date, GETDATE())
    and tt.Cancelado = 0
    AND EXISTS (
    SELECT 1 
    FROM [dbo].[movto_titulo] mt
    WHERE 
        tt.Apelido_empresa = mt.Apelido_empresa AND
        tt.Apelido_estabelecimento = mt.Apelido_estabelecimento AND
        tt.nrtitulo = mt.nrtitulo AND
        tt.pag_rec = mt.pag_rec AND
        mt.Codigo = 1013 
)
    UNION ALL
SELECT  
--tt.nrtitulo, tt.Valor_titulo, mt.Valor, tt.Codigo_Agentes, ag.Codigo_Agentes, tt.pag_rec,mt.pag_rec
    ' 6 - Fomento ja pagos' AS situacao,
	COUNT( tt.nrtitulo) AS Nr_titulos,
    ISNULL(SUM( tt.Valor_titulo),0) AS Total_Titulo,
    ISNULL(SUM(mt.Valor), 0) AS Total_Fomento,
	ISNULL(SUM(tt.Valor_titulo) - SUM(mt.Valor), 0) AS Diferenca,
	ISNULL(((1-(SUM(mt.Valor) / SUM(tt.Valor_titulo)))*100), 0) AS Porcentagem
FROM 
    [dbo].[Titulos] AS tt
LEFT JOIN
    [dbo].[Agente] ag ON 
	tt.Apelido_empresa = ag.Apelido_empresa and
	tt.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	tt.Codigo_Agentes = ag.Codigo_Agentes
	LEFT JOIN 
    [dbo].[movto_titulo] mt ON 
        tt.Apelido_empresa = mt.Apelido_empresa AND
        tt.Apelido_estabelecimento = mt.Apelido_estabelecimento AND
        tt.nrtitulo = mt.nrtitulo AND
        tt.pag_rec = mt.pag_rec AND
        mt.Codigo = 1013
WHERE 
    tt.Apelido_empresa = 'IQL Tintas'  
    AND tt.Apelido_estabelecimento = 'Matriz' 
    AND tt.pag_rec = 'R' 
    AND MONTH(tt.data_vencto) = ${month} -- Dezembro
    AND YEAR(tt.data_vencto) = ${year}
    AND tt.Saldo_titulo = 0
    AND CONVERT(date, tt.data_vencto) < CONVERT(date, GETDATE())
    and tt.Cancelado = 0
    AND EXISTS (
    SELECT 1 
    FROM [dbo].[movto_titulo] mt
    WHERE 
        tt.Apelido_empresa = mt.Apelido_empresa AND
        tt.Apelido_estabelecimento = mt.Apelido_estabelecimento AND
        tt.nrtitulo = mt.nrtitulo AND
        tt.pag_rec = mt.pag_rec AND
        mt.Codigo = 1013 
)

    UNION ALL
SELECT  
    ' 8 - Títulos Atrasados' AS situacao,
    COUNT(tt.nrtitulo) AS Nr_titulos,
    ISNULL(SUM( tt.Valor_titulo), 0) AS Soma_Valor_Titulos,
	0  AS Total_Fomento,
	0  AS Diferenca,
	0  AS Porcentagem
--select 	tt.Apelido_empresa,tt.Apelido_estabelecimento, tt.nrtitulo, tt.Valor_titulo, tt.Codigo_Agentes, ag.Codigo_Agentes, tt.pag_rec
FROM 
    [dbo].[Titulos] AS tt
LEFT JOIN
    [dbo].[Agente] ag ON 
        tt.Apelido_empresa = ag.Apelido_empresa AND
        tt.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
        tt.Codigo_Agentes = ag.Codigo_Agentes
WHERE 
    tt.Apelido_empresa = 'IQL Tintas'  
    AND tt.Apelido_estabelecimento = 'Matriz' 
    AND tt.pag_rec = 'R' 
    AND tt.Saldo_titulo <> 0
    AND MONTH(tt.data_vencto) = ${month} -- Dezembro
    AND YEAR(tt.data_vencto) = ${year}
    AND CONVERT(date, tt.data_vencto) < CONVERT(date, GETDATE())
    AND ag.Nome NOT LIKE '%idea%' -- Remove vendas para idea
    AND ag.Nome NOT LIKE '%acmc%' -- Remove vendas para acmc
    and tt.Cancelado = 0
    AND NOT EXISTS (
    SELECT 1 
    FROM [dbo].[movto_titulo] mt
    WHERE 
        tt.Apelido_empresa = mt.Apelido_empresa AND
        tt.Apelido_estabelecimento = mt.Apelido_estabelecimento AND
        tt.nrtitulo = mt.nrtitulo AND
        tt.pag_rec = mt.pag_rec AND
        mt.Codigo = 1013 
)
)

SELECT 
    TR.situacao,
    TR.Total_Titulo,
	tr.Nr_titulos,
	tr.porcentagem,
	tr.diferenca,
	tr.Total_Fomento,

    CASE 
        WHEN TR.situacao = ' 8 - Títulos Atrasados' THEN 
            CAST((TR.Total_Titulo * 100.0 / 
                (SELECT Total_Titulo FROM TitulosResumo WHERE situacao =  ' 9 - Total Geral')) AS DECIMAL(10, 2))
        ELSE NULL
    END AS Porcentagem_Atrasados
FROM 
    TitulosResumo AS TR
ORDER BY 
    TR.situacao;

                `;

        await corp.$disconnect();

        //       console.log(SituacaoTitulosMes);

        const response = {
            ok: true,
            length: SituacaoTitulosMes.length,
            SituacaoTitulosMes: SituacaoTitulosMes
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

exports.getConsultaComprasaberto = async (req, res, next) => {

    const now = new Date();

    // Obter o mês (os meses começam do 0, então somamos 1)
    const month = now.getMonth() + 1;

    // Obter o ano
    const year = now.getFullYear();

    try {


        const Situacaocomprasaberto = await corp.$queryRaw`
  SELECT 
	CASE
  WHEN rq.[Status requisicao] = 'Comprado' THEN 'C' ELSE 'E' END
 AS Situacao,
    rq.[Pedido compra numero] AS Pedido_compra_numero, 
    rq.[Codigo material] AS Codigo_material, 
	CASE
	  WHEN rq.[Status requisicao] = 'Comprado' THEN rq.[Quantidade requisitada] ELSE  rq.[quantidade_recebida] END
 AS Quantidade,
 	CASE
	  WHEN rq.[Status requisicao] = 'Comprado' THEN rq.[Data necessidade] ELSE  cr.Data_entrada END
 AS Data,
    ag1.Nome AS Fornecedor

FROM [corp].[dbo].[requisicao] AS rq
LEFT JOIN [dbo].[Itens_almox] AS ia 
    ON ia.[Apelido_empresa] = rq.[Apelido_empresa] 
    AND ia.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] 
    AND ia.[Codigo_produto] = rq.[Codigo material]
LEFT JOIN [dbo].[Pedido compra] AS pc 
    ON pc.[Apelido_empresa] = rq.[Apelido_empresa] 
    AND pc.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] 
    AND pc.[Pedido compra numero] = rq.[Pedido compra numero]
LEFT JOIN [dbo].[Agente] AS ag1 
    ON pc.Apelido_empresa = ag1.Apelido_empresa 
    AND pc.Apelido_estabelecimento = ag1.Apelido_estabelecimento 
    AND pc.[Codigo] = ag1.[Codigo_agentes]
LEFT JOIN [dbo].Item_recebimento AS ir 
    ON rq.[Apelido_empresa] = ir.[Apelido_empresa] 
    AND rq.[Apelido_estabelecimento] = ir.[Apelido_estabelecimento] 
    AND rq.[Pedido compra numero] = ir.[Pedido_Compra] 
    AND rq.[Codigo material] = ir.[Codigo_produto]
LEFT JOIN [dbo].Capa_recebimento AS cr 
    ON ir.[Apelido_empresa] = cr.[Apelido_empresa] 
    AND ir.[Apelido_estabelecimento] = cr.[Apelido_estabelecimento] 
    AND ir.[Id_caparec] = cr.[Id_caparec]
LEFT JOIN [dbo].[Agente] AS ag 
    ON cr.Apelido_empresa = ag.Apelido_empresa 
    AND cr.Apelido_estabelecimento = ag.Apelido_estabelecimento 
    AND cr.[Codigo_agentes] = ag.[Codigo_agentes]
WHERE 
    rq.Apelido_empresa = 'IQL Tintas'
    AND rq.Apelido_estabelecimento = 'Matriz'
	AND (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005')
    AND pc.status_pedido <> 'NÃO APROVADO'
    AND (
        -- Processos de compras cadastrados e não entregues
        (       rq.[Status requisicao] = 'Comprado' 
            AND rq.[Data compra] BETWEEN '2024-10-01' AND DATEADD(DAY, 3, GETDATE())
		)
        OR
        -- Processos de compras entregues nos últimos 3 dias
        (       rq.[Status requisicao] = 'Atendido' 
            AND rq.[Data compra] BETWEEN DATEADD(DAY, -3, GETDATE()) AND GETDATE()
        )
	)
                `;

        await corp.$disconnect();

        //       console.log(Situacaocomprasaberto);

        const response = {
            ok: true,
            length: Situacaocomprasaberto.length,
            Situacaocomprasaberto: Situacaocomprasaberto
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

exports.getConsultaDre = async (req, res, next) => {

    let vendaTotal = 0;
    let vendaReal = 0;

    const now = new Date();

    // Obter o mês (os meses começam do 0, então somamos 1)
    const month = now.getMonth() + 1;

    // Obter o ano
    const year = now.getFullYear();

    try {

        const Vendas = await corp.$queryRaw`
            WITH CombinedData AS (
            -- União dos dados de Movto_caixa e Titulos
	SELECT 
	 CAST(cn.Data_Emissao AS DATE) AS Data,
    '0' AS Codigo_Centro_Custo,
    '(+)Vendas' AS Descricao_Centro_Custo,
    SUM(DISTINCT cn.Val_NF) AS Valor,
    0 AS Valor_titulo,
    0 AS Saldo_titulo
    FROM dbo.[Capa Nota] AS cn WITH(NOLOCK)
    LEFT JOIN dbo.Cfop AS cf ON
          cn.Apelido_empresa = cf.Apelido_empresa AND
          cn.Codigo_CFOP = cf.Codigo_CFOP
	LEFT JOIN 
          dbo.[Agente] AS ag ON 
          cn.Apelido_empresa = ag.Apelido_empresa AND
          cn.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
          cn.[Codigo_agentes] = ag.[Codigo_agentes]
    WHERE 
--        cn.Apelido_empresa = 'IQL Tintas' AND
 --       cn.Apelido_estabelecimento = 'Matriz' AND
        (cn.Status_sistema_nfe = 'AUTORIZADA' OR cn.Status_sistema_nfe = 'EMITIDA') 
		AND	MONTH(cn.Data_Emissao) = 01 -- MONTH(GETDATE())
        AND YEAR(cn.Data_Emissao) = 2025 --YEAR(GETDATE())
        AND cf.Entrada_saida = 'SAIDA'
		AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
        AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
        AND cf.Codigo_CFOP not like ('59%')
		AND cf.Codigo_CFOP not like ('69%')
--		AND cf.Codigo_CFOP not like ('5902%')
--		AND cf.Codigo_CFOP not like ('5949%')
--		AND cf.Codigo_CFOP not like ('5911%')
--		AND cf.Codigo_CFOP not like ('5920%')
--		AND cf.Codigo_CFOP not like ('5910%')
--        AND cf.Codigo_CFOP not like ('6911%')
    GROUP BY cn.Data_Emissao,cf.Entrada_saida

	union all

	SELECT  
	CAST(cp.Pedido_Para AS DATE) AS Data,
    '0' AS Codigo_Centro_Custo,
    '(+) Pedidos de Vendas' AS Descricao_Centro_Custo,
    SUM(ip.Valor) AS Valor,
    0 AS Valor_titulo,
    0 AS Saldo_titulo
    FROM dbo.Itens_Pedido AS ip
    LEFT JOIN dbo.[Capa Pedido] AS cp ON
        ip.[Apelido_empresa] = cp.[Apelido_empresa] AND 
        ip.[Apelido_estabelecimento] = cp.[Apelido_estabelecimento] AND 
        ip.[Numero Pedido] = cp.[Numero Pedido]
	LEFT JOIN 
          dbo.[Agente] AS ag ON 
          cp.Apelido_empresa = ag.Apelido_empresa AND
          cp.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
          cp.Agente_Faturamento = ag.[Codigo_agentes]
    WHERE 
    cp.Situacao_pedido <> 'CANCELADO' 
			AND	MONTH(cp.Pedido_Para) = 01 -- MONTH(GETDATE())
        AND YEAR(cp.Pedido_Para) = 2025 --YEAR(GETDATE())
 --       ip.Apelido_empresa = 'IQL Tintas' AND
 --       ip.Apelido_estabelecimento = 'Matriz' AND
        AND ip.qtde_faturada = 0
		AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
        AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
		and ag.Nome nOT like 'Repintura Estoque'
        and ag.Nome NOT LIKE 'LINHA PISO ESTOQUE'
		group by 
		cp.Pedido_Para
		union all
	   SELECT 
	   	CAST([rq].[data compra] AS DATE) AS Data,
		'0' AS Codigo_Centro_Custo,
		'(-) Compras não entregue Materia Prima e Embalagem' AS Descricao_Centro_Custo,
		SUM(DISTINCT pc.[Valor total]) AS Valor,
		0 AS Valor_titulo,
		0 AS Saldo_titulo

    FROM [corp].[dbo].[requisicao] AS [rq]
    LEFT JOIN [dbo].[Itens_almox] AS ia ON 
        ia.[Apelido_empresa] = rq.[Apelido_empresa] AND 
        ia.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
        ia.[Codigo_produto] = rq.[Codigo material]
    LEFT JOIN [dbo].[Pedido compra] AS pc ON 
        pc.[Apelido_empresa] = rq.[Apelido_empresa] AND 
        pc.[Apelido_estabelecimento] = rq.[Apelido_estabelecimento] AND 
        pc.[Pedido compra numero] = rq.[Pedido compra numero]
    WHERE 
--        [rq].Apelido_empresa = 'IQL Tintas' AND
--        [rq].Apelido_estabelecimento = 'Matriz' AND
        [rq].[Status requisicao] = 'Comprado' 
		AND	MONTH([rq].[data compra]) = 01 -- MONTH(GETDATE())
        AND YEAR([rq].[data compra]) = 2025 --YEAR(GETDATE())
        AND (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005') 
        AND [pc].status_pedido <> 'NÃO APROVADO'
    GROUP BY
        [rq].[data compra]
		union all
	select 
	CAST(cr.Data_Emissao AS DATE) AS Data,
	'0' AS Codigo_Centro_Custo,
	'(-) Compras entregue Materia Prima e Embalagem' AS Descricao_Centro_Custo,
    SUM(DISTINCT cr.Valor_nf) AS Valor,
	0 AS Valor_titulo,
	0 AS Saldo_titulo
	from [dbo].Item_recebimento AS ir
	LEFT JOIN [dbo].[Itens_almox] AS ia ON 
    (   ir.[Apelido_empresa] = ia.[Apelido_empresa] AND 
        ir.[Apelido_estabelecimento] = ia.[Apelido_estabelecimento]  AND 
        ir.Codigo_produto = ia.[Codigo_produto] 
     )
	LEFT JOIN [dbo].Capa_recebimento AS cr ON 
	(
		ir.[Apelido_empresa]         = cr.[Apelido_empresa] AND 
		ir.[Apelido_estabelecimento] = cr.[Apelido_estabelecimento] AND 
		ir.[Id_caparec]              = cr.[Id_caparec]
	)
	WHERE 
--        cr.Apelido_empresa = 'IQL Tintas' AND
 --       cr.Apelido_estabelecimento = 'Matriz' AND
			MONTH(cr.Data_Emissao) = 01 -- MONTH(GETDATE())
        AND YEAR(cr.Data_Emissao) = 2025 --YEAR(GETDATE())
		AND (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005')
    GROUP BY cr.Data_Emissao
		union all

            SELECT 
                CAST(mc.Data AS DATE) AS Data, -- Apenas a parte da data
                cc.Codigo AS Codigo_Centro_Custo,
                cc.Descricao AS Descricao_Centro_Custo,
                mc.Valor AS Valor,
                0 AS Valor_titulo,
                0 AS Saldo_titulo
            FROM 
                dbo.Movto_caixa mc
            LEFT JOIN [dbo].Movto_caixa_rateio AS mr
                ON mc.Apelido_empresa = mr.Apelido_empresa
                AND mc.Apelido_estabelecimento = mr.Apelido_estabelecimento
                AND mc.Id_movbancai = mr.Id_movbancai
            LEFT JOIN [dbo].Centro_de_custo AS cc
                ON mr.Apelido_empresa = cc.Apelido_empresa
                AND mr.Apelido_estabelecimento = cc.Apelido_estabelecimento
                AND mr.Codigo_cc = cc.Codigo
            WHERE 
                MONTH(mc.Data) = 01 -- MONTH(GETDATE())
                AND YEAR(mc.Data) = 2025 --YEAR(GETDATE())
                AND mc.id_titulo = 0
                and mc.previsao = 0
                and mc.sinal < 0 

        
            UNION ALL
                -- União dos dados de Movto_caixa e Titulos
            SELECT 
                CAST(mc.Data AS DATE) AS Data, -- Apenas a parte da data
                cc.Codigo AS Codigo_Centro_Custo,
                cc.Descricao AS Descricao_Centro_Custo,
                mc.Valor AS Valor,
                0 AS Valor_titulo,
                0 AS Saldo_titulo
            FROM 
                dbo.Movto_caixa mc
            LEFT JOIN [dbo].Movto_caixa_rateio AS mr
                ON mc.Apelido_empresa = mr.Apelido_empresa
                AND mc.Apelido_estabelecimento = mr.Apelido_estabelecimento
                AND mc.Id_movbancai = mr.Id_movbancai
            LEFT JOIN [dbo].Centro_de_custo AS cc
                ON mr.Apelido_empresa = cc.Apelido_empresa
                AND mr.Apelido_estabelecimento = cc.Apelido_estabelecimento
                AND mr.Codigo_cc = cc.Codigo
            WHERE 
                MONTH(mc.Data) = 01 -- MONTH(GETDATE())
                AND YEAR(mc.Data) = 2025 --YEAR(GETDATE())
                AND mc.id_titulo = 0
                and mc.previsao = 0
                and mc.sinal > 0 
        
            UNION ALL
        
            SELECT 
                CAST(tt.data_vencto AS DATE) AS Data,
                cc.Codigo AS Codigo_Centro_Custo,
                cc.Descricao AS Descricao_Centro_Custo,
                tt.Valor_titulo  AS Valor,
                tt.Valor_titulo AS Valor_titulo,
                tt.Saldo_titulo AS Saldo_titulo
		
            FROM 
                dbo.Titulos tt
            LEFT JOIN [dbo].Titulos_rateio AS tr
                ON tt.Apelido_empresa = tr.Apelido_empresa
                AND tt.Apelido_estabelecimento = tr.Apelido_estabelecimento
                AND tt.id_titulo = tr.id_titulo
            LEFT JOIN [dbo].Centro_de_custo AS cc
                ON tr.Apelido_empresa = cc.Apelido_empresa
                AND tr.Apelido_estabelecimento = cc.Apelido_estabelecimento
                AND tr.Codigo_cc = cc.Codigo
            WHERE 
                tt.pag_rec = 'P'
                AND MONTH(tt.data_vencto) = 01 --MONTH(GETDATE())
                AND YEAR(tt.data_vencto) = 2025 --YEAR(GETDATE())
                AND tt.cancelado =0
                AND tt.previsao  = 0
				AND tr.Codigo_Aplicacao_Compras like '%9122%'
        
            UNION ALL
            SELECT 
                CAST(tt.data_vencto AS DATE) AS Data,
                cc.Codigo AS Codigo_Centro_Custo,
                '(+) Recebimentos'  AS Descricao_Centro_Custo,
                tt.Valor_titulo  AS Valor,
                tt.Valor_titulo AS Valor_titulo,
                tt.Saldo_titulo AS Saldo_titulo
            FROM 
                dbo.Titulos tt
            LEFT JOIN [dbo].Titulos_rateio AS tr
                ON tt.Apelido_empresa = tr.Apelido_empresa
                AND tt.Apelido_estabelecimento = tr.Apelido_estabelecimento
                AND tt.id_titulo = tr.id_titulo
            LEFT JOIN [dbo].Centro_de_custo AS cc
                ON tr.Apelido_empresa = cc.Apelido_empresa
                AND tr.Apelido_estabelecimento = cc.Apelido_estabelecimento
                AND tr.Codigo_cc = cc.Codigo
            WHERE 
                tt.pag_rec = 'R'
                AND MONTH(tt.data_vencto) = 01 --MONTH(GETDATE())
                AND YEAR(tt.data_vencto) = 2025 --YEAR(GETDATE())
                AND tt.cancelado =0
                AND tt.previsao  = 0

        )
        -- Pivoteamento dos dados
        SELECT 
            ISNULL(Codigo_Centro_Custo,0) as Codigo_Centro_Custo,
            ISNULL(Descricao_Centro_Custo,'Sem Identificação') as Descricao_Centro_Custo,

        --	'' as Codigo_Aplicacao_Compras,
        --	'' as Descricao_Aplicacao_Compras,

            ISNULL([1], 0) AS Dia_1,
            ISNULL([2], 0) AS Dia_2,
            ISNULL([3], 0) AS Dia_3,
            ISNULL([4], 0) AS Dia_4,
            ISNULL([5], 0) AS Dia_5,
            ISNULL([6], 0) AS Dia_6,
            ISNULL([7], 0) AS Dia_7,
            ISNULL([8], 0) AS Dia_8,
            ISNULL([9], 0) AS Dia_9,
            ISNULL([10], 0) AS Dia_10,
            ISNULL([11], 0) AS Dia_11,
            ISNULL([12], 0) AS Dia_12,
            ISNULL([13], 0) AS Dia_13,
            ISNULL([14], 0) AS Dia_14,
            ISNULL([15], 0) AS Dia_15,
            ISNULL([16], 0) AS Dia_16,
            ISNULL([17], 0) AS Dia_17,
            ISNULL([18], 0) AS Dia_18,
            ISNULL([19], 0) AS Dia_19,
            ISNULL([20], 0) AS Dia_20,
            ISNULL([21], 0) AS Dia_21,
            ISNULL([22], 0) AS Dia_22,
            ISNULL([23], 0) AS Dia_23,
            ISNULL([24], 0) AS Dia_24,
            ISNULL([25], 0) AS Dia_25,
            ISNULL([26], 0) AS Dia_26,
            ISNULL([27], 0) AS Dia_27,
            ISNULL([28], 0) AS Dia_28,
            ISNULL([29], 0) AS Dia_29,
            ISNULL([30], 0) AS Dia_30,
            ISNULL([31], 0) AS Dia_31,
            (ISNULL([1], 0) + 
             ISNULL([2], 0) + 
             ISNULL([3], 0) + 
             ISNULL([4], 0) + 
             ISNULL([5], 0) + 
             ISNULL([6], 0) + 
             ISNULL([7], 0) + 
             ISNULL([8], 0) + 
             ISNULL([9], 0) + 
             ISNULL([10], 0) +
             ISNULL([11], 0) + 
             ISNULL([12], 0) + 
             ISNULL([13], 0) + 
             ISNULL([14], 0) + 
             ISNULL([15], 0) + 
             ISNULL([16], 0) + 
             ISNULL([17], 0) + 
             ISNULL([18], 0) + 
             ISNULL([19], 0) + 
             ISNULL([20], 0) +
             ISNULL([21], 0) + 
             ISNULL([22], 0) + 
             ISNULL([23], 0) + 
             ISNULL([24], 0) + 
             ISNULL([25], 0) + 
             ISNULL([26], 0) + 
             ISNULL([27], 0) + 
             ISNULL([28], 0) + 
             ISNULL([29], 0) + 
             ISNULL([30], 0) +
             ISNULL([31], 0)  
             )  AS Total_Mes -- Soma de todos os dias
            FROM (
                SELECT 
                Codigo_Centro_Custo,
                Descricao_Centro_Custo,
                DAY(Data) AS Dia, -- Extrai o dia da data
                SUM(Valor) AS Valor
                FROM CombinedData
                GROUP BY 
                Codigo_Centro_Custo,
                Descricao_Centro_Custo,
                DAY(Data)
                ) AS SourceData
                PIVOT (
                SUM(Valor) FOR Dia IN ([1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19], [20], [21], [22], [23], [24], [25], [26], [27], [28], [29], [30], [31])
                ) AS PivotTable
                ORDER BY 
                    Codigo_Centro_Custo,
                    Descricao_Centro_Custo
                `;

        await corp.$disconnect();

        for (i = 0; i <= Vendas.length - 1; i++) {
            console.log(Vendas[i])
            console.log(Vendas[i].Imposto)
            if (Vendas[i].Imposto == 'Total') {
                console.log(Vendas[i].Saida)
                vendaTotal = Vendas[i].Saida;
                console.log(vendaTotal);
            }
            if (Vendas[i].Imposto == 'Realizado') {
                console.log(Vendas[i].Saida)
                vendaReal = Vendas[i].Saida;
                console.log(vendaReal);
            }

        }

        console.log(vendaTotal);
        console.log(vendaReal);

        const Despesas = await corp.$queryRaw`
select 
cc.codigo as Codigo,
cc.Descricao as Descricao,
tr.Codigo_Aplicacao_Compras,
ac.Descricao as aplicacao,
SUM(tt.Valor_titulo) as valor,
SUM(tt.Saldo_titulo) as saldo,
count(tt.nrtitulo) as quantidade,
(SUM(tt.Valor_titulo)/${vendaReal}) * 100 as porcentagem_real ,
(SUM(tt.Valor_titulo)/${vendaTotal}) * 100 as porcentagem_arealizar
--tr.*,
--cf.*,
--tt.Nro_NF,
--tt.Codigo_Centro_Custo,
--cc.Descricao,
--tt.*
from dbo.Titulos tt

LEFT JOIN [dbo].Cfop AS cf ON 
(
	tt.[Apelido_empresa]         = cf.[Apelido_empresa] AND 
	tt.codigo_cfop               = cf.Codigo_CFOP
)
LEFT JOIN [dbo].Titulos_rateio AS tr ON 
(
	tt.[Apelido_empresa]         = tr.[Apelido_empresa] AND 
	tt.[Apelido_estabelecimento] = tr.[Apelido_estabelecimento] AND 
	tt.id_titulo       = tr.id_titulo
)
LEFT JOIN [dbo].Centro_de_custo AS cc ON 
(
	tr.[Apelido_empresa]         = cc.[Apelido_empresa] AND 
	tr.[Apelido_estabelecimento] = cc.[Apelido_estabelecimento] AND 
	tr.Codigo_cc       = cc.Codigo
)
LEFT JOIN [dbo].Aplicacao_compras AS ac ON 
(
	tr.[Apelido_empresa]         = ac.[Apelido_empresa] AND 
	tr.[Apelido_estabelecimento] = ac.[Apelido_estabelecimento] AND 
	tr.Codigo_Aplicacao_Compras                 = ac.Codigo
)
where 
    tt.Apelido_empresa = 'IQL Tintas' 
AND tt.Apelido_estabelecimento = 'Matriz' 
AND TT.pag_rec = 'P'
AND MONTH(tt.data_vencto) = MONTH(GETDATE())  -- Mês atual
AND YEAR(tt.data_vencto) = YEAR(GETDATE())      -- Ano atual
group by
cc.codigo,
cc.Descricao ,
tr.Codigo_Aplicacao_Compras,
ac.Descricao
                        `;

        await corp.$disconnect();
        //       console.log(Situacaocomprasaberto);

        const response = {
            ok: true,
            Vendas: Vendas,
            Despesas: Despesas
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

exports.postConsultaDfc = async (req, res, next) => {

    let vendaTotal = 0;
    let vendaReal = 0;


    const data = new Date(req.body.dtinicio);

    const mes = data.getMonth() + 1; // getMonth() retorna de 0 a 11, então soma +1
    const ano = data.getFullYear();  // Retorna o ano completo

    console.log(`Mês: ${mes}, Ano: ${ano}`);

    const now = new Date();

    // Obter o mês (os meses começam do 0, então somamos 1)
    const month = now.getMonth() + 1;

    // Obter o ano
    const year = now.getFullYear();
    // console.log(req.body)
    // console.log(req.body.banco.banco)

    const Apelido_empresa = req.body.banco.apelido_empresa;
    const Banco = req.body.banco.banco;

    //  console.log(Apelido_empresa)
    // console.log(Banco)

    try {
        let Fluxos;
        if (Apelido_empresa == 'Todos') {
            //           console.log('Todos');
            Fluxos = await corp.$queryRaw`
    WITH CombinedData AS (
    -- União dos dados de Movto_caixa e Titulos
    SELECT 
        CAST(mc.Data AS DATE) AS Data, -- Apenas a parte da data
        cc.Codigo AS Codigo_Centro_Custo,
        cc.Descricao AS Descricao_Centro_Custo,
        ac.Codigo AS Codigo_Aplicacao_Compras,
        ac.Descricao AS Descricao_Aplicacao_Compras,
        mc.Valor AS Valor,
        0 AS Valor_titulo,
        0 AS Saldo_titulo
    FROM 
        dbo.Movto_caixa mc
    LEFT JOIN [dbo].Movto_caixa_rateio AS mr
        ON mc.Apelido_empresa = mr.Apelido_empresa
        AND mc.Apelido_estabelecimento = mr.Apelido_estabelecimento
        AND mc.Id_movbancai = mr.Id_movbancai
    LEFT JOIN [dbo].Centro_de_custo AS cc
        ON mr.Apelido_empresa = cc.Apelido_empresa
        AND mr.Apelido_estabelecimento = cc.Apelido_estabelecimento
        AND mr.Codigo_cc = cc.Codigo
    LEFT JOIN [dbo].Aplicacao_compras AS ac
        ON mr.Apelido_empresa = ac.Apelido_empresa
        AND mr.Apelido_estabelecimento = ac.Apelido_estabelecimento
        AND mr.Codigo_Aplicacao_Compras = ac.Codigo
    WHERE 
        MONTH(mc.Data) = ${mes} -- MONTH(GETDATE())
        AND YEAR(mc.Data) = ${ano} --YEAR(GETDATE())
        AND mc.id_titulo = 0
		and mc.previsao = 0
		and mc.sinal < 0 
        and mc.adiantamento = 0

    UNION ALL
	    -- União dos dados de Movto_caixa e Titulos
    SELECT 
        CAST(mc.Data AS DATE) AS Data, -- Apenas a parte da data
        cc.Codigo AS Codigo_Centro_Custo,
        cc.Descricao AS Descricao_Centro_Custo,
        ac.Codigo AS Codigo_Aplicacao_Compras,
        ac.Descricao AS Descricao_Aplicacao_Compras,
        mc.Valor AS Valor,
        0 AS Valor_titulo,
        0 AS Saldo_titulo
    FROM 
        dbo.Movto_caixa mc
    LEFT JOIN [dbo].Movto_caixa_rateio AS mr
        ON mc.Apelido_empresa = mr.Apelido_empresa
        AND mc.Apelido_estabelecimento = mr.Apelido_estabelecimento
        AND mc.Id_movbancai = mr.Id_movbancai
    LEFT JOIN [dbo].Centro_de_custo AS cc
        ON mr.Apelido_empresa = cc.Apelido_empresa
        AND mr.Apelido_estabelecimento = cc.Apelido_estabelecimento
        AND mr.Codigo_cc = cc.Codigo
    LEFT JOIN [dbo].Aplicacao_compras AS ac
        ON mr.Apelido_empresa = ac.Apelido_empresa
        AND mr.Apelido_estabelecimento = ac.Apelido_estabelecimento
        AND mr.Codigo_Aplicacao_Compras = ac.Codigo
    WHERE 
        MONTH(mc.Data) = ${mes} -- MONTH(GETDATE())
        AND YEAR(mc.Data) = ${ano} --YEAR(GETDATE())
        AND mc.id_titulo = 0
		and mc.previsao = 0
		and mc.sinal > 0 

    UNION ALL

    SELECT 
   
    CAST(GETDATE() AS DATE)  AS Data,
    cc.Codigo AS Codigo_Centro_Custo,
    cc.Descricao AS Descricao_Centro_Custo,
    ac.Codigo AS Codigo_Aplicacao_Compras,
    ac.Descricao AS Descricao_Aplicacao_Compras,
    ((tt.Valor_titulo * tr.Porcentagem)/100)  AS Valor,
--    tt.Valor_titulo AS Valor,
    tt.Valor_titulo AS Valor_titulo,
    tt.Saldo_titulo AS Saldo_titulo
FROM dbo.Titulos tt
LEFT JOIN dbo.[Agente] AS ag ON 
    tt.Apelido_empresa = ag.Apelido_empresa AND
    tt.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
    tt.[Codigo_agentes] = ag.[Codigo_agentes]
LEFT JOIN dbo.Titulos_rateio AS tr ON
        tt.Apelido_empresa = tr.Apelido_empresa
    AND tt.Apelido_estabelecimento = tr.Apelido_estabelecimento
    AND tt.id_titulo = tr.id_titulo
LEFT JOIN dbo.Centro_de_custo AS cc ON
        tr.Apelido_empresa = cc.Apelido_empresa
    AND tr.Apelido_estabelecimento = cc.Apelido_estabelecimento
    AND tr.Codigo_cc = cc.Codigo
LEFT JOIN dbo.Aplicacao_compras AS ac ON
        tr.Apelido_empresa = ac.Apelido_empresa
    AND tr.Apelido_estabelecimento = ac.Apelido_estabelecimento
    AND tr.Codigo_Aplicacao_Compras = ac.Codigo
WHERE 
    tt.pag_rec = 'P'
    AND tt.Saldo_titulo <> 0
	AND tt.data_vencto >= '2024-10-01'
    AND tt.data_vencto < DATEFROMPARTS(${ano}, ${mes}, 1)
    AND tt.cancelado = 0
    AND tt.previsao = 0
    AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
    AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
    AND ag.Nome NOT LIKE '%secretaria%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%prefeitura%' --remove vendas para acmc
    AND ag.Nome NOT LIKE '%banco%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%caixa%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%crédito%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%credito%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%fundo%' --remove vendas para acmc
    AND ag.Nome NOT LIKE '%FGTS%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%MINISTÉRIO DA%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%HELEN CRISTINA PIAIA MARQUES%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%FABIANO MARZIO FERRARI%' --remove vendas para acmc

    UNION ALL

    SELECT 
    	CASE 
        WHEN tt.Saldo_titulo <> 0 AND tt.data_vencto < GETDATE() THEN CAST(GETDATE() AS DATE)
			ELSE CAST(tt.data_vencto AS DATE)
		END AS Data,
 --       CAST(tt.data_vencto AS DATE) AS Data,
        cc.Codigo AS Codigo_Centro_Custo,
        cc.Descricao AS Descricao_Centro_Custo,
        ac.Codigo AS Codigo_Aplicacao_Compras,
        ac.Descricao AS Descricao_Aplicacao_Compras,
        ((tt.Valor_titulo * tr.Porcentagem)/100)  AS Valor,
--        tt.Valor_titulo  AS Valor,
        tt.Valor_titulo AS Valor_titulo,
        tt.Saldo_titulo AS Saldo_titulo
    FROM 
        dbo.Titulos tt
    LEFT JOIN [dbo].Titulos_rateio AS tr
        ON tt.Apelido_empresa = tr.Apelido_empresa
        AND tt.Apelido_estabelecimento = tr.Apelido_estabelecimento
        AND tt.id_titulo = tr.id_titulo
    LEFT JOIN [dbo].Centro_de_custo AS cc
        ON tr.Apelido_empresa = cc.Apelido_empresa
        AND tr.Apelido_estabelecimento = cc.Apelido_estabelecimento
        AND tr.Codigo_cc = cc.Codigo
    LEFT JOIN [dbo].Aplicacao_compras AS ac
        ON tr.Apelido_empresa = ac.Apelido_empresa
        AND tr.Apelido_estabelecimento = ac.Apelido_estabelecimento
        AND tr.Codigo_Aplicacao_Compras = ac.Codigo
    WHERE 
        tt.pag_rec = 'P'
        AND MONTH(tt.data_vencto) = ${mes} --MONTH(GETDATE())
        AND YEAR(tt.data_vencto) = ${ano} --YEAR(GETDATE())
		AND tt.cancelado =0
		AND tt.previsao  = 0

    UNION ALL
    SELECT 
        CAST(tt.data_vencto AS DATE) AS Data,
        cc.Codigo AS Codigo_Centro_Custo,
        '(+) Recebimentos'  AS Descricao_Centro_Custo,
        ac.Codigo AS Codigo_Aplicacao_Compras,
        '(+) Recebimento de Clientes' AS Descricao_Aplicacao_Compras,
        tt.Valor_titulo  AS Valor,
        tt.Valor_titulo AS Valor_titulo,
        tt.Saldo_titulo AS Saldo_titulo
    FROM 
        dbo.Titulos tt
    LEFT JOIN [dbo].Titulos_rateio AS tr
        ON tt.Apelido_empresa = tr.Apelido_empresa
        AND tt.Apelido_estabelecimento = tr.Apelido_estabelecimento
        AND tt.id_titulo = tr.id_titulo
    LEFT JOIN [dbo].Centro_de_custo AS cc
        ON tr.Apelido_empresa = cc.Apelido_empresa
        AND tr.Apelido_estabelecimento = cc.Apelido_estabelecimento
        AND tr.Codigo_cc = cc.Codigo
    LEFT JOIN [dbo].Aplicacao_compras AS ac
        ON tr.Apelido_empresa = ac.Apelido_empresa
        AND tr.Apelido_estabelecimento = ac.Apelido_estabelecimento
        AND tr.Codigo_Aplicacao_Compras = ac.Codigo
    WHERE 
        tt.pag_rec = 'R'
        AND MONTH(tt.data_vencto) = ${mes} --MONTH(GETDATE())
        AND YEAR(tt.data_vencto) = ${ano} --YEAR(GETDATE())
		AND tt.cancelado =0
		AND tt.previsao  = 0
union all
    SELECT 
        CAST(tt.data_vencto AS DATE) AS Data,
        cc.Codigo AS Codigo_Centro_Custo,
        '(+) Recebimentos'  AS Descricao_Centro_Custo,
        ac.Codigo AS Codigo_Aplicacao_Compras,
        '(+) Recebimento de Clientes' AS Descricao_Aplicacao_Compras,
        tt.Valor_titulo  AS Valor,
        tt.Valor_titulo AS Valor_titulo,
        tt.Saldo_titulo AS Saldo_titulo
    FROM 
        dbo.Titulos tt
    LEFT JOIN [dbo].Titulos_rateio AS tr
        ON tt.Apelido_empresa = tr.Apelido_empresa
        AND tt.Apelido_estabelecimento = tr.Apelido_estabelecimento
        AND tt.id_titulo = tr.id_titulo
    LEFT JOIN [dbo].Centro_de_custo AS cc
        ON tr.Apelido_empresa = cc.Apelido_empresa
        AND tr.Apelido_estabelecimento = cc.Apelido_estabelecimento
        AND tr.Codigo_cc = cc.Codigo
    LEFT JOIN [dbo].Aplicacao_compras AS ac
        ON tr.Apelido_empresa = ac.Apelido_empresa
        AND tr.Apelido_estabelecimento = ac.Apelido_estabelecimento
        AND tr.Codigo_Aplicacao_Compras = ac.Codigo
    WHERE 
        tt.pag_rec = 'R'
        AND MONTH(tt.data_vencto) = ${mes} --MONTH(GETDATE())
        AND YEAR(tt.data_vencto) = ${ano} --YEAR(GETDATE())
		AND tt.cancelado =0
		AND tt.previsao  = 0
		AND NOT EXISTS (
        SELECT 1 
        FROM dbo.movto_titulo mt
        WHERE mt.Apelido_empresa = tt.Apelido_empresa
        AND mt.Apelido_estabelecimento = tt.Apelido_estabelecimento
        AND mt.id_titulo = tt.id_titulo
    )
)
-- Pivoteamento dos dados
SELECT 
    ISNULL(Codigo_Centro_Custo,0) as Codigo_Centro_Custo,
    ISNULL(Descricao_Centro_Custo,'Sem Identificação') as Descricao_Centro_Custo,
    ISNULL(Codigo_Aplicacao_Compras,0) as Codigo_Aplicacao_Compras,
    ISNULL(Descricao_Aplicacao_Compras,' - ') as Descricao_Aplicacao_Compras,
--	'' as Codigo_Aplicacao_Compras,
--	'' as Descricao_Aplicacao_Compras,
    ISNULL(SUBSTRING(Descricao_Aplicacao_Compras, 2, 1),'E') AS sinal,
    ISNULL([1], 0) AS Dia_1,
    ISNULL([2], 0) AS Dia_2,
    ISNULL([3], 0) AS Dia_3,
    ISNULL([4], 0) AS Dia_4,
    ISNULL([5], 0) AS Dia_5,
	ISNULL([6], 0) AS Dia_6,
    ISNULL([7], 0) AS Dia_7,
    ISNULL([8], 0) AS Dia_8,
    ISNULL([9], 0) AS Dia_9,
    ISNULL([10], 0) AS Dia_10,
	ISNULL([11], 0) AS Dia_11,
    ISNULL([12], 0) AS Dia_12,
    ISNULL([13], 0) AS Dia_13,
    ISNULL([14], 0) AS Dia_14,
    ISNULL([15], 0) AS Dia_15,
	ISNULL([16], 0) AS Dia_16,
    ISNULL([17], 0) AS Dia_17,
    ISNULL([18], 0) AS Dia_18,
    ISNULL([19], 0) AS Dia_19,
    ISNULL([20], 0) AS Dia_20,
	ISNULL([21], 0) AS Dia_21,
    ISNULL([22], 0) AS Dia_22,
    ISNULL([23], 0) AS Dia_23,
    ISNULL([24], 0) AS Dia_24,
    ISNULL([25], 0) AS Dia_25,
	ISNULL([26], 0) AS Dia_26,
	ISNULL([27], 0) AS Dia_27,
	ISNULL([28], 0) AS Dia_28,
	ISNULL([29], 0) AS Dia_29,
	ISNULL([30], 0) AS Dia_30,
    ISNULL([31], 0) AS Dia_31,
    (ISNULL([1], 0) + 
	 ISNULL([2], 0) + 
	 ISNULL([3], 0) + 
	 ISNULL([4], 0) + 
	 ISNULL([5], 0) + 
	 ISNULL([6], 0) + 
	 ISNULL([7], 0) + 
	 ISNULL([8], 0) + 
	 ISNULL([9], 0) + 
	 ISNULL([10], 0) +
	 ISNULL([11], 0) + 
	 ISNULL([12], 0) + 
	 ISNULL([13], 0) + 
	 ISNULL([14], 0) + 
	 ISNULL([15], 0) + 
	 ISNULL([16], 0) + 
	 ISNULL([17], 0) + 
	 ISNULL([18], 0) + 
	 ISNULL([19], 0) + 
	 ISNULL([20], 0) +
	 ISNULL([21], 0) + 
	 ISNULL([22], 0) + 
	 ISNULL([23], 0) + 
	 ISNULL([24], 0) + 
	 ISNULL([25], 0) + 
	 ISNULL([26], 0) + 
	 ISNULL([27], 0) + 
	 ISNULL([28], 0) + 
	 ISNULL([29], 0) + 
	 ISNULL([30], 0) +
	 ISNULL([31], 0)  
	 )  AS Total_Mes -- Soma de todos os dias
    FROM (
        SELECT 
        Codigo_Centro_Custo,
        Descricao_Centro_Custo,
        Codigo_Aplicacao_Compras,
        Descricao_Aplicacao_Compras,
        DAY(Data) AS Dia, -- Extrai o dia da data
        SUM(Valor) AS Valor
        FROM CombinedData
        GROUP BY 
        Codigo_Centro_Custo,
        Descricao_Centro_Custo,
        Codigo_Aplicacao_Compras,
        Descricao_Aplicacao_Compras,
        DAY(Data)
        ) AS SourceData
        PIVOT (
        SUM(Valor) FOR Dia IN ([1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19], [20], [21], [22], [23], [24], [25], [26], [27], [28], [29], [30], [31])
        ) AS PivotTable
        ORDER BY 
        Descricao_Centro_Custo DESC,
        Descricao_Aplicacao_Compras DESC,
        Codigo_Centro_Custo,
        Codigo_Aplicacao_Compras;
            `;
        } else {
            //            console.log('outros');
            Fluxos = await corp.$queryRaw`
            WITH CombinedData AS (
            -- União dos dados de Movto_caixa e Titulos
            SELECT 
                CAST(mc.Data AS DATE) AS Data, -- Apenas a parte da data
                cc.Codigo AS Codigo_Centro_Custo,
                cc.Descricao AS Descricao_Centro_Custo,
                ac.Codigo AS Codigo_Aplicacao_Compras,
                ac.Descricao AS Descricao_Aplicacao_Compras,
                mc.Valor AS Valor,
                0 AS Valor_titulo,
                0 AS Saldo_titulo
            FROM 
                dbo.Movto_caixa mc
            LEFT JOIN [dbo].Movto_caixa_rateio AS mr
                ON mc.Apelido_empresa = mr.Apelido_empresa
                AND mc.Apelido_estabelecimento = mr.Apelido_estabelecimento
                AND mc.Id_movbancai = mr.Id_movbancai
            LEFT JOIN [dbo].Centro_de_custo AS cc
                ON mr.Apelido_empresa = cc.Apelido_empresa
                AND mr.Apelido_estabelecimento = cc.Apelido_estabelecimento
                AND mr.Codigo_cc = cc.Codigo
            LEFT JOIN [dbo].Aplicacao_compras AS ac
                ON mr.Apelido_empresa = ac.Apelido_empresa
                AND mr.Apelido_estabelecimento = ac.Apelido_estabelecimento
                AND mr.Codigo_Aplicacao_Compras = ac.Codigo
            WHERE 
                MONTH(mc.Data) = ${mes} -- MONTH(GETDATE())
                AND YEAR(mc.Data) = ${ano} --YEAR(GETDATE())
                AND mc.id_titulo = 0
                and mc.previsao = 0
                and mc.sinal < 0 
                and mc.adiantamento = 0
                and mc.Apelido_empresa = ${Apelido_empresa}
		        and mc.Codigo_banco = ${Banco}
        
            UNION ALL
                -- União dos dados de Movto_caixa e Titulos
            SELECT 
                CAST(mc.Data AS DATE) AS Data, -- Apenas a parte da data
                cc.Codigo AS Codigo_Centro_Custo,
                cc.Descricao AS Descricao_Centro_Custo,
                ac.Codigo AS Codigo_Aplicacao_Compras,
                ac.Descricao AS Descricao_Aplicacao_Compras,
                mc.Valor AS Valor,
                0 AS Valor_titulo,
                0 AS Saldo_titulo
            FROM 
                dbo.Movto_caixa mc
            LEFT JOIN [dbo].Movto_caixa_rateio AS mr
                ON mc.Apelido_empresa = mr.Apelido_empresa
                AND mc.Apelido_estabelecimento = mr.Apelido_estabelecimento
                AND mc.Id_movbancai = mr.Id_movbancai
            LEFT JOIN [dbo].Centro_de_custo AS cc
                ON mr.Apelido_empresa = cc.Apelido_empresa
                AND mr.Apelido_estabelecimento = cc.Apelido_estabelecimento
                AND mr.Codigo_cc = cc.Codigo
            LEFT JOIN [dbo].Aplicacao_compras AS ac
                ON mr.Apelido_empresa = ac.Apelido_empresa
                AND mr.Apelido_estabelecimento = ac.Apelido_estabelecimento
                AND mr.Codigo_Aplicacao_Compras = ac.Codigo
            WHERE 
                MONTH(mc.Data) = ${mes} -- MONTH(GETDATE())
                AND YEAR(mc.Data) = ${ano} --YEAR(GETDATE())
                AND mc.id_titulo = 0
                and mc.previsao = 0
                and mc.sinal > 0 
                and mc.Apelido_empresa = ${Apelido_empresa}
		        and mc.Codigo_banco = ${Banco}
     UNION all   

            
    SELECT 
   
    CAST(GETDATE() AS DATE)  AS Data,
    cc.Codigo AS Codigo_Centro_Custo,
    cc.Descricao AS Descricao_Centro_Custo,
    ac.Codigo AS Codigo_Aplicacao_Compras,
    ac.Descricao AS Descricao_Aplicacao_Compras,
    ((tt.Valor_titulo * tr.Porcentagem)/100)  AS Valor,
 --   tt.Valor_titulo AS Valor,
    tt.Valor_titulo AS Valor_titulo,
    tt.Saldo_titulo AS Saldo_titulo
FROM dbo.Titulos tt
LEFT JOIN dbo.[Agente] AS ag ON 
    tt.Apelido_empresa = ag.Apelido_empresa AND
    tt.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
    tt.[Codigo_agentes] = ag.[Codigo_agentes]
LEFT JOIN dbo.Titulos_rateio AS tr
    ON tt.Apelido_empresa = tr.Apelido_empresa
    AND tt.Apelido_estabelecimento = tr.Apelido_estabelecimento
    AND tt.id_titulo = tr.id_titulo
LEFT JOIN dbo.Centro_de_custo AS cc
    ON tr.Apelido_empresa = cc.Apelido_empresa
    AND tr.Apelido_estabelecimento = cc.Apelido_estabelecimento
    AND tr.Codigo_cc = cc.Codigo
LEFT JOIN dbo.Aplicacao_compras AS ac
    ON tr.Apelido_empresa = ac.Apelido_empresa
    AND tr.Apelido_estabelecimento = ac.Apelido_estabelecimento
    AND tr.Codigo_Aplicacao_Compras = ac.Codigo
WHERE 
    tt.pag_rec = 'P'
    AND tt.Saldo_titulo <> 0
	AND tt.data_vencto >= '2024-10-01'
    AND tt.data_vencto < DATEFROMPARTS(${ano}, ${mes}, 1)
    AND tt.cancelado = 0
    AND tt.previsao = 0
    and tt.Apelido_empresa = ${Apelido_empresa}
	and tt.Banco = ${Banco}
    AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
    AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
    AND ag.Nome NOT LIKE '%secretaria%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%prefeitura%' --remove vendas para acmc
    AND ag.Nome NOT LIKE '%banco%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%caixa%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%crédito%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%credito%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%fundo%' --remove vendas para acmc
    AND ag.Nome NOT LIKE '%FGTS%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%MINISTÉRIO DA%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%HELEN CRISTINA PIAIA MARQUES%' --remove vendas para acmc
	AND ag.Nome NOT LIKE '%FABIANO MARZIO FERRARI%' --remove vendas para acmc

    UNION ALL
        
    SELECT 
        CAST(tt.data_vencto AS DATE) AS Data,
        cc.Codigo AS Codigo_Centro_Custo,
        cc.Descricao AS Descricao_Centro_Custo,
        ac.Codigo AS Codigo_Aplicacao_Compras,
        ac.Descricao AS Descricao_Aplicacao_Compras,
        ((tt.Valor_titulo * tr.Porcentagem)/100)  AS Valor,
--                tt.Valor_titulo  AS Valor,
        tt.Valor_titulo AS Valor_titulo,
        tt.Saldo_titulo AS Saldo_titulo
        FROM dbo.Titulos tt
        LEFT JOIN [dbo].Titulos_rateio AS tr ON
            tt.Apelido_empresa = tr.Apelido_empresa
        AND tt.Apelido_estabelecimento = tr.Apelido_estabelecimento
        AND tt.id_titulo = tr.id_titulo
        LEFT JOIN [dbo].Centro_de_custo AS cc
                ON tr.Apelido_empresa = cc.Apelido_empresa
                AND tr.Apelido_estabelecimento = cc.Apelido_estabelecimento
                AND tr.Codigo_cc = cc.Codigo
            LEFT JOIN [dbo].Aplicacao_compras AS ac
                ON tr.Apelido_empresa = ac.Apelido_empresa
                AND tr.Apelido_estabelecimento = ac.Apelido_estabelecimento
                AND tr.Codigo_Aplicacao_Compras = ac.Codigo
            WHERE 
                tt.pag_rec = 'P'
                AND MONTH(tt.data_vencto) = ${mes} --MONTH(GETDATE())
                AND YEAR(tt.data_vencto) = ${ano} --YEAR(GETDATE())
                AND tt.cancelado =0
                AND tt.previsao  = 0
                and tt.Apelido_empresa = ${Apelido_empresa}
		        and tt.Banco = ${Banco}
        
            UNION ALL
            SELECT 
                CAST(tt.data_vencto AS DATE) AS Data,
                cc.Codigo AS Codigo_Centro_Custo,
                '(+) Recebimentos'  AS Descricao_Centro_Custo,
                ac.Codigo AS Codigo_Aplicacao_Compras,
                '(+) Recebimento de Clientes' AS Descricao_Aplicacao_Compras,
                tt.Valor_titulo  AS Valor,
                tt.Valor_titulo AS Valor_titulo,
                tt.Saldo_titulo AS Saldo_titulo
            FROM 
                dbo.Titulos tt
            LEFT JOIN [dbo].Titulos_rateio AS tr
                ON tt.Apelido_empresa = tr.Apelido_empresa
                AND tt.Apelido_estabelecimento = tr.Apelido_estabelecimento
                AND tt.id_titulo = tr.id_titulo
            LEFT JOIN [dbo].Centro_de_custo AS cc
                ON tr.Apelido_empresa = cc.Apelido_empresa
                AND tr.Apelido_estabelecimento = cc.Apelido_estabelecimento
                AND tr.Codigo_cc = cc.Codigo
            LEFT JOIN [dbo].Aplicacao_compras AS ac
                ON tr.Apelido_empresa = ac.Apelido_empresa
                AND tr.Apelido_estabelecimento = ac.Apelido_estabelecimento
                AND tr.Codigo_Aplicacao_Compras = ac.Codigo
            WHERE 
                tt.pag_rec = 'R'
                AND MONTH(tt.data_vencto) = ${mes} --MONTH(GETDATE())
                AND YEAR(tt.data_vencto) = ${ano} --YEAR(GETDATE())
                AND tt.cancelado =0
                AND tt.previsao  = 0
                and tt.Apelido_empresa = ${Apelido_empresa}
		        and tt.Banco = ${Banco}

        )
        -- Pivoteamento dos dados
        SELECT 
            ISNULL(Codigo_Centro_Custo,0) as Codigo_Centro_Custo,
            ISNULL(Descricao_Centro_Custo,'Sem Identificação') as Descricao_Centro_Custo,
            ISNULL(Codigo_Aplicacao_Compras,0) as Codigo_Aplicacao_Compras,
            ISNULL(Descricao_Aplicacao_Compras,' - ') as Descricao_Aplicacao_Compras,
        --	'' as Codigo_Aplicacao_Compras,
        --	'' as Descricao_Aplicacao_Compras,
            ISNULL(SUBSTRING(Descricao_Aplicacao_Compras, 2, 1),'E') AS sinal,
            ISNULL([1], 0) AS Dia_1,
            ISNULL([2], 0) AS Dia_2,
            ISNULL([3], 0) AS Dia_3,
            ISNULL([4], 0) AS Dia_4,
            ISNULL([5], 0) AS Dia_5,
            ISNULL([6], 0) AS Dia_6,
            ISNULL([7], 0) AS Dia_7,
            ISNULL([8], 0) AS Dia_8,
            ISNULL([9], 0) AS Dia_9,
            ISNULL([10], 0) AS Dia_10,
            ISNULL([11], 0) AS Dia_11,
            ISNULL([12], 0) AS Dia_12,
            ISNULL([13], 0) AS Dia_13,
            ISNULL([14], 0) AS Dia_14,
            ISNULL([15], 0) AS Dia_15,
            ISNULL([16], 0) AS Dia_16,
            ISNULL([17], 0) AS Dia_17,
            ISNULL([18], 0) AS Dia_18,
            ISNULL([19], 0) AS Dia_19,
            ISNULL([20], 0) AS Dia_20,
            ISNULL([21], 0) AS Dia_21,
            ISNULL([22], 0) AS Dia_22,
            ISNULL([23], 0) AS Dia_23,
            ISNULL([24], 0) AS Dia_24,
            ISNULL([25], 0) AS Dia_25,
            ISNULL([26], 0) AS Dia_26,
            ISNULL([27], 0) AS Dia_27,
            ISNULL([28], 0) AS Dia_28,
            ISNULL([29], 0) AS Dia_29,
            ISNULL([30], 0) AS Dia_30,
            ISNULL([31], 0) AS Dia_31,
            (ISNULL([1], 0) + 
             ISNULL([2], 0) + 
             ISNULL([3], 0) + 
             ISNULL([4], 0) + 
             ISNULL([5], 0) + 
             ISNULL([6], 0) + 
             ISNULL([7], 0) + 
             ISNULL([8], 0) + 
             ISNULL([9], 0) + 
             ISNULL([10], 0) +
             ISNULL([11], 0) + 
             ISNULL([12], 0) + 
             ISNULL([13], 0) + 
             ISNULL([14], 0) + 
             ISNULL([15], 0) + 
             ISNULL([16], 0) + 
             ISNULL([17], 0) + 
             ISNULL([18], 0) + 
             ISNULL([19], 0) + 
             ISNULL([20], 0) +
             ISNULL([21], 0) + 
             ISNULL([22], 0) + 
             ISNULL([23], 0) + 
             ISNULL([24], 0) + 
             ISNULL([25], 0) + 
             ISNULL([26], 0) + 
             ISNULL([27], 0) + 
             ISNULL([28], 0) + 
             ISNULL([29], 0) + 
             ISNULL([30], 0) +
             ISNULL([31], 0)  
             )  AS Total_Mes -- Soma de todos os dias
            FROM (
            SELECT 
                Codigo_Centro_Custo,
                Descricao_Centro_Custo,
                Codigo_Aplicacao_Compras,
                Descricao_Aplicacao_Compras,
                DAY(Data) AS Dia, -- Extrai o dia da data
                SUM(Valor) AS Valor
                FROM CombinedData
                GROUP BY 
                Codigo_Centro_Custo,
                Descricao_Centro_Custo,
                Codigo_Aplicacao_Compras,
                Descricao_Aplicacao_Compras,
                DAY(Data)
                ) AS SourceData
            PIVOT (
                SUM(Valor) FOR Dia IN ([1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19], [20], [21], [22], [23], [24], [25], [26], [27], [28], [29], [30], [31])
                ) AS PivotTable
                ORDER BY 
                Descricao_Centro_Custo DESC,
                Descricao_Aplicacao_Compras DESC,
                Codigo_Centro_Custo,
                Codigo_Aplicacao_Compras;
            `;
        }
    await corp.$disconnect();
        //        console.log(Fluxos);

    Faturados = await corp.$queryRaw`
WITH CombinedData AS (
   SELECT 
	CAST(cn.Data_Emissao as Date) as data ,
	    '0' AS Codigo_Centro_Custo,
    'Nota Fiscal Emitidas' AS Descricao_Centro_Custo,
    '0' AS Codigo_Aplicacao_Compras,
    'Vendas' AS Descricao_Aplicacao_Compras,
    cn.Val_NF AS Valor,
    0 AS Valor_titulo,
    0 AS Saldo_titulo

    FROM dbo.[Capa Nota] AS cn WITH(NOLOCK)
    LEFT JOIN dbo.Cfop AS cf ON
          cn.Apelido_empresa = cf.Apelido_empresa AND
          cn.Codigo_CFOP = cf.Codigo_CFOP
	LEFT JOIN dbo.[Agente] AS ag ON 
          cn.Apelido_empresa = ag.Apelido_empresa AND
          cn.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
          cn.[Codigo_agentes] = ag.[Codigo_agentes]
    WHERE 
        (cn.Status_sistema_nfe = 'AUTORIZADA' OR cn.Status_sistema_nfe = 'EMITIDA')
        AND MONTH(cn.Data_Emissao) = ${mes} --MONTH(GETDATE())
        AND YEAR(cn.Data_Emissao) = ${ano} --YEAR(GETDATE())
        AND cf.Entrada_saida = 'SAIDA'
		AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
        AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
        AND cf.Codigo_CFOP not like ('59%')
		AND cf.Codigo_CFOP not like ('69%')
		)
        -- Pivoteamento dos dados
        SELECT 
            ISNULL(Codigo_Centro_Custo,0) as Codigo_Centro_Custo,
            ISNULL(Descricao_Centro_Custo,'Sem Identificação') as Descricao_Centro_Custo,
            ISNULL(Codigo_Aplicacao_Compras,0) as Codigo_Aplicacao_Compras,
            ISNULL(Descricao_Aplicacao_Compras,' - ') as Descricao_Aplicacao_Compras,
        --	'' as Codigo_Aplicacao_Compras,
        --	'' as Descricao_Aplicacao_Compras,
            ISNULL(SUBSTRING(Descricao_Aplicacao_Compras, 2, 1),'E') AS sinal,
            ISNULL([1], 0) AS Dia_1,
            ISNULL([2], 0) AS Dia_2,
            ISNULL([3], 0) AS Dia_3,
            ISNULL([4], 0) AS Dia_4,
            ISNULL([5], 0) AS Dia_5,
            ISNULL([6], 0) AS Dia_6,
            ISNULL([7], 0) AS Dia_7,
            ISNULL([8], 0) AS Dia_8,
            ISNULL([9], 0) AS Dia_9,
            ISNULL([10], 0) AS Dia_10,
            ISNULL([11], 0) AS Dia_11,
            ISNULL([12], 0) AS Dia_12,
            ISNULL([13], 0) AS Dia_13,
            ISNULL([14], 0) AS Dia_14,
            ISNULL([15], 0) AS Dia_15,
            ISNULL([16], 0) AS Dia_16,
            ISNULL([17], 0) AS Dia_17,
            ISNULL([18], 0) AS Dia_18,
            ISNULL([19], 0) AS Dia_19,
            ISNULL([20], 0) AS Dia_20,
            ISNULL([21], 0) AS Dia_21,
            ISNULL([22], 0) AS Dia_22,
            ISNULL([23], 0) AS Dia_23,
            ISNULL([24], 0) AS Dia_24,
            ISNULL([25], 0) AS Dia_25,
            ISNULL([26], 0) AS Dia_26,
            ISNULL([27], 0) AS Dia_27,
            ISNULL([28], 0) AS Dia_28,
            ISNULL([29], 0) AS Dia_29,
            ISNULL([30], 0) AS Dia_30,
            ISNULL([31], 0) AS Dia_31,
            (ISNULL([1], 0) + 
             ISNULL([2], 0) + 
             ISNULL([3], 0) + 
             ISNULL([4], 0) + 
             ISNULL([5], 0) + 
             ISNULL([6], 0) + 
             ISNULL([7], 0) + 
             ISNULL([8], 0) + 
             ISNULL([9], 0) + 
             ISNULL([10], 0) +
             ISNULL([11], 0) + 
             ISNULL([12], 0) + 
             ISNULL([13], 0) + 
             ISNULL([14], 0) + 
             ISNULL([15], 0) + 
             ISNULL([16], 0) + 
             ISNULL([17], 0) + 
             ISNULL([18], 0) + 
             ISNULL([19], 0) + 
             ISNULL([20], 0) +
             ISNULL([21], 0) + 
             ISNULL([22], 0) + 
             ISNULL([23], 0) + 
             ISNULL([24], 0) + 
             ISNULL([25], 0) + 
             ISNULL([26], 0) + 
             ISNULL([27], 0) + 
             ISNULL([28], 0) + 
             ISNULL([29], 0) + 
             ISNULL([30], 0) +
             ISNULL([31], 0)  
             )  AS Total_Mes -- Soma de todos os dias
            FROM (
            SELECT 
                Codigo_Centro_Custo,
                Descricao_Centro_Custo,
                Codigo_Aplicacao_Compras,
                Descricao_Aplicacao_Compras,
                DAY(Data) AS Dia, -- Extrai o dia da data
                SUM(Valor) AS Valor
                FROM CombinedData
                GROUP BY 
                Codigo_Centro_Custo,
                Descricao_Centro_Custo,
                Codigo_Aplicacao_Compras,
                Descricao_Aplicacao_Compras,
                DAY(Data)
                ) AS SourceData
            PIVOT (
                SUM(Valor) FOR Dia IN ([1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19], [20], [21], [22], [23], [24], [25], [26], [27], [28], [29], [30], [31])
                ) AS PivotTable
                ORDER BY 
                Descricao_Centro_Custo DESC,
                Descricao_Aplicacao_Compras DESC,
                Codigo_Centro_Custo,
                Codigo_Aplicacao_Compras;
                            `;
       
    await corp.$disconnect();
    //        console.log(Fluxos);

    PedidosVendas = await corp.$queryRaw`
    WITH CombinedData AS (
	SELECT 
        CAST(cp.Pedido_Para AS DATE) AS Data, -- Apenas a parte da data
        '' AS Codigo_Centro_Custo,
        'Pedidos' AS Descricao_Centro_Custo,
        '' AS Codigo_Aplicacao_Compras,
        '' AS Descricao_Aplicacao_Compras,
        ip.Valor AS Valor,
        0 AS Valor_titulo,
        0 AS Saldo_titulo
    FROM dbo.Itens_Pedido AS ip
    LEFT JOIN dbo.[Capa Pedido] AS cp ON
        ip.[Apelido_empresa] = cp.[Apelido_empresa] AND 
        ip.[Apelido_estabelecimento] = cp.[Apelido_estabelecimento] AND 
        ip.[Numero Pedido] = cp.[Numero Pedido]
	LEFT JOIN 
          dbo.[Agente] AS ag ON 
          cp.Apelido_empresa = ag.Apelido_empresa AND
          cp.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
          cp.Agente_Faturamento = ag.[Codigo_agentes]
    WHERE 
    cp.Situacao_pedido <> 'CANCELADO' 
            AND MONTH(cp.Pedido_Para) = ${mes} --MONTH(GETDATE())
        AND YEAR(cp.Pedido_Para) = ${ano} --YEAR(GETDATE())
--        MONTH(cp.Pedido_Para) = MONTH(GETDATE()) AND -- Mês atual
 --       YEAR(cp.Pedido_Para) = YEAR(GETDATE()) AND   -- Ano atual
 --       ip.Apelido_empresa = 'IQL Tintas' AND
 --       ip.Apelido_estabelecimento = 'Matriz' AND
        AND ip.qtde_faturada = 0
		AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
        AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
		and ag.Nome nOT like 'Repintura Estoque'
        and ag.Nome NOT LIKE 'LINHA PISO ESTOQUE'
		)
-- Pivoteamento dos dados
SELECT 
    ISNULL(Codigo_Centro_Custo,0) as Codigo_Centro_Custo,
    ISNULL(Descricao_Centro_Custo,'Sem Identificação') as Descricao_Centro_Custo,
    ISNULL(Codigo_Aplicacao_Compras,0) as Codigo_Aplicacao_Compras,
    ISNULL(Descricao_Aplicacao_Compras,' - ') as Descricao_Aplicacao_Compras,
--	'' as Codigo_Aplicacao_Compras,
--	'' as Descricao_Aplicacao_Compras,
    ISNULL(SUBSTRING(Descricao_Aplicacao_Compras, 2, 1),'E') AS sinal,
    ISNULL([1], 0) AS Dia_1,
    ISNULL([2], 0) AS Dia_2,
    ISNULL([3], 0) AS Dia_3,
    ISNULL([4], 0) AS Dia_4,
    ISNULL([5], 0) AS Dia_5,
	ISNULL([6], 0) AS Dia_6,
    ISNULL([7], 0) AS Dia_7,
    ISNULL([8], 0) AS Dia_8,
    ISNULL([9], 0) AS Dia_9,
    ISNULL([10], 0) AS Dia_10,
	ISNULL([11], 0) AS Dia_11,
    ISNULL([12], 0) AS Dia_12,
    ISNULL([13], 0) AS Dia_13,
    ISNULL([14], 0) AS Dia_14,
    ISNULL([15], 0) AS Dia_15,
	ISNULL([16], 0) AS Dia_16,
    ISNULL([17], 0) AS Dia_17,
    ISNULL([18], 0) AS Dia_18,
    ISNULL([19], 0) AS Dia_19,
    ISNULL([20], 0) AS Dia_20,
	ISNULL([21], 0) AS Dia_21,
    ISNULL([22], 0) AS Dia_22,
    ISNULL([23], 0) AS Dia_23,
    ISNULL([24], 0) AS Dia_24,
    ISNULL([25], 0) AS Dia_25,
	ISNULL([26], 0) AS Dia_26,
	ISNULL([27], 0) AS Dia_27,
	ISNULL([28], 0) AS Dia_28,
	ISNULL([29], 0) AS Dia_29,
	ISNULL([30], 0) AS Dia_30,
    ISNULL([31], 0) AS Dia_31,
    (ISNULL([1], 0) + 
	 ISNULL([2], 0) + 
	 ISNULL([3], 0) + 
	 ISNULL([4], 0) + 
	 ISNULL([5], 0) + 
	 ISNULL([6], 0) + 
	 ISNULL([7], 0) + 
	 ISNULL([8], 0) + 
	 ISNULL([9], 0) + 
	 ISNULL([10], 0) +
	 ISNULL([11], 0) + 
	 ISNULL([12], 0) + 
	 ISNULL([13], 0) + 
	 ISNULL([14], 0) + 
	 ISNULL([15], 0) + 
	 ISNULL([16], 0) + 
	 ISNULL([17], 0) + 
	 ISNULL([18], 0) + 
	 ISNULL([19], 0) + 
	 ISNULL([20], 0) +
	 ISNULL([21], 0) + 
	 ISNULL([22], 0) + 
	 ISNULL([23], 0) + 
	 ISNULL([24], 0) + 
	 ISNULL([25], 0) + 
	 ISNULL([26], 0) + 
	 ISNULL([27], 0) + 
	 ISNULL([28], 0) + 
	 ISNULL([29], 0) + 
	 ISNULL([30], 0) +
	 ISNULL([31], 0)  
	 )  AS Total_Mes -- Soma de todos os dias
    FROM (
        SELECT 
        Codigo_Centro_Custo,
        Descricao_Centro_Custo,
        Codigo_Aplicacao_Compras,
        Descricao_Aplicacao_Compras,
        DAY(Data) AS Dia, -- Extrai o dia da data
        SUM(Valor) AS Valor
        FROM CombinedData
        GROUP BY 
        Codigo_Centro_Custo,
        Descricao_Centro_Custo,
        Codigo_Aplicacao_Compras,
        Descricao_Aplicacao_Compras,
        DAY(Data)
        ) AS SourceData
        PIVOT (
        SUM(Valor) FOR Dia IN ([1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19], [20], [21], [22], [23], [24], [25], [26], [27], [28], [29], [30], [31])
        ) AS PivotTable
        ORDER BY 
        Descricao_Centro_Custo DESC,
        Descricao_Aplicacao_Compras DESC,
        Codigo_Centro_Custo,
        Codigo_Aplicacao_Compras;
                                `;
               
    await corp.$disconnect();
        //        console.log(Fluxos);

    PedidosAtrasados = await corp.$queryRaw`
        WITH CombinedData AS (
        SELECT 
            CAST(cp.Pedido_Para AS DATE) AS Data, -- Apenas a parte da data
            '' AS Codigo_Centro_Custo,
            'Pedidos' AS Descricao_Centro_Custo,
            '' AS Codigo_Aplicacao_Compras,
            '' AS Descricao_Aplicacao_Compras,
            ip.Valor AS Valor,
            0 AS Valor_titulo,
            0 AS Saldo_titulo
        FROM dbo.Itens_Pedido AS ip
        LEFT JOIN dbo.[Capa Pedido] AS cp ON
            ip.[Apelido_empresa] = cp.[Apelido_empresa] AND 
            ip.[Apelido_estabelecimento] = cp.[Apelido_estabelecimento] AND 
            ip.[Numero Pedido] = cp.[Numero Pedido]
        LEFT JOIN 
              dbo.[Agente] AS ag ON 
              cp.Apelido_empresa = ag.Apelido_empresa AND
              cp.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
              cp.Agente_Faturamento = ag.[Codigo_agentes]
        WHERE 
        cp.Situacao_pedido <> 'CANCELADO' 
                AND MONTH(cp.Pedido_Para) = ${mes} --MONTH(GETDATE())
            AND YEAR(cp.Pedido_Para) = ${ano} --YEAR(GETDATE())
    --        MONTH(cp.Pedido_Para) = MONTH(GETDATE()) AND -- Mês atual
     --       YEAR(cp.Pedido_Para) = YEAR(GETDATE()) AND   -- Ano atual
     --       ip.Apelido_empresa = 'IQL Tintas' AND
     --       ip.Apelido_estabelecimento = 'Matriz' AND
            AND ip.qtde_faturada = 0
            AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
            AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
            and ag.Nome nOT like 'Repintura Estoque'
            and ag.Nome NOT LIKE 'LINHA PISO ESTOQUE'
            )
    -- Pivoteamento dos dados
    SELECT 
        ISNULL(Codigo_Centro_Custo,0) as Codigo_Centro_Custo,
        ISNULL(Descricao_Centro_Custo,'Sem Identificação') as Descricao_Centro_Custo,
        ISNULL(Codigo_Aplicacao_Compras,0) as Codigo_Aplicacao_Compras,
        ISNULL(Descricao_Aplicacao_Compras,' - ') as Descricao_Aplicacao_Compras,
    --	'' as Codigo_Aplicacao_Compras,
    --	'' as Descricao_Aplicacao_Compras,
        ISNULL(SUBSTRING(Descricao_Aplicacao_Compras, 2, 1),'E') AS sinal,
        ISNULL([1], 0) AS Dia_1,
        ISNULL([2], 0) AS Dia_2,
        ISNULL([3], 0) AS Dia_3,
        ISNULL([4], 0) AS Dia_4,
        ISNULL([5], 0) AS Dia_5,
        ISNULL([6], 0) AS Dia_6,
        ISNULL([7], 0) AS Dia_7,
        ISNULL([8], 0) AS Dia_8,
        ISNULL([9], 0) AS Dia_9,
        ISNULL([10], 0) AS Dia_10,
        ISNULL([11], 0) AS Dia_11,
        ISNULL([12], 0) AS Dia_12,
        ISNULL([13], 0) AS Dia_13,
        ISNULL([14], 0) AS Dia_14,
        ISNULL([15], 0) AS Dia_15,
        ISNULL([16], 0) AS Dia_16,
        ISNULL([17], 0) AS Dia_17,
        ISNULL([18], 0) AS Dia_18,
        ISNULL([19], 0) AS Dia_19,
        ISNULL([20], 0) AS Dia_20,
        ISNULL([21], 0) AS Dia_21,
        ISNULL([22], 0) AS Dia_22,
        ISNULL([23], 0) AS Dia_23,
        ISNULL([24], 0) AS Dia_24,
        ISNULL([25], 0) AS Dia_25,
        ISNULL([26], 0) AS Dia_26,
        ISNULL([27], 0) AS Dia_27,
        ISNULL([28], 0) AS Dia_28,
        ISNULL([29], 0) AS Dia_29,
        ISNULL([30], 0) AS Dia_30,
        ISNULL([31], 0) AS Dia_31,
        (ISNULL([1], 0) + 
         ISNULL([2], 0) + 
         ISNULL([3], 0) + 
         ISNULL([4], 0) + 
         ISNULL([5], 0) + 
         ISNULL([6], 0) + 
         ISNULL([7], 0) + 
         ISNULL([8], 0) + 
         ISNULL([9], 0) + 
         ISNULL([10], 0) +
         ISNULL([11], 0) + 
         ISNULL([12], 0) + 
         ISNULL([13], 0) + 
         ISNULL([14], 0) + 
         ISNULL([15], 0) + 
         ISNULL([16], 0) + 
         ISNULL([17], 0) + 
         ISNULL([18], 0) + 
         ISNULL([19], 0) + 
         ISNULL([20], 0) +
         ISNULL([21], 0) + 
         ISNULL([22], 0) + 
         ISNULL([23], 0) + 
         ISNULL([24], 0) + 
         ISNULL([25], 0) + 
         ISNULL([26], 0) + 
         ISNULL([27], 0) + 
         ISNULL([28], 0) + 
         ISNULL([29], 0) + 
         ISNULL([30], 0) +
         ISNULL([31], 0)  
         )  AS Total_Mes -- Soma de todos os dias
        FROM (
            SELECT 
            Codigo_Centro_Custo,
            Descricao_Centro_Custo,
            Codigo_Aplicacao_Compras,
            Descricao_Aplicacao_Compras,
            DAY(Data) AS Dia, -- Extrai o dia da data
            SUM(Valor) AS Valor
            FROM CombinedData
            GROUP BY 
            Codigo_Centro_Custo,
            Descricao_Centro_Custo,
            Codigo_Aplicacao_Compras,
            Descricao_Aplicacao_Compras,
            DAY(Data)
            ) AS SourceData
            PIVOT (
            SUM(Valor) FOR Dia IN ([1], [2], [3], [4], [5], [6], [7], [8], [9], [10], [11], [12], [13], [14], [15], [16], [17], [18], [19], [20], [21], [22], [23], [24], [25], [26], [27], [28], [29], [30], [31])
            ) AS PivotTable
            ORDER BY 
            Descricao_Centro_Custo DESC,
            Descricao_Aplicacao_Compras DESC,
            Codigo_Centro_Custo,
            Codigo_Aplicacao_Compras;
                                    `;
                       
    await corp.$disconnect();
            //        console.log(Fluxos);
 //   console.log(PedidosAtrasados)

        const response = {
            ok: true,
            Fluxos: Fluxos,
            Faturados: Faturados,
            PedidosVendas: PedidosVendas,
            PedidosAtrasados: PedidosAtrasados
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

exports.getConsultaBanco = async (req, res, next) => {

    try {

        const Bancos = await corp.$queryRaw`
	        select * from dbo.view_banco
        `;

        await corp.$disconnect();
        //    console.log(Fluxosdet);

        const response = {
            ok: true,
            Bancos: Bancos
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

exports.postConsultaProdutos = async (req, res, next) => {


    let produto = req.body.produto;
    let dtinicio = new Date(req.body.dtinicio).toISOString().split('T')[0];
    let dtfinal = new Date(req.body.dtfinal).toISOString().split('T')[0];

    console.log(dtinicio); // 2024-10-01
    console.log(dtfinal); // 2025-02-14

    try {

        const Produtos = await corp.$queryRaw`
	    SELECT 
        FORMAT(cr.Data_entrada, 'dd/MM/yyyy') AS Data_Entrada,
        cr.Doc_Numero,
        ir.Pedido_Compra,
        ag.nome AS Nome,
        ir.Codigo_produto,
        ia.Desc_compra,
        ir.Quantidade,
        ir.Unidade_entrada,
        ir.ValorU_m1,
        conv.Descricao
    FROM Item_recebimento AS ir
    LEFT JOIN Capa_recebimento AS cr 
        ON cr.Id_caparec = ir.Id_caparec 
        AND cr.Apelido_empresa = ir.Apelido_empresa
    LEFT JOIN agente AS ag 
        ON cr.Codigo_agentes = ag.Codigo_agentes 
        AND ir.Apelido_empresa = ag.Apelido_empresa
    LEFT JOIN Itens_almox as ia 
        ON ir.Apelido_empresa = ia.Apelido_empresa  
        AND ir.Codigo_produto = ia.Codigo_produto
    LEFT JOIN Conversao_compras as conv
        ON ir.Apelido_empresa = conv.Apelido_empresa
        AND ir.Cod_conversao = conv.Cod_conversao
    WHERE ir.Apelido_empresa = 'iql tintas'
        AND cr.Data_Emissao BETWEEN ${dtinicio} AND ${dtfinal}
        AND ir.Codigo_produto = ${produto}
        order by cr.Data_entrada desc

        `;

        await corp.$disconnect();
        //    console.log(Fluxosdet);


        const DetProduto = await corp.$queryRaw`
        select ia.Desc_compra,
        ia.Unidade_compra, 
        ia.Estoque_minimo ,
        ( 
            (select SUM(io.Quantidade_final) as consumo
            from [dbo].[Itens_op] as io
                        LEFT JOIN [dbo].[Capa_op] AS co ON 
                        (   co.Apelido_empresa = io.Apelido_empresa AND
                            co.Apelido_estabelecimento = io.Apelido_estabelecimento AND
                            co.Numero_op = io.Numero_op 
                        )
                        where 
                            io.Apelido_empresa         = 'IQL Tintas' 
                        and io.Apelido_estabelecimento = 'Matriz'
                        and co.Status_op               = 'Finalizada'
                        and io.Codigo_produto = ia.Codigo_produto
                        and co.Data_finalizacao        >= DATEADD(MONTH, -12, GETDATE())
                        group by 
                        io.Codigo_produto)/12  
                        ) as Media_12,
                        ( 
            (select SUM(io.Quantidade_final) as consumo
            from [dbo].[Itens_op] as io
                        LEFT JOIN [dbo].[Capa_op] AS co ON 
                        (   co.Apelido_empresa = io.Apelido_empresa AND
                            co.Apelido_estabelecimento = io.Apelido_estabelecimento AND
                            co.Numero_op = io.Numero_op 
                        )
                        where 
                            io.Apelido_empresa         = 'IQL Tintas' 
                        and io.Apelido_estabelecimento = 'Matriz'
                        and co.Status_op               = 'Finalizada'
                        and io.Codigo_produto = ia.Codigo_produto
                        and co.Data_finalizacao        >= DATEADD(MONTH, -6, GETDATE())
                        group by 
                        io.Codigo_produto)/6  
                        ) as Media_6,
                                        ( 
            (select SUM(io.Quantidade_final) as consumo
            from [dbo].[Itens_op] as io
                        LEFT JOIN [dbo].[Capa_op] AS co ON 
                        (   co.Apelido_empresa = io.Apelido_empresa AND
                            co.Apelido_estabelecimento = io.Apelido_estabelecimento AND
                            co.Numero_op = io.Numero_op 
                        )
                        where 
                            io.Apelido_empresa         = 'IQL Tintas' 
                        and io.Apelido_estabelecimento = 'Matriz'
                        and co.Status_op               = 'Finalizada'
                        and io.Codigo_produto = ia.Codigo_produto
                        and co.Data_finalizacao        >= DATEADD(MONTH, -3, GETDATE())
                        group by 
                        io.Codigo_produto)/3  
                        ) as Media_3,
                        (
                            (select SUM(io.Quantidade_final) as consumo
            from [dbo].[Itens_op] as io
                        LEFT JOIN [dbo].[Capa_op] AS co ON 
                        (   co.Apelido_empresa = io.Apelido_empresa AND
                            co.Apelido_estabelecimento = io.Apelido_estabelecimento AND
                            co.Numero_op = io.Numero_op 
                        )
                        where 
                            io.Apelido_empresa         = 'IQL Tintas' 
                        and io.Apelido_estabelecimento = 'Matriz'
                        and co.Status_op               = 'Finalizada'
                        and io.Codigo_produto = ia.Codigo_produto
                        and co.Data_finalizacao        >= DATEADD(MONTH, -1, GETDATE())
                        group by 
                        io.Codigo_produto)/1  
                        ) as Media_1
        
        from Itens_almox ia
        where 
        ia.Apelido_empresa = 'IQL Tintas'
        AND ia.Apelido_estabelecimento = 'Matriz'
        AND ia.Codigo_produto = ${produto}
                `;

        await corp.$disconnect();
        const response = {
            ok: true,
            Produtos: Produtos,
            DetProduto: DetProduto
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

exports.postConsultaComissao = async (req, res, next) => {

    //   let representante = req.body.representante;
    //   let dtinicial = req.body.dtinicial;
    //   let dtfinal = req.body.dtfinal;
    console.log(req.body)
    let representante = req.body.representante;
    // let representante = 'RODRIGO FREITAS SUTTON';

    let dtinicio = new Date(req.body.dtinicio).toISOString().split('T')[0];
    let dtfinal = new Date(req.body.dtfinal).toISOString().split('T')[0];

    console.log(dtinicio); // 2024-10-01
    console.log(dtfinal); // 2025-02-14

    try {

        let Comissaos = null;
        if (representante == '') {
            Comissaos = await corp.$queryRaw`
        SELECT 
        tt.Nro_NF AS NF,
        tt.Valor_Total_NF AS Valor_total_nf,
        tt.Valor_IPI as IPI_nota,
        tt.nrtitulo AS Titulo,
        mt.Data_contabilizacao AS data_Contabilizacao,
        tcr.Codigo,
        tcr.Descricao,
        tt.valor_titulo AS Valor_Titulo,
        tt.saldo_titulo AS Saldo_Titulo,
        
        tt.data_vencto AS data_vencimento,
        a.Nome AS Cliente,
        a2.Nome AS Representante,
        af.Descricao_comercial AS Tipo_Representante,
        -- Cálculo do Valor Sem IPI Proporcional
        CAST((tt.Valor_Titulo - (tt.Valor_IPI * (tt.Valor_titulo / NULLIF(tt.Valor_Total_NF, 0)))) AS DECIMAL(18, 2)) AS Titulo_Sem_IPI_Proporcional,
                   af.Comissao,
        -- Cálculo do Valor da Comissão sobre o Título Sem IPI Proporcional
        CAST(((tt.Valor_Titulo - (tt.Valor_IPI * (tt.Valor_titulo / NULLIF(tt.Valor_Total_NF, 0)))) * af.Comissao / 100) AS DECIMAL(18, 2)) AS Valor_Comissao
    FROM
        titulos tt
        LEFT JOIN
        [Agente] a ON 
            tt.Apelido_empresa = a.Apelido_empresa
        AND tt.Apelido_estabelecimento = a.Apelido_estabelecimento
        AND tt.Codigo_Agentes = a.Codigo_Agentes
        LEFT JOIN
        agente_funcao af ON 
            tt.Apelido_empresa = af.Apelido_empresa
        AND tt.Apelido_estabelecimento = af.Apelido_estabelecimento
        AND tt.Codigo_Agentes = af.Codigo_Agentes
        LEFT JOIN
        [Agente] a2 ON 
            af.Apelido_empresa = a2.Apelido_empresa
        AND af.Apelido_estabelecimento = a2.Apelido_estabelecimento
        AND af.Relacao_Agentes = a2.Codigo_Agentes
        LEFT JOIN 
        movto_titulo mt ON 
            mt.Apelido_empresa = tt.Apelido_empresa
        AND mt.Apelido_estabelecimento = tt.Apelido_estabelecimento    
        AND mt.nrtitulo = tt.nrtitulo
        LEFT JOIN Transacao_contas_receber AS tcr ON
            mt.Apelido_empresa = tcr.Apelido_empresa
        AND mt.Apelido_estabelecimento = tcr.Apelido_estabelecimento
        AND mt.Codigo = tcr.Codigo
        WHERE
            mt.Data_contabilizacao BETWEEN ${dtinicio} AND ${dtfinal}
        AND tt.Apelido_empresa = 'iql tintas'
        AND tt.pag_rec = 'r'
        AND a.Nome NOT LIKE '%idea%'
        AND a.Nome NOT LIKE '%acmc%'
        AND af.Descricao_comercial IN ('vendedor', 'supervisor', 'gerente comercial')
        AND mt.Codigo IN ('1001','1012')
            `;
        } else {
            Comissaos = await corp.$queryRaw`
    SELECT 
    tt.Nro_NF AS NF,
    tt.Valor_Total_NF AS Valor_total_nf,
               tt.Valor_IPI as IPI_nota,
               tt.nrtitulo AS Titulo,
    mt.Data_contabilizacao AS data_Contabilizacao,
    tcr.Codigo,
               tcr.Descricao,
    tt.valor_titulo AS Valor_Titulo,
    tt.saldo_titulo AS Saldo_Titulo,
    
   tt.data_vencto AS data_vencimento,
    a.Nome AS Cliente,
    a2.Nome AS Representante,
    af.Descricao_comercial AS Tipo_Representante,
    -- Cálculo do Valor Sem IPI Proporcional
    CAST((tt.Valor_Titulo - (tt.Valor_IPI * (tt.Valor_titulo / NULLIF(tt.Valor_Total_NF, 0)))) AS DECIMAL(18, 2)) AS Titulo_Sem_IPI_Proporcional,
               af.Comissao,
    -- Cálculo do Valor da Comissão sobre o Título Sem IPI Proporcional
    CAST(((tt.Valor_Titulo - (tt.Valor_IPI * (tt.Valor_titulo / NULLIF(tt.Valor_Total_NF, 0)))) * af.Comissao / 100) AS DECIMAL(18, 2)) AS Valor_Comissao
FROM
    titulos tt
    LEFT JOIN [Agente] a ON 
        tt.Apelido_empresa = a.Apelido_empresa
        AND tt.Apelido_estabelecimento = a.Apelido_estabelecimento
        AND tt.Codigo_Agentes = a.Codigo_Agentes
    LEFT JOIN agente_funcao af ON 
        tt.Apelido_empresa = af.Apelido_empresa
        AND tt.Apelido_estabelecimento = af.Apelido_estabelecimento
        AND tt.Codigo_Agentes = af.Codigo_Agentes
    LEFT JOIN [Agente] a2 ON 
        af.Apelido_empresa = a2.Apelido_empresa
        AND af.Apelido_estabelecimento = a2.Apelido_estabelecimento
        AND af.Relacao_Agentes = a2.Codigo_Agentes
    LEFT JOIN movto_titulo mt ON 
        mt.Apelido_empresa = tt.Apelido_empresa
        AND mt.Apelido_estabelecimento = tt.Apelido_estabelecimento    
        AND mt.nrtitulo = tt.nrtitulo
    LEFT JOIN Transacao_contas_receber AS tcr ON
        mt.Apelido_empresa = tcr.Apelido_empresa
        AND mt.Apelido_estabelecimento = tcr.Apelido_estabelecimento
        AND mt.Codigo = tcr.Codigo
    WHERE
        mt.Data_contabilizacao BETWEEN ${dtinicio} AND ${dtfinal}
    AND tt.Apelido_empresa = 'iql tintas'
    AND tt.pag_rec = 'r'
    AND a.Nome NOT LIKE '%idea%'
    AND a.Nome NOT LIKE '%acmc%'
    AND af.Descricao_comercial IN ('vendedor', 'supervisor', 'gerente comercial')
    AND mt.Codigo IN ('1001','1012')
    AND a2.Nome like ${representante}
    `;
        }
        await corp.$disconnect();
        //    console.log(Fluxosdet);

        const response = {
            ok: true,
            Comissaos: Comissaos
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
