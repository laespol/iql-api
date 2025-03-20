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
    [rq].[Status requisicao] = 'Comprado' and
	[rq].[data compra] >= '2024-10-01' and
    (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005') and
    [pc].status_pedido <> 'NÃO APROVADO'
        `;

    await corp.$disconnect();

    console.log(coletas);

    this.html = '';

    if (coletas.length != 0) {
        this.html = this.html + `
            <h2 style="color: #0000cd;">Compras aguardando entrega</h2>
            <p>&nbsp;</p>
            <table style="border-collapse: collapse;" border="1">
            <tbody>
            <tr>
            <td style="text-align: center"><strong>Numero Pedido de Compras</strong></td>
            <td style="text-align: center"><strong>Nota</strong></td>          
            <td style="text-align: center"><strong>Material</strong></td>
            <td style="text-align: center"><strong>Quantidade Comprada</strong></td>
            <td style="text-align: center"><strong>Quantidade Entregue</strong></td>
            <td style="text-align: center"><strong>Data Requisicao</strong></td>
            <td style="text-align: center"><strong>Data Compra</strong></td>
            <td style="text-align: center"><strong>Data Necessidade</strong></td>
            <td style="text-align: center"><strong>Fornecedor</strong></td> 
            <td style="text-align: center"><strong>Telefone</strong></td> 
            </tr>
              `;
    }

    for (i = 0; i <= coletas.length -1; i++) {

        var data = new Date();
        data = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

        Quantidade_requisitada = parseFloat(coletas[i].Quantidade_requisitada).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
        quantidade_recebida = parseFloat(coletas[i].quantidade_recebida).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

        Pedido_compra_numero = parseFloat(coletas[i].Pedido_compra_numero).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 });

        Data_requisicao = coletas[i].Data_requisicao.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        Data_compra = coletas[i].Data_compra.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

        Data_necessidade = coletas[i].Data_necessidade.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        if (coletas[i].Nome == null) {
            Nome ='';
        } else {
            Nome = coletas[i].Nome;
        }
        if (coletas[i].Doc_Numero == null) {
            Doc_Numero ='';
        } else {
            Doc_Numero = coletas[i].Doc_Numero + '-' + coletas[i].Doc_Serie + ' ' + coletas[i].Doc_Tipo;
        }


        this.html = this.html + "<tr> " +
            ' <td style="width:150px; text-align: center"> ' + Pedido_compra_numero + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + Doc_Numero + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + coletas[i].Codigo_material + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + Quantidade_requisitada + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + quantidade_recebida + ' </td> ' +
            ' <td style="width:180px; text-align: center"> ' + Data_requisicao + ' </td> ' +
            ' <td style="width:200px; text-align: center"> ' + Data_compra + ' </td> ' +
            ' <td style="width:200px; text-align: center"> ' + Data_necessidade + ' </td> ' +
            ' <td style="width:200px; text-align: center"> ' + coletas[i].fornecedor + ' </td> ' +
            ' <td style="width:200px; text-align: center"> ' + coletas[i].telefone + ' </td> ' +
            " </tr>"

    }


    this.html = this.html + "</tbody></table><p>&nbsp;</p>";
    const createSendmail = await iql.sendmail.create({
        data: {
//                    destinatario: "luis.espoladore@adcon.srv.br",
            destinatario: "luis.espoladore@adcon.srv.br;andreia.oliveira@iql.com.br;ivan.silva@iql.com.br;compras.iql@iql.com.br;samuel.corazza@adcon.srv.br",
            html: Buffer.from(this.html),
            subject: "Compras aguardando entrega - " + data,
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
