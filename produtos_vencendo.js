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

    const produtos = await corp.$queryRaw`
SELECT 
    [el].Codigo_produto,
    CASE 
        WHEN [ia].[Codigo_tipo_item] = '001' THEN [el].lote_original 
        ELSE [el].Lote_interno 
    END AS lote_original,
    CASE 
        WHEN [ia].[Codigo_tipo_item] IN ('003', '007') THEN [co].data_validade_etq
        ELSE [el].Data_validade_prod 
    END AS Data_validade_prod,
    [ia].Desc_tecnica,
    [el].Data
FROM 
    [dbo].[Estoque_lote] AS [el]
    LEFT JOIN 
        [dbo].[Itens_almox] AS [ia] 
        ON ([ia].[Apelido_empresa] = [el].[Apelido_empresa] AND 
            [ia].[Apelido_estabelecimento] = [el].[Apelido_estabelecimento] AND 
            [ia].[Codigo_produto] = [el].[Codigo_produto])
    LEFT JOIN 
        [dbo].[Capa_op] AS [co] 
        ON ([co].[Apelido_empresa] = [el].[Apelido_empresa] AND 
            [co].[Apelido_estabelecimento] = [el].[Apelido_estabelecimento] AND 
            [co].[numero_op] = [el].Lote_interno)
WHERE  
    [el].Apelido_empresa = 'IQL Tintas'
    AND [el].Apelido_estabelecimento = 'Matriz'
    AND (
        CASE 
            WHEN [ia].[Codigo_tipo_item] IN ('003', '007') THEN [co].data_validade_etq
            ELSE [el].Data_validade_prod 
        END BETWEEN GETDATE() AND DATEADD(DAY, 7, GETDATE())
    )
ORDER BY 
    [el].Data DESC;

        `;

    await corp.$disconnect();

    console.log(produtos.length);

    this.html = '';

    if (produtos.length != 0) {
        this.html = this.html + `
            <h2 style="color: #0000cd;">Produtos Vencendo</h2>
            <p>&nbsp;</p>
            <table style="border-collapse: collapse;" border="1">
            <tbody>
            <tr>
            <td style="text-align: center"><strong>Produto</strong></td>
            <td style="text-align: center"><strong>Lote</strong></td>
            <td style="text-align: center"><strong>Data Validade</strong></td>
            <td style="text-align: center"><strong>Descrição</strong></td>
            <td style="text-align: center"><strong>Data Entrada</strong></td>
            </tr>
              `;
    }

    for (i = 0; i <= produtos.length - 1; i++) {

        var data = new Date();
        data = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

 //       Codigo_produto = parseFloat(produtos[i].Codigo_produto).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 });
        Data_validade_prod = produtos[i].Data_validade_prod.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
        Data = produtos[i].Data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

        this.html = this.html + "<tr> " +
            ' <td style="width:150px; text-align: center"> ' + produtos[i].Codigo_produto + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + produtos[i].lote_original + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + Data_validade_prod + ' </td> ' +
            ' <td style="width:150px; text-align: center"> ' + produtos[i].Desc_tecnica + ' </td> ' +
            ' <td style="width:180px; text-align: center"> ' + Data + ' </td> ' +
            " </tr>"

    }


    this.html = this.html + "</tbody></table><p>&nbsp;</p>";
    const createSendmail = await iql.sendmail.create({
        data: {
            destinatario: "luis.espoladore@adcon.srv.br",
            //           destinatario: "luis.espoladore@adcon.srv.br;viviane.santos@iql.com.br;andreia.oliveira@iql.com.br;alexandre.gouveia@iql.com.br",
            html: Buffer.from(this.html),
            subject: "Produtos Vencendo - " + data,
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

