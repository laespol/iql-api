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
co.Codigo_produto, 
co.Data_criacao, 
co.Numero_pedido_venda, 
co.Quantidade_inicial,
co.Usuario_cadastramento,
cp.Pedido_Para,
ag.Nome,
    max( Case when [pp].Descricao_producao = 'Moagem' then
     'M/4d'
	else ' '
	end) as 'Moagem',
  max (Case when [pp].Descricao_producao <> 'Moagem' then
     'T/2d'
	else ' '
	end) as 'Outros',
   CASE 
        WHEN MAX(CASE WHEN pp.Descricao_producao = 'Moagem' THEN 1 ELSE 0 END) = 1 
            THEN DATEADD(DAY, -4 - 
                            ((4 / 5) * 2) - 
                            CASE WHEN (4 % 5) + DATEPART(WEEKDAY, cp.Pedido_Para - 1) > 6 
                                 THEN 2 
                                 WHEN (4 % 5) + DATEPART(WEEKDAY, cp.Pedido_Para - 1) = 6 
                                 THEN 1 
                                 ELSE 0 
                            END, cp.Pedido_Para - 1)
        ELSE DATEADD(DAY, -2 - 
                         ((2 / 5) * 2) - 
                         CASE WHEN (2 % 5) + DATEPART(WEEKDAY, cp.Pedido_Para - 1) > 6 
                              THEN 2 
                              WHEN (2 % 5) + DATEPART(WEEKDAY, cp.Pedido_Para - 1) = 6 
                              THEN 1 
                              ELSE 0 
                         END, cp.Pedido_Para - 1)
    END AS Data_Final

    from [dbo].[Capa_op] AS co
	left join [dbo].[Processo_op] as po on 
  ( co.Apelido_empresa = po.Apelido_empresa and
	co.Apelido_estabelecimento = po.Apelido_estabelecimento and
	co.Numero_op = po.Numero_op
  )
left join [dbo].[Producao_processos] as pp on 
  ( 
	pp.Apelido_empresa = po.Apelido_empresa and
	pp.Apelido_estabelecimento = po.Apelido_estabelecimento and
	pp.Codigo_processo = po.Codigo_processo
  )

  left join [dbo].[Capa Pedido] as cp on 
  ( 
	co.Apelido_empresa = cp.Apelido_empresa and
	co.Apelido_estabelecimento = cp.Apelido_estabelecimento and
	co.Numero_pedido_venda = cp.[Numero Pedido]
  )
    left join [dbo].[Agente] as ag on 
  ( 
	cp.Apelido_empresa = ag.Apelido_empresa and
	cp.Apelido_estabelecimento = ag.Apelido_estabelecimento and
	cp.Agente_Faturamento = ag.[Codigo_agentes]
  )
   
    where 
        co.Apelido_empresa         = 'IQL Tintas' 
    and co.Apelido_estabelecimento = 'Matriz'
    and co.Status_op = 'Cadastrada'
  group by
  co.Numero_op, 
  co.Codigo_produto ,
  co.Data_criacao,
  co.Numero_pedido_venda,
  co.Quantidade_inicial,
  co.Usuario_cadastramento,
  cp.Pedido_Para,
  ag.Nome
  order by
  co.Numero_op
        `;

  await corp.$disconnect();

  console.log(coletas.length);

  this.html = '';

  if (coletas.length != 0) {
    this.html = this.html + `
            <h2 style="color: #0000cd;">Relação de OP´s Cadastradas</h2>
            <p>&nbsp;</p>
            <table style="border-collapse: collapse;" border="1">
            <tbody>
            <tr>
            <td style="text-align: center"><strong>Numero OP</strong></td>
            <td style="text-align: center"><strong>Produto</strong></td>
            <td style="text-align: center"><strong>Data Criação</strong></td>
            <td style="text-align: center"><strong>Pedido Vendas</strong></td>
            <td style="text-align: center"><strong>Quantidade</strong></td>
            <td style="text-align: center"><strong>Pedido Para </strong></td>   
            <td style="text-align: center"><strong>Limite Produção</strong></td>      
            <td style="text-align: center"><strong>Cliente</strong></td>       
            <td style="text-align: center"><strong>Solicitante</strong></td>
            <td style="text-align: center"><strong>Moagem</strong></td>
            <td style="text-align: center"><strong>Outros</strong></td>     
            </tr>
              `;
  }

  for (i = 0; i <= coletas.length - 1; i++) {

    var data = new Date();
    data = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

    Numero_op = parseFloat(coletas[i].Numero_op).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 });
    datacoleta = coletas[i].Data_criacao.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    Quantidade_inicial = parseFloat(coletas[i].Quantidade_inicial).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
    if (coletas[i].Pedido_Para != null) {
      Pedido_Para = coletas[i].Pedido_Para.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
      Data_Final = coletas[i].Data_Final.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    } else {
      Pedido_Para = '';
      Data_Final = '';

    }


    this.html = this.html + "<tr> " +
      ' <td style="width:150px; text-align: center"> ' + Numero_op + ' </td> ' +
      ' <td style="width:150px; text-align: center"> ' + coletas[i].Codigo_produto + ' </td> ' +
      ' <td style="width:180px; text-align: center"> ' + datacoleta + ' </td> ' +
      ' <td style="width:180px; text-align: center"> ' + coletas[i].Numero_pedido_venda + ' </td> ' +
      ' <td style="width:180px; text-align: right"> ' + Quantidade_inicial + ' </td> ' +
      ' <td style="width:180px; text-align: center"> ' + Pedido_Para + ' </td> ' +
      ' <td style="width:180px; text-align: center"> ' + Data_Final + ' </td> ' +
      ' <td style="width:180px; text-align: center"> ' + coletas[i].Nome + ' </td> ' +
      ' <td style="width:200px; text-align: center"> ' + coletas[i].Usuario_cadastramento + ' </td> ' +
      ' <td style="width:200px; text-align: center"> ' + coletas[i].Moagem + ' </td> ' +
      ' <td style="width:200px; text-align: center"> ' + coletas[i].Outros + ' </td> ' +
      " </tr>"

  }


  this.html = this.html + "</tbody></table><p>&nbsp;</p>";
  const createSendmail = await iql.sendmail.create({
    data: {
      //destinatario: "luis.espoladore@adcon.srv.br",
      destinatario: "luis.espoladore@adcon.srv.br;pcp01@iql.com.br;andreia.oliveira@iql.com.br;alexandre.gouveia@iql.com.br;helen.ferrari@iql.com.br;elaine.dutra@iql.com.br;samuel.corazza@adcon.srv.br;igor.novaes@iql.com.br",
      html: Buffer.from(this.html),
      subject: "Op´s Cadastradas - " + data,
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

