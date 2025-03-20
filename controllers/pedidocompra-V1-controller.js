const { PrismaClient: PrismaClientCorp } = require('../prisma/client/corp');

const { PrismaClient: PrismaClientIql } = require('../prisma/client/iql');


const corp = new PrismaClientCorp();
const iql = new PrismaClientIql();

exports.getPedidoCompraDetail = async (req, res, next) => {
    let where = '';

    console.log(JSON.stringify(req.body));

    let dtinicio = req.body.dtinicio.slice(0, 10);
    let dtfinal = req.body.dtfinal.slice(0, 10);


    if (req.params.sortOrder == 1) {
        sortOrder = "desc";
    } else {
        sortOrder = "asc";
    }

    orderBy = { [req.params.sortField]: sortOrder }

    if (req.body.status == 'Todos') {
        if (req.params.globalFilter != 'undefined') {
            where = {
                AND: [
                    {
                        OR: [
                            {
                                Pedido_compra_numero: { contains: req.params.globalFilter },

                            },
                            {
                                Usuario_pc: { contains: req.params.globalFilter }
                            }
                        ]
                    },
                    {
                        Data_pedido: { gt: new Date(dtinicio), lte: new Date(dtfinal) }
                    }

                ]
            };
        } else {
            where = { Data_pedido: { gt: new Date(dtinicio), lte: new Date(dtfinal) } };
        }
    } else {
        if (req.params.globalFilter != 'undefined') {
            where = {
                AND: [
                    {
                        OR: [
                            {
                                Pedido_compra_numero: { contains: req.params.globalFilter },

                            },
                            {
                                Usuario_pc: { contains: req.params.globalFilter }
                            }
                        ]
                    },
                    {
                        Data_pedido: { gt: new Date(dtinicio), lte: new Date(dtfinal) }
                    },
                    {
                        status_pedido: req.body.status,
                    }

                ]
            };
        } else {
            where = {
                AND: [

                    {
                        Data_pedido: { gt: new Date(dtinicio), lte: new Date(dtfinal) }
                    },
                    {
                        status_pedido: req.body.status,
                    }
                ]
            }

        };
    }




    console.log(where);



    try {

        totalRecords = await corp.Pedido_compra.count({
            where
        })

        const somastatuscompras = await corp.Pedido_compra.groupBy({
            where,
            by: ['status_pedido'],
            _sum: {
                Valor_total: true,
            }
        })

        const somacompras = await corp.Pedido_compra.aggregate({
            where,

            _sum: {
                Valor_total: true,
            }

        })

        const pedidocompras = await corp.Pedido_compra.findMany({
            skip: Number(req.params.skip),
            take: Number(req.params.take),
            where
            ,
            orderBy
        })
        await corp.$disconnect()

        console.log(JSON.stringify(somacompras._sum.Valor_total))

        const response = {
            ok: true,
            length: pedidocompras.length,
            totalRecords: totalRecords,
            somastatuscompras: somastatuscompras,
            somacompras: somacompras._sum.Valor_total,
            pedidocompras: pedidocompras
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

exports.getComprasPendentes = async (req, res, next) => {


    console.log(req.params);
    try {


        const comprapendentes = await corp.$queryRaw`
SELECT 
[j1].[Pedido compra numero] as Pedido_compra_numero,
[j1].[Codigo material] as Codigo_material,
[j1].[Quantidade requisitada] as Quantidade_requisitada,
[j1].[Data necessidade] as Data_necessidade,
[j1].[Data requisicao] as Data_requisicao,
[j1].[Data compra] as Data_compra,
[j1].[Usuario requisicao] as Usuario_requisicao,
[j1].Origem_req,
[j1].valor_total,
[j1].[valor unitario final] as valor_unitario_final,
[j2].Unidade_compra,
[j2].[Desc_compra],
[j2].Marca
  FROM 
  [corp].[dbo].[requisicao] as [j1]
      LEFT JOIN 
        [corp].[dbo].[Itens_almox] AS [j2] 
        ON ([j2].[Apelido_empresa] = [j1].[Apelido_empresa] AND 
            [j2].[Apelido_estabelecimento] = [j1].[Apelido_estabelecimento] AND 
            [j2].[Codigo_produto] = [j1].[Codigo material])
  where [j1].[Status requisicao]='Comprado'
  and [j1].[Data compra] > '2024-09-01'  
      `

        await corp.$disconnect()

    
        const response = {
            ok: true,
//            length: produtoLotes.length,
              comprapendentes: comprapendentes,
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

exports.getHistMaterial = async (req, res, next) => {


    console.log(req.body);
    try {


        const alinhar = (texto, largura) => texto.toString().padEnd(largura, " ");
        
        const dtfinal = new Date();

        // Adicionar 14 dias
        dtfinal.setDate(dtfinal.getDate() + 14);

        let histMaterial =`Produto - ${dtfinal} \n`;

        let dadosproduto = await verificaDadosProduto(req.body.produto)

        Desc_tecnica   = dadosproduto.Desc_tecnica;
        Unidade_compra = dadosproduto.Unidade_compra;
        Lote_compra    = dadosproduto.Lote_compra;
        Estoque_minimo = dadosproduto.Estoque_minimo;

        Lote_compra    = parseFloat(Lote_compra).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
        Estoque_minimo = parseFloat(Estoque_minimo).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

        histMaterial   = histMaterial +  `Descrição  = ${Desc_tecnica} \t- Unidade Compra = ${Unidade_compra}\t- Lote Compra = ${Lote_compra}\t - Estoque de Minimo = ${Estoque_minimo}\n`
  
        histMaterial   = histMaterial +  `\nConsumo\n`;
        let mediaconsumo = 0;

        let consumo = await verificaConsumoMedio(req.body.produto);
        if (consumo == null || consumo.isUndefined) {
            mediaconsumo = 0;
            consumo = 0;
        } else {
            mediaconsumo = parseFloat(consumo) / 12;

            consumo = parseFloat(consumo).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
            mediaconsumo = parseFloat(mediaconsumo).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
    
        }

        console.log(consumo + ' 12 ' +  mediaconsumo)

        histMaterial = histMaterial +  `Consumo 12 meses  = ${consumo} \t-  Media de Consumo = ${mediaconsumo}\n`

        histMaterial = histMaterial +  `\nDados de Inventário\n`;

        let inventario = await verificaInventario(req.body.produto);
        console.log(inventario.length);
        if (inventario.length == 0 || inventario.isUndefined) {
            saldo = 0;
            datainventario = '2024-10-01';
        } else {
            saldo = inventario.saldo;
            datainventario = inventario.datainventario;
        }
        saldo = parseFloat(saldo).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

        datainventario = datainventario.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        histMaterial = histMaterial +  `Saldo de Inventário = ${saldo} - Data do Inventário = ${datainventario}\n`

        histMaterial = histMaterial +  `\nDados da Ultima compra\n`;  
 
        let ultimacompra = await verificaUltimacompra(req.body.produto);

        let nome  = ultimacompra.nome;
        let telefone = ultimacompra.telefone;
        let vlrultcompra= ultimacompra.valorultimacompra;
        let dtultcompra = ultimacompra.dataultimacompra;
        let quantidaderecebida = ultimacompra.quantidaderecebida;

        vlrultcompra = parseFloat(vlrultcompra).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
        quantidaderecebida = parseFloat(quantidaderecebida).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
        dtultcompra = dtultcompra.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        histMaterial = histMaterial + `Fornecedor = ${nome} - Telefone = ${telefone} - Valor Compra = ${vlrultcompra} - Data da Compra = ${dtultcompra} - Quantidade Recebida = ${quantidaderecebida}\n`
    
        let Numero_op = '';
        let Codigo_produto= '';
        let Data_criacao = null;
        let Data_finalizacao = null; 
        let Quantidade_final = 0;
        let Quantidade_total_finalizada = 0;
        let Pedido_Para = null;
        let Nome = '';
        let Numero_Pedido = '';


        histMaterial = histMaterial +  `\nOp´s em Processo após inventário\n`;  
        let opemprocesso = await verificaEmprocesso(req.body.produto, inventario.datainventario);

        Numero_op = '';
        Codigo_produto= '';
        Data_criacao = null;
        Data_finalizacao = null; 
        Quantidade_final = 0;
        Quantidade_total_finalizada = 0;
        Pedido_Para = null;
        Nome = '';
        Numero_Pedido = '';

        histMaterial = histMaterial +  `OP  \t Produto  \tDt Criação  \tData Finalização  \tQt Prevista \tPedido   \tPedido Para \tCliente \n`

        
        for (i = 0; i <= opemprocesso.length - 1; i++) {
            Numero_op = opemprocesso[i].Numero_op;
            Codigo_produto= opemprocesso[i].Codigo_produto;
            Data_criacao = opemprocesso[i].Data_criacao;
            Data_finalizacao = opemprocesso[i].Termino_previsto; 
            Quantidade_final = opemprocesso[i].Quantidade_inicial;  
            if (opemprocesso[i].Nome == null) {
                Nome ='';
                Numero_Pedido = '';
                Pedido_Para = '';
            } else {
                Nome = opemprocesso[i].Nome;
                Numero_Pedido = opemprocesso[i].Numero_Pedido;
                Pedido_Para = opemprocesso[i].Pedido_Para;
                Pedido_Para = Pedido_Para.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
            } 
            Quantidade_total_finalizada = Quantidade_total_finalizada + parseFloat(Quantidade_final);; 

            Numero_op = parseFloat(Numero_op).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 });
    
            Quantidade_final = parseFloat(Quantidade_final).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
            Data_criacao = Data_criacao.toLocaleDateString('pt-BR', { timeZone: 'UTC' }); 
            Data_finalizacao = Data_finalizacao.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
            histMaterial = histMaterial +  `${Numero_op} \t${Codigo_produto} \t ${Data_criacao} \t${Data_finalizacao} \t${Quantidade_final}\t${Numero_Pedido}  \t  ${Pedido_Para} \t ${Nome}\n`

            console.log(opemprocesso[i].Quantidade_final + '- ' +  Quantidade_total_finalizada);
        }
        Quantidade_total_finalizada = parseFloat(Quantidade_total_finalizada).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

        histMaterial = histMaterial +  `Total Usado nas OP´s em processo = ${Quantidade_total_finalizada} \n`

        histMaterial = histMaterial +  `\nOp´s Cadastradas após inventário\n`;  

        let opcadastrada15 = await verificaCadastrada15(req.body.produto, inventario.datainventario);
        Numero_op = '';
        Codigo_produto= '';
        Data_criacao = null;
        Data_finalizacao = null; 
        Quantidade_final = 0;
        Quantidade_total_finalizada = 0;
        Pedido_Para = null;
        Nome = '';
        Numero_Pedido = '';

        histMaterial = histMaterial +  `OP  \t Produto  \tDt Criação  \tData Prevista  \tQt Prevista \tPedido   \tPedido Para \tCliente \n`


        for (i = 0; i <= opcadastrada15.length - 1; i++) {
            Numero_op = opcadastrada15[i].Numero_op;
            Codigo_produto= opcadastrada15[i].Codigo_produto;
            Data_criacao = opcadastrada15[i].Data_criacao;
            Data_finalizacao = opcadastrada15[i].Termino_previsto; 
            Quantidade_final = opcadastrada15[i].Quantidade_inicial;  
            if (opcadastrada15[i].Nome == null) {
                Nome ='';
                Numero_Pedido = '';
                Pedido_Para = '';
            } else {
                Nome = opcadastrada15[i].Nome;
                Numero_Pedido = opcadastrada15[i].Numero_Pedido;
                Pedido_Para = opcadastrada15[i].Pedido_Para;
                Pedido_Para = Pedido_Para.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
            } 
            Quantidade_total_finalizada = Quantidade_total_finalizada + parseFloat(Quantidade_final);; 

            Numero_op = parseFloat(Numero_op).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 });
    
            Quantidade_final = parseFloat(Quantidade_final).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
            Data_criacao = Data_criacao.toLocaleDateString('pt-BR', { timeZone: 'UTC' }); 
            Data_finalizacao = Data_finalizacao.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
            histMaterial = histMaterial +  `${Numero_op} \t${Codigo_produto} \t${Data_criacao} \t${Data_finalizacao} \t${Quantidade_final}\t${Numero_Pedido}  \t  ${Pedido_Para} \t ${Nome}\n`

            console.log(opcadastrada15[i].Quantidade_final + '- ' +  Quantidade_total_finalizada);
        }
        Quantidade_total_finalizada = parseFloat(Quantidade_total_finalizada).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

        histMaterial = histMaterial +  `Total Usado nas OP´s Cadastradas = ${Quantidade_total_finalizada} \n`


        histMaterial = histMaterial +  `\nColetas após inventário\n`;  

        let opcoleta = await verificaColeta15(req.body.produto, dtfinal);

        let Id_producao_estoque_capa = ''
        let Data_para_coletar = '';
        let Quantidade_Pedido = '';

        histMaterial = histMaterial +  `Id Coleta  \t Data Para Coletar\t Produto  \tNumero Pedido  \tQuantidade Pedido  \tPedido Para \tCliente \n`


        for (i = 0; i <= opcoleta.length - 1; i++) {
            Id_producao_estoque_capa = opcoleta[i].Id_producao_estoque_capa;
            Codigo_produto= opcoleta[i].Codigo_produto;
            Data_para_coletar = opcoleta[i].Data_para_coletar;
            Data_finalizacao = opcoleta[i].Termino_previsto; 
            Quantidade_Pedido = opcoleta[i].Quantidade_Pedido;  
            if (opcadastrada15[i].Nome == null) {
                Nome ='';
                Numero_Pedido = '';
                Pedido_Para = '';
            } else {
                Nome = opcadastrada15[i].Nome;
                Numero_Pedido = opcoleta[i].Numero_Pedido;
                Pedido_Para = opcoleta[i].Pedido_Para;
                Pedido_Para = Pedido_Para.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
            } 
            Quantidade_total_finalizada = Quantidade_total_finalizada + parseFloat(Quantidade_Pedido);; 

            Numero_op = parseFloat(Numero_op).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 });
    
            Quantidade_Pedido = parseFloat(Quantidade_Pedido).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
            Data_para_coletar = Data_para_coletar.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
            histMaterial = histMaterial +  `${Id_producao_estoque_capa} \t${Codigo_produto} \t${Data_para_coletar} \t${Quantidade_final}\t${Numero_Pedido}  \t  ${Pedido_Para} \t ${Nome}\n`

        }
        Quantidade_total_finalizada = parseFloat(Quantidade_total_finalizada).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

        histMaterial = histMaterial +  `Total Usado nas Coletas = ${Quantidade_total_finalizada} \n`
    
        histMaterial = histMaterial +  `\nOp´s Finalizadas após inventário\n`;  

        
        let opfinalizada = await verificaFinalizado(req.body.produto, inventario.datainventario);

        Numero_op = '';
        Codigo_produto= '';
        Data_criacao = null;
        Data_finalizacao = null; 
        Quantidade_final = 0;
        Quantidade_total_finalizada = 0;
        Pedido_Para = null;
        Nome = '';
        Numero_Pedido = '';


        histMaterial = histMaterial +  `OP  \t Produto  \tDt Criação  \tData Finalização  \tQt Utilizada \tPedido   \tPedido Para \tCliente \n`

        
        for (i = 0; i <= opfinalizada.length - 1; i++) {
            Numero_op = opfinalizada[i].Numero_op;
            Codigo_produto= opfinalizada[i].Codigo_produto;
            Data_criacao = opfinalizada[i].Data_criacao;
            Data_finalizacao = opfinalizada[i].Data_finalizacao; 
            Quantidade_final = opfinalizada[i].Quantidade_final; 
            if (opfinalizada[i].Nome == null) {
                Nome ='';
                Numero_Pedido = '';
                Pedido_Para = '';
            } else {
                Nome = opfinalizada[i].Nome;
                Numero_Pedido = opfinalizada[i].Numero_Pedido;
                Pedido_Para = opfinalizada[i].Pedido_Para;
                Pedido_Para = Pedido_Para.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
            } 

            Quantidade_total_finalizada = Quantidade_total_finalizada + parseFloat(Quantidade_final);; 
            Numero_op = parseFloat(Numero_op).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 });
            Quantidade_final = parseFloat(Quantidade_final).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
            Data_criacao = Data_criacao.toLocaleDateString('pt-BR', { timeZone: 'UTC' }); 
            Data_finalizacao = Data_finalizacao.toLocaleDateString('pt-BR', { timeZone: 'UTC' });  


            histMaterial = histMaterial +  `${Numero_op} \t${Codigo_produto} \t ${Data_criacao} \t ${Data_finalizacao} \t ${Quantidade_final} \t${Numero_Pedido}  \t  ${Pedido_Para} \t ${Nome}\n`

            console.log(opfinalizada[i].Quantidade_final + '- ' +  Quantidade_total_finalizada);
        }
        Quantidade_total_finalizada = parseFloat(Quantidade_total_finalizada).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

        histMaterial = histMaterial +  `Total Usado nas OP´s Finalizadas = ${Quantidade_total_finalizada} \n`;      

        histMaterial = histMaterial +  `\nCompras entregues apos inventário\n`;       

        let Pedido_compra_numero = ''
        let quantidade_recebida = 0;
        let Telefone = '';
        let data_requisicao = null;
        let Data_entrada = null;

        
        let opcompraEntregue = await verificaCompraEntregue(req.body.produto, inventario.datainventario);

        Pedido_compra_numero = '';
        Codigo_produto= '';
        data_requisicao = null;
        Data_entrada = null; 
        quantidade_recebida = 0;
        Quantidade_total_finalizada = 0;
        Nome = '';
        Telefone = '';
        Numero_Pedido = '';


        histMaterial = histMaterial +  `Pedido de Compra  \t Produto  \tData Requisição  \tData Entrega  \tQt Entregue  \tTelefone \tFornecedor \n`

        
        for (i = 0; i <= opcompraEntregue.length - 1; i++) {
            Pedido_compra_numero = opcompraEntregue[i].Pedido_compra_numero;
            Codigo_produto= opcompraEntregue[i].Codigo_produto;
            data_requisicao = opcompraEntregue[i].data_requisicao;
            Data_entrada = opcompraEntregue[i].Data_entrada; 
            Quantidade_final = opcompraEntregue[i].quantidade_recebida; 
            if (opcompraEntregue[i].Nome == null) {
                Nome ='';
                Numero_Pedido = '';
                Telefone = '';
            } else {
                Nome = opcompraEntregue[i].Nome;
                Numero_Pedido = opcompraEntregue[i].Numero_Pedido;
                Telefone = opcompraEntregue[i].Pedido_Para;
            } 

            Quantidade_total_finalizada = Quantidade_total_finalizada + parseFloat(Quantidade_final);; 
            Pedido_compra_numero = parseFloat(Pedido_compra_numero).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 });
            Quantidade_final = parseFloat(Quantidade_final).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
            data_requisicao = data_requisicao.toLocaleDateString('pt-BR', { timeZone: 'UTC' }); 
            Data_finalizacao = Data_finalizacao.toLocaleDateString('pt-BR', { timeZone: 'UTC' });  


            histMaterial = histMaterial +  `${Numero_op} \t${Codigo_produto} \t ${Data_criacao} \t ${Data_finalizacao} \t ${Quantidade_final} \t${Numero_Pedido}  \t  ${Pedido_Para} \t ${Nome}\n`

            console.log(opfinalizada[i].Quantidade_final + '- ' +  Quantidade_total_finalizada);
        }
        Quantidade_total_finalizada = parseFloat(Quantidade_total_finalizada).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

        histMaterial = histMaterial +  `Total Comprado e Entregue = ${Quantidade_total_finalizada} \n`;      



        const response = {
            ok: true,
//            length: produtoLotes.length,
            histMaterial: histMaterial,
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

    let opfinalizada = [];

    const finalizado = await corp.$queryRaw`
    select 
    co.Numero_op, 
    co.Codigo_produto, 
    co.Data_criacao, 
    co.Data_finalizacao, 
    io.Quantidade_final,
	ag.Nome,
    cp.[Numero Pedido] as Numero_Pedido,
    cp.Pedido_Para
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
	left join dbo.[Capa Pedido] as cp on
(
		io.[Apelido_empresa]         = cp.[Apelido_empresa] AND 
        io.[Apelido_estabelecimento] = cp.[Apelido_estabelecimento] AND 
        co.[Numero_pedido_venda]           = cp.[Numero Pedido] 
    )
	left join [dbo].[Agente] as ag on 
  ( 
	cp.Apelido_empresa = ag.Apelido_empresa and
	cp.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	cp.[Agente_Faturamento] = ag.[Codigo_agentes]
  )
    where 
        io.Apelido_empresa         = 'IQL Tintas' 
    and io.Apelido_estabelecimento = 'Matriz'
    and co.Status_op = 'Finalizada' 
    and co.Data_finalizacao >= ${datainventario}
    and io.Codigo_produto = ${Codigo_produto}
    `;

    await corp.$disconnect();

    if (finalizado.length != 0) {
        //           console.log(finalizado[0].opfinalizada);
        opfinalizada = finalizado;

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

async function verificaEmprocesso(Codigo_produto, datainventario) {

    opemprocesso = [];

    const emprocesso = await corp.$queryRaw`
    select 
    co.Numero_op, 
    co.Codigo_produto, 
    co.Data_criacao, 
    co.Termino_previsto, 
    io.Quantidade_inicial,
    ag.Nome,
    cp.[Numero Pedido] as Numero_Pedido,
    cp.Pedido_Para
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
       	left join dbo.[Capa Pedido] as cp on
(
		io.[Apelido_empresa]         = cp.[Apelido_empresa] AND 
        io.[Apelido_estabelecimento] = cp.[Apelido_estabelecimento] AND 
        co.[Numero_pedido_venda]           = cp.[Numero Pedido] 
    )
	left join [dbo].[Agente] as ag on 
  ( 
	cp.Apelido_empresa = ag.Apelido_empresa and
	cp.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	cp.[Agente_Faturamento] = ag.[Codigo_agentes]
  )
    where 
        io.Apelido_empresa         = 'IQL Tintas' 
    and io.Apelido_estabelecimento = 'Matriz'
    and co.Status_op = 'Em andamento' 
    and co.Data_inicio >= ${datainventario}
    and io.Codigo_produto = ${Codigo_produto}
    `;

    await corp.$disconnect();

    if (emprocesso.length != 0) {
        //           console.log(emprocesso[0].opemprocesso);
        opemprocesso = emprocesso;

    }

    return (opemprocesso);
}

async function verificaCadastrada15(Codigo_produto, dtfinal) {

    opcadastrada15 = [];

    const cadastrada = await corp.$queryRaw`
    select 
    co.Numero_op, 
    co.Codigo_produto, 
    co.Data_criacao, 
    co.Termino_previsto, 
    io.Quantidade_inicial,
    ag.Nome,
    cp.[Numero Pedido] as Numero_Pedido,
    cp.Pedido_Para
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
       	left join dbo.[Capa Pedido] as cp on
    (
		io.[Apelido_empresa]         = cp.[Apelido_empresa] AND 
        io.[Apelido_estabelecimento] = cp.[Apelido_estabelecimento] AND 
        co.[Numero_pedido_venda]           = cp.[Numero Pedido] 
    )
	left join [dbo].[Agente] as ag on 
    ( 
	cp.Apelido_empresa = ag.Apelido_empresa and
	cp.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	cp.[Agente_Faturamento] = ag.[Codigo_agentes]
    )
    where 
        io.Apelido_empresa         = 'IQL Tintas' 
    and io.Apelido_estabelecimento = 'Matriz'
    and co.Status_op               = 'Cadastrada' 
    and io.Codigo_produto          = ${Codigo_produto}
    and (co.data_producao          <= ${dtfinal} or co.data_producao          is Null)
    `;

    await corp.$disconnect();


    if (cadastrada.length != 0) {

        opcadastrada15 = cadastrada;

    }

    return (opcadastrada15);

}

async function verificaColeta15(Codigo_produto, dtfinal) {

    let opcoleta15 = [];

    const ultimacoleta15 = await corp.$queryRaw`
    select 
	ce.Id_producao_estoque_capa,
	ce.Data_para_coletar,
	ip.Codigo_produto,
	ip.Quantidade_Pedido,
	cp.[Numero Pedido] as Numero_Pedido,
	cp.Pedido_Para,
    ag.Nome
    from [dbo].coleta_pedido_insumos as [ip]
    inner JOIN [dbo].[Capa_producao_estoque] AS ce ON 
    (ce.Apelido_empresa         = [ip].Apelido_empresa AND
    ce.Apelido_estabelecimento  = [ip].Apelido_estabelecimento AND
    ce.id_producao_estoque_capa = [ip].id_producao_estoque_capa)
	left join dbo.[Capa Pedido] as cp on
	(
		ip.[Apelido_empresa]               = cp.[Apelido_empresa] AND 
        ip.[Apelido_estabelecimento]       = cp.[Apelido_estabelecimento] AND 
        ce.[Numero_pedido_venda]           = cp.[Numero Pedido] 
    )
	left join [dbo].[Agente] as ag on 
	( 
	cp.Apelido_empresa		   = ag.Apelido_empresa and
	cp.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	cp.[Agente_Faturamento]    = ag.[Codigo_agentes]
	)
    where
    [ip].Apelido_empresa         = 'IQL Tintas'  and 
    [ip].Apelido_estabelecimento = 'Matriz' and
    [ce].[status_coleta]         = '' and
    [ip].Codigo_produto          = ${Codigo_produto} and
    [ce].Data_para_coletar  <= ${dtfinal}
    order by 
	[ce].Data_para_coletar desc
    `;

    await corp.$disconnect();

    if (ultimacoleta15.length != 0) {

        opcoleta15 = ultimacoleta15;
    } else {

    }

    return (opcoleta15);

}

async function verificaCompra15(Codigo_produto, datainventario) {

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
	pc.[Pedido compra numero] as Pedido_compra_numero,
	rq.quantidade_recebida,
	ag.Nome, 
	ag.Telefone,
	rq.[Data requisicao] as data_requisicao,
	cr.Data_entrada
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
	    left join [dbo].[Agente] as ag on 
  ( 
	cr.Apelido_empresa = ag.Apelido_empresa and
	cr.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	cr.[Codigo_agentes] = ag.[Codigo_agentes]
  )
    where 
    [rq].Apelido_empresa = 'IQL Tintas' and
    [rq].Apelido_estabelecimento = 'Matriz' and
    [rq].[Codigo material] = ${Codigo_produto} and
    [rq].[Status requisicao] = 'Atendido' and
    [cr].[Data_entrada] >= ${datainventario} and
    [pc].status_pedido <> 'NÃO APROVADO'
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
    nome = '';
    telefone = '';
    quantidaderecebida = 0;


    const ultimacompra = await corp.$queryRaw`
    select top 1
    ag.nome,
	ag.telefone,
	rq.[valor unitario final] as valorultimacompra,
	rq.[Data compra] as dataultimacompra,
	rq.quantidade_recebida as quantidaderecebida
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
    LEFT JOIN  dbo.[Agente] AS ag ON (
        pc.Apelido_empresa = ag.Apelido_empresa AND
        pc.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
        pc.[Codigo] = ag.[Codigo_agentes]
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
        nome = ultimacompra[0].nome;
        telefone = ultimacompra[0].telefone;
        quantidaderecebida = ultimacompra[0].quantidaderecebida;
    }

    return { valorultimacompra, dataultimacompra, nome, telefone, quantidaderecebida };
    // return (valorultimacompra);
}

async function verificaDadosProduto(Codigo_produto) {

    let Desc_tecnica = '';
    let Unidade_compra= '';
    let Lote_compra = 0;
    let Estoque_minimo = 0;

    const dadosproduto = await corp.$queryRaw`
       select 
       ia.Desc_tecnica,
       ia.Unidade_compra,
       ia.Lote_compra,
       ia.Estoque_minimo
       FROM  [dbo].[Itens_almox] AS ia  
       where 
       [ia].Apelido_empresa           = 'IQL Tintas' and
       [ia].Apelido_estabelecimento   = 'Matriz' and
       [ia].[Codigo_produto]          =  ${Codigo_produto} 
    `;

    await corp.$disconnect();

    if (dadosproduto.length != 0) {
        Desc_tecnica = dadosproduto[0].Desc_tecnica;
        Unidade_compra= dadosproduto[0].Unidade_compra;
        Lote_compra = dadosproduto[0].Lote_compra;
        Estoque_minimo = dadosproduto[0].Estoque_minimo;

    }


    return { Desc_tecnica, Unidade_compra, Lote_compra, Estoque_minimo };

}










