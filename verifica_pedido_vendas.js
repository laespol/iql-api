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

    var chavearquivo = gerarPassword();
    //   console.log(JSON.stringify(chavearquivo));


    const dataAtual = new Date();

    const coletas = await corp.$queryRaw`
 select  
co.Numero_op,
ag.Nome,
cp.[Numero Pedido] as Numero_Pedido,
cp.Pedido_Para,
ip.Codigo_produto,
ip.Codigo_embalagem,
ip.quantidade_itens_pedido,
ip.qtde_faturada,
cp.Data as Data_pedido
from dbo.Itens_Pedido as ip
left join dbo.[Capa Pedido] as cp on
(
		ip.[Apelido_empresa]         = cp.[Apelido_empresa] AND 
        ip.[Apelido_estabelecimento] = cp.[Apelido_estabelecimento] AND 
        ip.[Numero Pedido]           = cp.[Numero Pedido] 
    )
left join dbo.Capa_op as co on
    (
		ip.[Apelido_empresa]         = co.[Apelido_empresa] AND 
        ip.[Apelido_estabelecimento] = co.[Apelido_estabelecimento] AND 
        ip.[Numero Pedido]           = co.[Numero_pedido_venda] 
    )
left join dbo.Itens_op as io on
    (
		io.[Apelido_empresa]         = co.[Apelido_empresa] AND 
        io.[Apelido_estabelecimento] = co.[Apelido_estabelecimento] AND 
        io.[Numero_op]               = co.[Numero_op] 
    )
left join [dbo].[Agente] as ag on 
  ( 
	cp.Apelido_empresa = ag.Apelido_empresa and
	cp.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	cp.[Agente_Faturamento] = ag.[Codigo_agentes]
  )
where 
 cp.Situacao_pedido <> 'CANCELADO' and
 ip.Data                    >= '2024-10-01' 
 -- ip.Apelido_empresa         = 'IQL Tintas' and
 -- ip.Apelido_estabelecimento = 'Matriz'     and
 		AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
        AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
 and co.Numero_op is null 
 and ip.qtde_faturada = 0
 order by
 ip.[Numero Pedido]
        `;

    await corp.$disconnect();

    console.log(coletas);

    this.html = '';

    if (coletas.length != 0) {

        this.html = this.html + `
            <h2 style="color: #0000cd;">Pedidos sem Ordem de produção</h2>
            <p>&nbsp;</p>
            <table style="border-collapse: collapse;" border="1">
            <tbody>
            <tr>
            <td style="text-align: center"><strong>Numero Pedido de Vendas</strong></td>
            <td style="text-align: center"><strong>Nome</strong></td>     
            <td style="text-align: center"><strong>Pedido Para</strong></td>        
            <td style="text-align: center"><strong>Produto</strong></td>
            <td style="text-align: center"><strong>Embalagem</strong></td>
            <td style="text-align: center"><strong>Quantidade Pedido</strong></td>
            <td style="text-align: center"><strong>Data Pedido</strong></td>
            </tr>
              `;
    }

    for (i = 0; i <= coletas.length -1; i++) {


        var data = new Date();
        data = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

        quantidade_itens_pedido = parseFloat(coletas[i].quantidade_itens_pedido).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

        Numero_Pedido = parseFloat(coletas[i].Numero_Pedido).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 });

        Pedido_Para = coletas[i].Pedido_Para.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

        Data_pedido = coletas[i].Data_pedido.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        if (coletas[i].Nome == null) {
            Nome ='';
        } else {
            Nome = coletas[i].Nome;
        }

        // Obter a data atual
const dataAtualcalculo = new Date();

// Subtrair 4 dias
dataAtualcalculo.setDate(dataAtualcalculo.getDate() - 4);

// Exibir o resultado


        if (coletas[i].Pedido_Para >= dataAtualcalculo) {
            linha = '<td style="width:150px; text-align: center"> ' + Numero_Pedido + ' </td> ' ;
        } else {
            linha = '<td style="width:150px; text-align: center; color:red"> ' + Numero_Pedido + ' </td> ';
        }
