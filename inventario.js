const { PrismaClient: PrismaClientCorp } = require('./prisma/client/corp');
const { PrismaClient: PrismaClientIql } = require('./prisma/client/iql');

const corp = new PrismaClientCorp();
const iql = new PrismaClientIql();

async function main() {
    console.log("entrei")

    const coletor = await iql.$queryRaw`
SELECT iv.* 
FROM hospital.inventario as iv 
    `;

    await iql.$disconnect()

    console.log(coletor);

    for (i = 0; i <= coletor.length; i++) {
        const estoque = await corp.$queryRaw`
 SELECT 
        [j1].Codigo_produto,
        [j2].[Codigo_tipo_item] ,
        [j1].lote_original ,
        [j1].Lote_interno,
        [j1].Data_validade_prod,  
        [j2].Desc_tecnica, 
        [j1].Data,
		[j2].Unidade_compra,
		[j2].Unidade_estoque,
    [j5].saldo,
    (
    SELECT TOP (1) Codigo_embalagem
            FROM [corp].[dbo].[Composicao_itens]
            where Codigo_produto = ${coletor[i].cod_produto} and
    		Apelido_empresa = 'IQL Tintas' and
	    	Apelido_estabelecimento = 'Matriz'
    ) as codigo_embalagem
        FROM 
        [corp].[dbo].[Estoque_lote] as [j1]
        LEFT JOIN 
            [corp].[dbo].[Itens_almox] AS [j2] 
            ON ([j2].[Apelido_empresa]         = [j1].[Apelido_empresa]         AND 
                [j2].[Apelido_estabelecimento] = [j1].[Apelido_estabelecimento] AND 
                [j2].[Codigo_produto]          = [j1].[Codigo_produto])
 
        LEFT JOIN 
            [corp].[dbo].[estoque_saldos_lote_loc] AS [j5] 
            ON ([j5].[Apelido_empresa]         = [j1].[Apelido_empresa]         AND 
                [j5].[Apelido_estabelecimento] = [j1].[Apelido_estabelecimento] AND 
                [j5].[Codigo_produto]          = [j1].[Codigo_produto])         AND
                [j5].[lote_interno]            = ${coletor[i].lote}
        where  [j1].Apelido_empresa = 'IQL Tintas'
        and [j1].Apelido_estabelecimento = 'Matriz'
        and [j1].Codigo_produto = ${coletor[i].cod_produto}
        and 
            (
                 ([j2].[Codigo_tipo_item] =  '001' AND [j1].lote_original = ${coletor[i].lote})
            OR   ([j2].[Codigo_tipo_item] <> '001' AND [j1].Lote_interno  = ${coletor[i].lote})
			OR   ([j2].[Codigo_tipo_item] <> '001' AND [j1].lote_original = ${coletor[i].lote})
            OR   ([j2].[Codigo_tipo_item] =  '001' AND [j1].Lote_interno  = ${coletor[i].lote})
            );
    `;

        await corp.$disconnect()

        if (estoque != '') {
            console.log("estoque");
            console.log(estoque);

            const ajuste = await iql.inventario.update({
                where: {
                    id_inv: coletor[i].id_inv
                },
                data: {
                    Codigo_tipo_item: estoque[0].Codigo_tipo_item,
                    lote_original: estoque[0].lote_original,
                    Lote_interno: estoque[0].Lote_interno,
                    Data_validade_prod: estoque[0].Data_validade_prod,
                    Desc_tecnica: estoque[0].Desc_tecnica,
                    Data: estoque[0].Data,
                    Unidade_compra :estoque[0].Unidade_compra,
                    Unidade_estoque : estoque[0].Unidade_estoque,
                    codigo_embalagem :  estoque[0].codigo_embalagem,
                    estoque: estoque[0].saldo,
                }
            })

            await iql.$disconnect()
            console.log("ajuste");
            console.log(ajuste);
        }
    }

}
main().catch(console.error);