const { PrismaClient: PrismaClientCorp } = require('./prisma/client/corp');
const { PrismaClient: PrismaClientIql } = require('./prisma/client/iql');
const ExcelJS = require('exceljs');
const fs = require('fs');

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
SELECT 
	FORMAT(tt.data_vencto, 'dd/MM/yyyy') AS Data_Vencimento,
    cc.Descricao as Centro_custo,
    ap.Descricao as Aplicacao,
	FORMAT(SUM(tt.saldo_titulo), 'N2', 'pt-BR') AS A_pagar,
	FORMAT(SUM(tt.valor_titulo -     tt.saldo_titulo), 'N2', 'pt-BR') AS Pago,
	FORMAT(SUM(tt.valor_total_nf), 'N2', 'pt-BR') AS Valor_nf
--    tt.pag_rec,
--    tt.apelido_empresa,
--    tt.pag_rec,
--    tt.Data_Emissao,
--    tt.data_vencto,
--    tt.Nro_NF,
--    tt.nrtitulo,
--    tt.valor_titulo,
--    tt.saldo_titulo,
--    tt.valor_total_nf,
--    tr.Codigo_Aplicacao_Compras as Cod_aplicacao,
--    ap.Descricao as Aplicacao,
--    tr.Codigo_cc as Cod_cento_custo,
--    cc.Descricao as Centro_custo
FROM [corp].[dbo].[Titulos] as tt
    LEFT JOIN 
        dbo.[Agente] AS ag ON 
        tt.Apelido_empresa         = ag.Apelido_empresa AND
        tt.Apelido_estabelecimento = ag.Apelido_estabelecimento AND
        tt.[Codigo_agentes]        = ag.[Codigo_agentes]
    LEFT JOIN                         
        dbo.Titulos_rateio as tr on 	
	    tt.Apelido_empresa         = tr.Apelido_empresa AND
        tt.Apelido_estabelecimento = tr.Apelido_estabelecimento AND
		tt.id_titulo               = tr.id_titulo
    LEFT JOIN
	    dbo.Aplicacao_compras as ap on
		tr.Apelido_empresa          = ap.Apelido_empresa AND
        tr.Apelido_estabelecimento  = ap.Apelido_estabelecimento AND
        tr.Codigo_Aplicacao_Compras = ap.Codigo
    LEFT JOIN 
        dbo.Centro_de_custo as cc on 
		tr.Apelido_empresa          = cc.Apelido_empresa AND
        tr.Apelido_estabelecimento  = cc.Apelido_estabelecimento AND
		tr.Codigo_cc                = cc.Codigo

where 
          tt.Apelido_empresa = 'IQL Tintas' 
      AND tt.Apelido_estabelecimento = 'Matriz'
      AND tt.pag_rec = 'P' 
      AND tt.data_vencto between '2024-12-01' and '2025-01-31' 
--	  and tt.data_vencto = '2024-12-20'
     -- AND CONVERT(date, tt.Data_Emissao) < CONVERT(date, GETDATE())
--      AND tt.Saldo_titulo <> 0 
      AND tt.Cancelado = 0
      AND ag.Nome NOT LIKE '%idea%' --remove vendas para idea
      AND ag.Nome NOT LIKE '%acmc%' --remove vendas para acmc
group by
	tt.data_vencto,
    cc.Descricao ,
    ap.Descricao 
order by
	tt.data_vencto

        `;

  await corp.$disconnect();

  console.log(coletas.length);


    // 2. Gerar a planilha
    const caminhoArquivo = './resultado.xlsx';
    await gerarPlanilha(coletas, caminhoArquivo);









  const createSendmail = await iql.sendmail.create({
    data: {
    destinatario: "luis.espoladore@adcon.srv.br",
  //    destinatario: "luis.espoladore@adcon.srv.br;pcp01@iql.com.br;andreia.oliveira@iql.com.br;alexandre.gouveia@iql.com.br;helen.ferrari@iql.com.br;elaine.dutra@iql.com.br;samuel.corazza@adcon.srv.br;igor.novaes@iql.com.br",
      html: Buffer.from(this.html),
      subject: "Planilha de Pagamentos - " + data,
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

async function gerarPlanilha(dados, caminhoArquivo) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Resultados');

  // Adicionando cabeçalhos
  sheet.columns = Object.keys(dados[0]).map(key => ({
    header: key,
    key: key,
    width: 20,
  }));

  // Adicionando linhas
  dados.forEach(item => sheet.addRow(item));

  // Salvando a planilha no caminho especificado
  await workbook.xlsx.writeFile(caminhoArquivo);
  console.log(`Planilha gerada em: ${caminhoArquivo}`);
}

function gerarPassword() {
  return Math.random().toString(36).slice(-10);
}

