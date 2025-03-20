const { PrismaClient: PrismaClientCorp } = require('./prisma/client/corp');
const { PrismaClient: PrismaClientIql } = require('./prisma/client/iql');

const corp = new PrismaClientCorp();
const iql = new PrismaClientIql();

async function main() {
    console.log("entrei")

    await verificaProdutos();

}
main().catch(console.error);

async function verificaProdutos() {

    try {

        var chavearquivo = gerarPassword();
        //   console.log(JSON.stringify(chavearquivo));

        var porcentagem = 0;

        let dataAtual = new Date();

        // Pega o dia da semana (0 = Domingo, 1 = Segunda-feira, ..., 6 = Sábado)
        const diaDaSemana = dataAtual.getDay();

        // Pega o dia do mês (1 a 31)
        const diaDoMes = dataAtual.getDate();

        let mediaconsumo = 0;
        let saldoatual = 0;
        let totcompras = 0;
        let totconsumo = 0;
        let dataultimacompra = null;
        let datacoleta = null;
        let datacoleta15 = null;
        let saldo = 0;
        let datainventario = '2024-10-01';
        let dtultcompra = null;
        let vlrultcompra = 0 ;

    //    const dtfinal = new Date();

        // Adicionar 14 dias
    //    dtfinal.setDate(dtfinal.getDate() + 14);
        const dtnecessidade = new Date('2024-11-30');
        //let dtfinal = new Date('2024-11-30');

        let dtfinal = '2024-11-30'
        console.log(dtfinal);

        const produtos = await iql.$queryRaw`
select cod_produto as Codigo_produto, sum(quantidade) from hospital.inventario where data <= ${dtfinal}
group by 
cod_produto 
    `;        
                        

        await iql.$disconnect();
//        console.log(produtos.length)
 //       const dtnecessidade = new Date();

 //       // Adicionar 14 dias
 //       dtnecessidade.setDate(dtnecessidade.getDate() + 14);

        for (i = 0; i <= produtos.length - 1; i++) {
            let inventario = await verificaInventario(produtos[i].Codigo_produto, dtfinal);
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

            let ultimacompra = await verificaUltimacompra(produtos[i].Codigo_produto, dtfinal);
            let opfinalizada = await verificaFinalizado(produtos[i].Codigo_produto, datainventario, dtfinal);
            let opemprocesso = await verificaEmprocesso(produtos[i].Codigo_produto, datainventario, dtfinal);
            let opcadastrada15 = await verificaCadastrada15(produtos[i].Codigo_produto, dtfinal);
            let ultimacoleta15 = await verificaColeta15(produtos[i].Codigo_produto, dtfinal);
            let opcompra15 = await verificaCompra15(produtos[i].Codigo_produto, dtfinal);
            let opcompraparc = await verificaCompraParcial(produtos[i].Codigo_produto, datainventario, dtfinal);
            let opcompraEntregue = await verificaCompraEntregue(produtos[i].Codigo_produto, datainventario, dtfinal);
            let consumo = await verificaConsumoMedio(produtos[i].Codigo_produto);
            let valorcompra = await verificaValorCompra();
            let valorvenda = await verificaValorVenda(produtos[i].Codigo_produto, dtfinal);
            mediaconsumo = (consumo / 12);

            console.log('Valor venda = ' + valorvenda); 

            if (ultimacompra.length == null) {
                let custo = await verificaCustoSistema(produtos[i].Codigo_produto, dtfinal)
                vlrultcompra = custo;
                dtultcompra = null;
            } else {
                vlrultcompra = ultimacompra.valorultimacompra;
                dtultcompra = ultimacompra.dataultimacompra;
            }

            const gravaanalise = await iql.necessidade.create({
                data: {
                    dtrelatorio: dataAtual,
                    codigo_produto: produtos[i].Codigo_produto,
                    desc_tecnica: produtos[i].desc_tecnica,
                    vlrultcompra: vlrultcompra,
                    dtultcompra: dtultcompra,
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
                    processo: 'A'
                },
            });
            await iql.$disconnect()
        }


        //       }

        //    console.log('dataAtual' + dataAtual)
        //    dataAtual = '2024-11-18 12:26:56';
        //       let dataAtual1 = '2024-11-13 12:13:28';

        //        console.log('dataAtual' + dataAtual)

        const relcompras = await iql.$queryRaw`
        SELECT  
        co.*
        FROM hospital.necessidade co
        where 
        co.dtrelatorio = ${dataAtual} and
        co.saldonecessidade < 0
        order by co.codigo_produto    
        `;

        await iql.$disconnect()


        //       console.log('relcompras.length ' + relcompras.length);


//        for (z = 0; z <= relcompras.length - 1; z++) {
//            await geraemail(relcompras[z])

//        }


 //       await geraemailResumo(relcompras)


    } catch (error) {
        console.log(error);
        await corp.$disconnect()
        await iql.$disconnect
        return res.status(500).send({
            ok: false,
            error: error
        });
    }
};