//        console.log(linha);
 
        this.html = this.html + "<tr> " +
            linha  +
            ' <td style="width:150px; text-align: center"> ' + Nome + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + Pedido_Para + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + coletas[i].Codigo_produto + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + coletas[i].Codigo_embalagem + ' </td> ' +
            ' <td style="width:180px; text-align: center"> ' + quantidade_itens_pedido + ' </td> ' +
            ' <td style="width:200px; text-align: center"> ' + Data_pedido + ' </td> ' +
            " </tr>"

    }


    this.html = this.html + "</tbody></table><p>&nbsp;</p>";
    const createSendmail = await iql.sendmail.create({
        data: {
//                    destinatario: "luis.espoladore@adcon.srv.br",
            destinatario: "luis.espoladore@adcon.srv.br;samuel.corazza@adcon.srv.br;helen.ferrari@iql.com.br;julio.correa@iql.com.br;alexandre.mesquita@iql.com.br",
            html: Buffer.from(this.html),
            subject: "Pedidos sem Ordem de Produção - " + data,
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







async function geraemail(chavearquivo) {

    //   console.log(chavearquivo);

    //  chavearquivo = '4x1k3ir9a8';

    var data = new Date();
    data = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    this.html = '';

    const relcompras = await iql.$queryRaw`
SELECT  
co.codigo_produto, co.desc_tecnica, co.dataultimacompra, co.valorultimacompra, co.mediaconsumo, 
(co.saldo + (co.opcompra + co.opcompraEntregue) - (opfinalizada + opemprocesso + opcadastrada + opcoleta) ) as totalsaldo, 
(co.mediaconsumo * (co.porcentagem/100) ) as meta,  
 ((co.mediaconsumo * (co.porcentagem/100) ) - (co.saldo + (co.opcompra + co.opcompraEntregue) - (opfinalizada + opemprocesso + opcadastrada + opcoleta) ) ) as necessidade,
co.*
FROM hospital.compras co
where 
chavearquivo = ${chavearquivo} and
((co.saldo + (co.opcompra + co.opcompraEntregue) - (opfinalizada + opemprocesso + opcadastrada + opcoleta) ) < (co.mediaconsumo * (co.porcentagem/100) ))

    `;

    await iql.$disconnect();

    //   console.log(relcompras);

    if (relcompras.length != 0) {
        this.html = this.html + `
        <h2 style="color: #0000cd;">Relatorio de Necessidade de Compras</h2>
        <p>&nbsp;</p>
        <table style="border-collapse: collapse;" border="1">
        <tbody>
        <tr>
        <td style="text-align: center"><strong>Produto</strong></td>
        <td style="text-align: center"><strong>Descrição</strong></td>
        <td style="text-align: center"><strong>Data Ultima Compra</strong></td>
        <td style="text-align: center"><strong>Valor Ultima Compra</strong></td>
        <td style="text-align: center"><strong>Estoque</strong></td>
        <td style="text-align: center"><strong>Consumo Médio</strong></td>
        <td style="text-align: center"><strong>Comprar</strong></td>
        </tr>
          `;

        for (let i = 0; i <= relcompras.length - 1; i++) {
            valorultimacompra = parseFloat(relcompras[i].valorultimacompra).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 4 });
            totalsaldo = parseFloat(relcompras[i].totalsaldo).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
            mediaconsumo = parseFloat(relcompras[i].mediaconsumo).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
            necessidade = parseFloat(relcompras[i].necessidade).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
            dataultimacompra = relcompras[i].dataultimacompra.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
            this.html = this.html + "<tr> " +
                ' <td style="width:150px; text-align: left"> ' + relcompras[i].codigo_produto + ' </td> ' +
                ' <td style="width:200px; text-align: left"> ' + relcompras[i].desc_tecnica + ' </td> ' +
                ' <td style="width:180px; text-align: center"> ' + dataultimacompra + ' </td> ' +
                ' <td style="width:150px; text-align: right"> ' + valorultimacompra + ' </td> ' +
                ' <td style="width:150px; text-align: right"> ' + totalsaldo + ' </td> ' +
                ' <td style="width:150px; text-align: right"> ' + mediaconsumo + ' </td> ' +
                ' <td style="width:150px; text-align: right"> ' + necessidade + ' </td> ' +
                " </tr>"

        }

        this.html = this.html + "</tbody></table><p>&nbsp;</p>";
        const createSendmail = await iql.sendmail.create({
            data: {
                //destinatario: "luis.espoladore@zanthus.com.br;compras@zanthus.com.br",
                destinatario: "luis.espoladore@adcon.srv.br",
//                destinatario: "luis.espoladore@adcon.srv.br;andreia.oliveira@iql.com.br;ivan.silva@iql.com.br;evellyn.ribeiro@iql.com.br",
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




}

function gerarPassword() {
    return Math.random().toString(36).slice(-10);
}
