const { PrismaClient: PrismaClientCorp } = require('./prisma/client/corp');
const { PrismaClient: PrismaClientIql } = require('./prisma/client/iql');

const corp = new PrismaClientCorp();
const iql = new PrismaClientIql();

async function main() {
    console.log("entrei")
    /*    
            const materiaprimas = await corp.$queryRaw`
    select 
    [io].[Numero_op],
    [co].[Codigo_produto] as produzido,
    [co].Data_finalizacao , 
    [io].[Codigo_Produto],
    [ia].[Desc_tecnica],
    [io].Quantidade_final,
    [co].Quantidade_final as quantidade_produzida,
    [ti].[Descricao],
    (select TOP (1) [r1].[valor unitario final] from dbo.Requisicao as [r1]
    where 
         [r1].Apelido_empresa='IQL Tintas'
    and  [r1].Apelido_estabelecimento='Matriz'
    and  [r1].[Codigo material] = [io].[Codigo_produto]
    and  [r1].[Data compra] < [co].Data_finalizacao 
    order by [r1].[Data compra] desc
    ) as Valor_unitario
    
    from Itens_op as [io]
        LEFT JOIN 
            [corp].[dbo].[Capa_op] AS [co] 
            ON (
            [co].Apelido_empresa=[io].Apelido_empresa and
            [co].Apelido_estabelecimento=[io].Apelido_estabelecimento and
            [co].[Numero_op] = [io].[Numero_op])
            Left join 
            [corp].[dbo].[Itens_almox] as [ia]
            on (
            [io].Apelido_empresa=[ia].Apelido_empresa and
            [io].Apelido_estabelecimento=[ia].Apelido_estabelecimento and
            [io].[Codigo_produto] = [ia].[Codigo_produto])
            Left join 
            [corp].[dbo].[Tipo_do_item] as [ti]
            on (
            [ia].Apelido_empresa=[ti].Apelido_empresa and
            [ia].Apelido_estabelecimento=[ti].Apelido_estabelecimento and
            [ia].[Codigo_tipo_item] = [ti].[Codigo_tipo_item])
    where 
         [co].Apelido_empresa='IQL Tintas'
    and  [co].Apelido_estabelecimento='Matriz'
    and  [co].Data_finalizacao >= '2024-07-01'
    
    
        `
    
            await corp.$disconnect()
    
    
    
            console.log(materiaprimas.length);
    
            var createMenu = '';
            var Valor_unitario = 0;
            var custo = 0;
    
    
    
            for (i = 0; i <= materiaprimas.length; i++) {
                if (materiaprimas[i].Valor_unitario == null) {
                    Valor_unitario = 0;
                    custo = 0;
                }
                else {
                    Valor_unitario = materiaprimas[i].Valor_unitario;
                    custo = (materiaprimas[i].Valor_unitario * materiaprimas[i].Quantidade_final)
                }
    
                console.log(JSON.stringify(materiaprimas[i].Numero_op), custo);
                createMenu = await iql.custoiql.create({
                    data: {
                        numero_op: materiaprimas[i].Numero_op,
                        produzido:materiaprimas[i].produzido,
                        data_finalizacao:materiaprimas[i].Data_finalizacao,
                        codigo_produto:materiaprimas[i].Codigo_Produto,
                        desc_tecnica:materiaprimas[i].Desc_tecnica,
                        quantidade_final:materiaprimas[i].Quantidade_final,
                        descricao:materiaprimas[i].Descricao,
                        valor_unitario:Valor_unitario,
                        quantidade_produzida:materiaprimas[i].quantidade_produzida,
                        custo:custo
    
                    },
                });
                await iql.$disconnect()
           }
    */
    const op = await iql.custoiql.findUnique({
        where: {
            AND:
                [{ produzido: 'RAH-002' }, { data_finalizacao: { gte: new Date('2024-05-29') } }]
        },
        select : {
            valor_unitario : true
        },
        orderBy : { 
            data_finalizacao : 'desc'
        }
    })
    console.log(op);


    const updateMenu = await iql.custoiql.update({
        where: {
            AND: [{ codigo_produto : 'RAH-002' }, { Numero_op : '35965' }]
        },
        data: {
            Valor_unitario: [ await iql.custoiql.findUnique({
                    where: {
                        AND:
                            [{ produzido: 'RAH-002' }, { data_finalizacao: { gte: new Date('2024-05-29') } }]
                    },
                    select : {
                        valor_unitario : true
                    },
                    orderBy : {
                        data_finalizacao : 'desc'
                    }
                })
            ]
        }
    });
    await iql.$disconnect()

    console.log(updateMenu);

}
main().catch(console.error);