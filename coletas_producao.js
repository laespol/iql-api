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
	cc.Id_producao_estoque_capa,
	cc.Numero_pedido_venda, 
	cc.Data as datacriacao,
	cc.Data_para_coletar as datacoletar, 
	cc.Apelido_usuario,
	ip.Codigo_produto,
	ip.quantidade_itens_pedido,
	cp.Pedido_Para
    from [dbo].[Capa_producao_estoque] AS cc
	left join [dbo].[Itens_pedido] AS ip on 
	(
	[cc].Apelido_empresa         = [ip].Apelido_empresa and 
    [cc].Apelido_estabelecimento = [ip].Apelido_estabelecimento and
	[cc].Numero_pedido_venda     = [ip].[Numero Pedido]
	)
		left join [dbo].[Capa Pedido] AS cp on 
	(
	[ip].Apelido_empresa         = [cp].Apelido_empresa and 
    [ip].Apelido_estabelecimento = [cp].Apelido_estabelecimento and
	[ip].[Numero Pedido]          = [cp].[Numero Pedido]
	)
    where
    [cc].Apelido_empresa         = 'IQL Tintas'  and 
    [cc].Apelido_estabelecimento = 'Matriz' and
    [cc].[status_coleta]         = '' 
	order by
	cc.Id_producao_estoque_capa
        `;

    await corp.$disconnect();

    console.log(coletas.length);

    this.html = '';

    if (coletas.length != 0) {
        this.html = this.html + `
            <h2 style="color: #0000cd;">Coletas em Aberto</h2>
            <p>&nbsp;</p>
            <table style="border-collapse: collapse;" border="1">
            <tbody>
            <tr>
            <td style="text-align: center"><strong>Coleta</strong></td>
            <td style="text-align: center"><strong>Pedido de Venda</strong></td>
            <td style="text-align: center"><strong>Data Criação</strong></td>
            <td style="text-align: center"><strong>Data Coletar</strong></td>
            <td style="text-align: center"><strong>Produto</strong></td>
            <td style="text-align: center"><strong>Quantidade</strong></td>
            <td style="text-align: center"><strong>Data Entrega</strong></td>
            <td style="text-align: center"><strong>Solicitante</strong></td>
            </tr>
              `;
    }

    for (i = 0; i <= coletas.length - 1; i++) {

        var data = new Date();
        data = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

        Id_producao_estoque_capa = parseFloat(coletas[i].Id_producao_estoque_capa).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 });
        datacoletar = coletas[i].datacoletar.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        datacriacao = coletas[i].datacriacao.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
      //  console.log("aqui")       
        if (coletas[i].Pedido_Para == undefined) {
  //          console.log("sim")
            Pedido_Para = coletas[i].Pedido_Para;
        } else {
    //        console.log("nao")
            Pedido_Para = coletas[i].Pedido_Para.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        }
        quantidade_itens_pedido = parseFloat(coletas[i].quantidade_itens_pedido).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });


        this.html = this.html + "<tr> " +
            ' <td style="width:150px; text-align: center"> ' + Id_producao_estoque_capa + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + coletas[i].Numero_pedido_venda + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + datacriacao + ' </td> ' +
            ' <td style="width:180px; text-align: center"> ' + datacoletar + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + coletas[i].Codigo_produto + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + quantidade_itens_pedido + ' </td> ' +
            ' <td style="width:180px; text-align: center"> ' + Pedido_Para + ' </td> ' +
            ' <td style="width:200px; text-align: center"> ' + coletas[i].Apelido_usuario + ' </td> ' +
            " </tr>"

    }


    this.html = this.html + "</tbody></table><p>&nbsp;</p>";
    const createSendmail = await iql.sendmail.create({
        data: {
            destinatario: "luis.espoladore@adcon.srv.br",
            //           destinatario: "luis.espoladore@adcon.srv.br;viviane.santos@iql.com.br;andreia.oliveira@iql.com.br;alexandre.gouveia@iql.com.br",
            html: Buffer.from(this.html),
            subject: "Coletas em Aberto - " + data,
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
                //         destinatario: "luis.espoladore@zanthus.com.br;compras@zanthus.com.br",
                destinatario: "luis.espoladore@adcon.srv.br",
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