async function verificaFinalizado(Codigo_produto, datainventario, dtfinal) {

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
    and co.Data_finalizacao <= ${dtfinal}
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

async function verificaEmprocesso(Codigo_produto, datainventario, dtfinal) {

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
    and co3.Data_inicio <= ${dtfinal}
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

async function verificaCompraParcial(Codigo_produto, datainventario,dtfinal) {

    opcompraparc = 0;

    const compra = await corp.$queryRaw`
     select 
    sum([rq].quantidade_recebida)  as opcompraparc
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
    [cr].[Data_entrada] <= ${dtfinal} and
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

async function verificaCompraEntregue(Codigo_produto, datainventario, dtfinal) {

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
        [cr].[Data_entrada] <= ${dtfinal} and
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

async function verificaInventario(Codigo_produto, dtfinal) {

    saldo = 0;
    datainventario = null;

    const inventario = await iql.$queryRaw`
    SELECT hi.cod_produto, SUM(hi.quantidade) as saldo , data as datainventario FROM hospital.inventario as hi
    where cod_produto = ${Codigo_produto}  and data <= ${dtfinal}
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

async function verificaCustoSistema(Codigo_produto, dtfinal) {
    valorcusto = 0;

    const custo = await corp.$queryRaw`
                SELECT TOP 1 
                    cv.[VALOR CUSTO] as valorcusto
                FROM 
                    CUSTO_VALOR AS cv WITH(NOLOCK)
                WHERE 
                    cv.APELIDO_EMPRESA = 'IQL Tintas'  AND 
                    cv.APELIDO_ESTABELECIMENTO = 'Matriz' AND
                    cv.CODIGO_PRODUTO = ${Codigo_produto} AND
                    cv.DATA <= ${dtfinal}
                ORDER BY 
                    cv.DATA DESC
   `;

    await corp.$disconnect();

    if (custo.length != 0) {
        console.log("Valor pedido venda = " + custo[0].valorcusto);
        valorcusto = custo[0].valorcusto;

    }

    return (valorcusto);

}

function gerarPassword() {
    return Math.random().toString(36).slice(-10);
}


async function geraemail(relcompra) {
    fornecedors = [];

    contaspagar = [];
    this.html = '';
    console.log('relcompras = ' + relcompra.idnecessidade)

    dtnecessidade = new Date(relcompra.dtnecessidade);
    saldonecessidade = Math.abs(relcompra.saldonecessidade);
    mediaconsumo = relcompra.mediaconsumo;
    vlrpedido = relcompra.vlrpedido;
    idnecessidade = relcompra.idnecessidade;

    var data = new Date();
    data = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    dtnecessidade = dtnecessidade.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    saldonecessidade = parseFloat(saldonecessidade).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

    vlrpedido = parseFloat(vlrpedido).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
    mediaconsumo = parseFloat(mediaconsumo).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
    idnecessidade = parseFloat(idnecessidade).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 });


    this.html = this.html + `
    <h2 style="color: #0000cd;">Pedido de Compras - ID:  ${idnecessidade}</h2>
    <p>&nbsp;</p>
    <table style="border-collapse: collapse;" border="1">
    <tbody>
    <tr>
    <td style="text-align: center"><strong>Produto</strong></td>
    <td style="text-align: center;font-family: Arial, sans-serif;"><strong>Descrição</strong></td>
    <td style="text-align: center"><strong>Comprar</strong></td>
    <td style="text-align: center"><strong>Data Geração</strong></td>  
    <td style="text-align: center"><strong>Cobre Necessidade Até</strong></td>  
    <td style="text-align: center"><strong>Valor PV ate esta data</strong></td>  
    </tr>
    <tr>
    <td style="width:150px; text-align: center"> ` + relcompra.codigo_produto + ` </td>  
    <td style="width:400px; text-align: center"> ` + relcompra.desc_tecnica + ` </td>  
    <td style="width:400px; text-align: center; color: #7C0600;font-weight: bold"> ` + saldonecessidade + ` </td> 
    <td style="width:400px; text-align: center"> ` + data + ` </td> 
    <td style="width:400px; text-align: center"> ` + dtnecessidade + ` </td> 
    <td style="width:400px; text-align: center"> ` + vlrpedido + ` </td> 
    </tr>
    `;

    this.html = this.html + "</tbody></table><p>&nbsp;</p>";
    this.html = this.html + `
    <table style="border-collapse: collapse;" border="1">
    <tbody>
    <tr>
    <td style="text-align: center"><strong>Consumo Médio : ` + mediaconsumo + `</strong></td>
    </tr></tbody></table><p>&nbsp;</p>
      `


    fornecedors = await corp.$queryRaw`
      WITH UltimaCompra AS (
      SELECT 
          rq.[Codigo material] AS codigo_produto,
          ag.[Codigo_agentes] as codigo,
          ag.Nome AS nome,
          ag.Telefone AS telefone,
          rq.quantidade_recebida,
          rq.[Quantidade requisitada] AS quantidade_requisitada,
          rq.[valor unitario final] as valorunitario, rq.[Data compra] as datacompra,
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
      WHERE 
          rq.[Codigo material] = ${relcompra.codigo_produto}
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

    if (fornecedors.length > 0) {

        this.html = this.html + `
    <table style="border-collapse: collapse;" border="1">
    <tbody>
    <tr>
    <td style="text-align: center"><strong>Produto</strong></td>
    <td style="text-align: center"><strong>Fornecedor</strong></td>
    <td style="text-align: center"><strong>Nome</strong></td>
    <td style="text-align: center"><strong>Telefone</strong></td> 
    <td style="text-align: center"><strong>Quantidade Recebida</strong></td>
    <td style="text-align: center"><strong>Data Compra</strong></td> 
    <td style="text-align: center"><strong>Valor Unitário</strong></td> 
    <td style="text-align: center"><strong>Titulos</strong></td> 
    </tr>
    `

        console.log(fornecedors.length);
        for (w = 0; w <= fornecedors.length - 1; w++) {
            datacompra = fornecedors[w].datacompra.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
            quantidade_recebida = parseFloat(fornecedors[w].quantidade_recebida).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

            quantidade_requisitada = parseFloat(fornecedors[w].quantidade_requisitada).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
            valorunitario = parseFloat(fornecedors[w].valorunitario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 4 });

            this.html = this.html + "<tr> " +
                ' <td style="width:150px; text-align: center"> ' + fornecedors[w].codigo_produto + ' </td> ' +
                ' <td style="width:150px; text-align: center"> ' + fornecedors[w].codigo + ' </td> ' +
                ' <td style="width:180px; text-align: center"> ' + fornecedors[w].nome + ' </td> ' +
                ' <td style="width:180px; text-align: center"> ' + fornecedors[w].telefone + ' </td> ' +
                ' <td style="width:150px; text-align: right"> ' + quantidade_recebida + ' </td> ' +
                ' <td style="width:150px; text-align: center"> ' + datacompra + ' </td> ' +
                ' <td style="width:180px; text-align: center"> ' + valorunitario + ' </td> ' +
                ' <td style="width:200px; text-align: center">  </td> ' +
                " </tr>"


            contaspagar = await corp.$queryRaw`
            SELECT  
              tt.nrtitulo, 
               tt.Data_Emissao, 
               tt.data_vencto, 
                tt.data_pagto, 
               tt.Valor_titulo, 
                tt.Saldo_titulo,
                (tt.Valor_titulo - tt.Saldo_titulo) AS Valor_Pagto
                FROM [corp].[dbo].[Titulos] as tt
                where 
                tt.Apelido_empresa = 'IQL Tintas' and
               tt.Apelido_estabelecimento = 'Matriz' and
                tt.pag_rec = 'P' and
                tt.Codigo_agentes = ${fornecedors[w].codigo} AND
                tt.data_vencto >= '2024-10-01' and
                (tt.data_vencto > GETDATE() OR tt.Saldo_titulo <> 0)
            order by tt.Data_Emissao desc
             `;


            await corp.$disconnect();
            this.html = this.html + `
        <table style="border-collapse: collapse;" border="1">
        <tbody>
        <tr>
        <td style="text-align: center"><strong>Titulo</strong></td>
        <td style="text-align: center"><strong>Data Emissão</strong></td>
        <td style="text-align: center"><strong>Data Vencimento</strong></td>
        <td style="text-align: center"><strong>Data Pagto</strong></td> 
        <td style="text-align: center"><strong>Valor Titulo Recebida</strong></td>
        <td style="text-align: center"><strong>Valor Pago</strong></td>
        </tr>`

            for (y = 0; y <= contaspagar.length - 1; y++) {
                Data_Emissao = contaspagar[y].Data_Emissao.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                data_vencto = contaspagar[y].data_vencto.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                data_pagto = contaspagar[y].data_pagto.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                Valor_titulo = parseFloat(contaspagar[y].Valor_titulo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
                Valor_Pagto = parseFloat(contaspagar[y].Valor_Pagto).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });

                this.html = this.html + "<tr> " +
                    ' <td style="width:180px; text-align: center"> ' + contaspagar[y].nrtitulo + ' </td> ' +
                    ' <td style="width:150px; text-align: center"> ' + Data_Emissao + ' </td> ' +
                    ' <td style="width:150px; text-align: center"> ' + data_vencto + ' </td> ' +
                    ' <td style="width:150px; text-align: center"> ' + data_pagto + ' </td> ' +
                    ' <td style="width:150px; text-align: right"> ' + Valor_titulo + ' </td> ' +
                    ' <td style="width:150px; text-align: right"> ' + Valor_Pagto + ' </td> ' +
                    " </tr>"
            }
            this.html = this.html + "</tbody></table><p>&nbsp;</p>";
        }
    }

    const createSendmail = await iql.sendmail.create({
        data: {
            //destinatario: "luis.espoladore@adcon.srv.br;samuel.corazza@adcon.srv.br",
            destinatario: "luis.espoladore@adcon.srv.br;alexandre.gouveia@iql.com.br;ivan.silva@iql.com.br;compras.iql@iql.com.br",
            html: Buffer.from(this.html),
            subject: "Pendencia de Compras - " + data,
            idsolicitante: 2,
            idusuarioaprovacao: 2,
            idusuariocotacao: 2,
            idusuarioaprovacaodir: 2,
            idusuariocompra: 2,
            idusuarioentrega: 2,
            idcompra: 1,
            idusercreateAt: 2,
        },
    });
    await iql.$disconnect()


}

async function geraemailResumo(relcompras) {
    fornecedors = [];

    contaspagar = [];
    this.html = '';


    this.html = this.html + `
    <h2 style="color: #0000cd;">Resumo Pedidos de Compras: </h2>
    <p>&nbsp;</p>
    <table style="border-collapse: collapse;" border="1">
    <tbody>
    <tr>
    <td style="text-align: center"><strong>ID</strong></td>
    <td style="text-align: center"><strong>Produto</strong></td>
    <td style="text-align: center;font-family: Arial, sans-serif;"><strong>Descrição</strong></td>
    <td style="text-align: center"><strong>Comprar</strong></td>
    <td style="text-align: center"><strong>Data Geração</strong></td>  
    <td style="text-align: center"><strong>Cobre Necessidade Até</strong></td>  
    <td style="text-align: center"><strong>Media Consumo Mensal</strong></td>  
    <td style="text-align: center"><strong>Saldo Atual</strong></td> 
    <td style="text-align: center"><strong>Valor PV ate esta data</strong></td>  
    </tr>
    `;

    for (z = 0; z <= relcompras.length - 1; z++) {

        dtnecessidade = new Date(relcompras[z].dtnecessidade);
        saldonecessidade = Math.abs(relcompras[z].saldonecessidade);
        mediaconsumo = relcompras[z].mediaconsumo;
        saldoatual = relcompras[z].saldoatual;
        mediaconsumo = relcompras[z].mediaconsumo;
        vlrpedido = relcompras[z].vlrpedido;
        idnecessidade = relcompras[z].idnecessidade;

        var data = new Date();
        data = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        dtnecessidade = dtnecessidade.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        saldonecessidade = parseFloat(saldonecessidade).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
        saldoatual = parseFloat(saldoatual).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

        vlrpedido = parseFloat(vlrpedido).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
        mediaconsumo = parseFloat(mediaconsumo).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
        idnecessidade = parseFloat(idnecessidade).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 });


        this.html = this.html + `
    <tr>
        <td style="width:150px; text-align: center"> ` + idnecessidade + ` </td> 
    <td style="width:150px; text-align: center"> ` + relcompras[z].codigo_produto + ` </td>  
    <td style="width:400px; text-align: center"> ` + relcompras[z].desc_tecnica + ` </td>  
    <td style="width:400px; text-align: center; color: #7C0600;font-weight: bold"> ` + saldonecessidade + ` </td> 
    <td style="width:400px; text-align: center"> ` + data + ` </td> 

    <td style="width:400px; text-align: center"> ` + dtnecessidade + ` </td> 
     <td style="width:400px; text-align: center"> ` + mediaconsumo + ` </td> 
         <td style="width:400px; text-align: center"> ` + saldoatual + ` </td>    
    <td style="width:400px; text-align: center"> ` + vlrpedido + ` </td> 
    </tr>
    `;

    }
    this.html = this.html + "</tbody></table><p>&nbsp;</p>";



    const createSendmail = await iql.sendmail.create({
        data: {
            //destinatario: "luis.espoladore@adcon.srv.br",
            destinatario: "luis.espoladore@adcon.srv.br;samuel.corazza@adcon.srv.br;ivan.silva@iql.com.br;compras.iql@iql.com.br",
            //destinatario: "luis.espoladore@adcon.srv.br;viviane.santos@iql.com.br;andreia.oliveira@iql.com.br;alexandre.gouveia@iql.com.br;ivan.silva@iql.com.br;evellyn.ribeiro@iql.com.br",
            html: Buffer.from(this.html),
            subject: "Resumo de Pendencia de Compras  - " + data,
            idsolicitante: 2,
            idusuarioaprovacao: 2,
            idusuariocotacao: 2,
            idusuarioaprovacaodir: 2,
            idusuariocompra: 2,
            idusuarioentrega: 2,
            idcompra: 1,
            idusercreateAt: 2,
        },
    });
    await iql.$disconnect()


}






function gerarPassword() {
    return Math.random().toString(36).slice(-10);
}

