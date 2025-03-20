const { beforeEach } = require('node:test')
const { PrismaClient: PrismaClientCorp } = require('../prisma/client/corp');

const { PrismaClient: PrismaClientIql } = require('../prisma/client/iql');
const { isUndefined } = require('util');

const corp = new PrismaClientCorp();
const iql = new PrismaClientIql();


function exclude(user, keys) {
    for (let key of keys) {
        delete user[key]
    }
    return user
}


function json(param) {
    console.log(param)
    return JSON.stringify(
        param,
        (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    );
};
/*
const corp = new PrismaClient({
    log: [
        {
            emit: 'stdout',
            level: 'query',
        },
        {
            emit: 'stdout',
            level: 'error',
        },
        {
            emit: 'stdout',
            level: 'info',
        },
        {
            emit: 'stdout',
            level: 'warn',
        },
    ],
})
*/

exports.getCapaop = async (req, res, next) => {
    try {
        totalRecords = await corp.capa_op.count({

        })
        const capaops = await corp.capa_op.findMany({
            skip: Number(req.params.skip),
            take: Number(req.params.take),
            select: {
                Numero_op: true,
                Data_criacao: true,
                Data_finalizacao: true,
                Codigo_produto: true,
                Quantidade_inicial: true,
                Quantidade_final: true,
                Status_op: true
            }
        })
        await corp.$disconnect()
        const response = {
            ok: true,
            length: capaops.length,
            totalRecords: totalRecords,
            capaops: capaops
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

exports.getCapaopDetail = async (req, res, next) => {
    console.log(req.params);
    try {
        const capaop = await corp.capa_op.findFirst({
            select: {
                Numero_op: true,
                Data_criacao: true,
                Status_op: true
            },
            where: {
                Numero_op: req.params.numero_op,
            },
        })

        if (capaop.length == 0) {
            await corp.$disconnect()
            return res.status(404).send({
                ok: false,
                message: 'Capaop não encontrado'
            })
        }
        await corp.$disconnect()
        const response = {
            ok: true,
            capaop: capaop
        }
        return res.status(200).send(response);
    } catch (error) {
        await corp.$disconnect()
        console.log(error);
        return res.status(500).send({
            ok: false,
            error: error
        });
    }
};

exports.getCapaopPesquisaDetail = async (req, res, next) => {

    let where = '';

    console.log("getCapaopPesquisaDetail");
    console.log(JSON.stringify(req.params));


    //    console.log(JSON.stringify(req.body));

    if (req.params.sortOrder == 1) {
        sortOrder = "desc";
    } else {
        sortOrder = "asc";
    }

    orderBy = { [req.params.sortField]: sortOrder }



    //    console.log("req.body.dtinicio = " + req.body.dtinicio);
    //    console.log("req.body.dtfinal = " + req.body.dtfinal);
    //    console.log("rep.body.status = " + req.body.status);

    //     where = { OR, consulta: { contains: req.params.globalFilter } };

    //    console.log(req.body.dtinicio.slice(0, 10));
    let dtinicio = req.body.dtinicio.slice(0, 10);
    let dtfinal = req.body.dtfinal.slice(0, 10);

    //    req.body.dtinicio="2024-08-05";
    //    req.body.dtfinal="2024-08-28";

    if (req.body.status == 'Todos') {
        if (req.params.globalFilter != 'undefined') {
            where = {
                AND: [
                    {
                        OR: [
                            {
                                Numero_op: { contains: req.params.globalFilter },

                            },
                            {
                                Codigo_produto: { contains: req.params.globalFilter }
                            }
                        ]
                    },
                    {
                        Data_criacao: { gt: new Date(dtinicio), lte: new Date(dtfinal) }
                    }

                ]
            };
        } else {
            where = { Data_criacao: { gt: new Date(dtinicio), lte: new Date(dtfinal) } };
        }
    } else {
        if (req.params.globalFilter != 'undefined') {
            where = {
                AND: [
                    {
                        OR: [
                            {
                                Numero_op: { contains: req.params.globalFilter },

                            },
                            {
                                Codigo_produto: { contains: req.params.globalFilter }
                            }
                        ]
                    },
                    {
                        Data_criacao: { gt: new Date(dtinicio), lte: new Date(dtfinal) }
                    }

                ]
            };
        } else {
            where = {
                AND: [

                    {
                        Data_criacao: { gt: new Date(dtinicio), lte: new Date(dtfinal) }
                    },
                    {
                        Status_op: req.body.status,
                    }
                ]
            };
        }

    }


    console.log(where);


    try {
        totalRecords = await corp.capa_op.count({
            where
        })

        situacao = await corp.capa_op.findMany({
            distinct: ['Status_op'],
            select: {
                Status_op: true,
            },
        })

        console.log(JSON.stringify(situacao));

        const capaops = await corp.capa_op.findMany({
            skip: Number(req.params.skip),
            take: Number(req.params.take),
            select: {
                Numero_op: true,
                Data_criacao: true,
                Data_finalizacao: true,
                Codigo_produto: true,
                Quantidade_inicial: true,
                Quantidade_final: true,
                Status_op: true,
                data_producao: true,
                Hora_finalizacao: true,
                Data_inicio: true
            },
            where
            ,
            orderBy
        })

        await corp.$disconnect()
        //       console.log(JSON.stringify(capaops))
        const response = {
            ok: true,
            length: capaops.length,
            totalRecords: totalRecords,
            capaops: capaops
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

exports.getCapaopStatus = async (req, res, next) => {
    try {

        situacaos = await corp.capa_op.findMany({
            distinct: ['Status_op'],
            select: {
                Status_op: true,
            },
        })

        console.log(JSON.stringify(situacaos));


        await corp.$disconnect()
        //       console.log(JSON.stringify(capaops))
        const response = {
            ok: true,
            length: situacaos.length,
            situacaos: situacaos
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


exports.getCapaopMateriaPrima = async (req, res, next) => {

    try {

        let dtinicio = req.body.dtinicio.slice(0, 10);
        let dtfinal = req.body.dtfinal.slice(0, 10);

        console.log(dtinicio, dtfinal);

        const materiaprimas = await corp.$queryRaw`
        SELECT Codigo_produto,unidade_ficha,unidade_cad, Desc_tecnica, Estoque_minimo, saldo, Ano, Mes,descricao,
       [1] as s1, [2]as s2, [3]as s3, [4]as s4, [5]as s5,
           (COALESCE([1], 0) + COALESCE([2], 0) + COALESCE([3], 0) + COALESCE([4], 0) + COALESCE([5], 0)) AS Total,
    (COALESCE([1], 0) + COALESCE([2], 0) + COALESCE([3], 0) + COALESCE([4], 0) + COALESCE([5], 0)) / 
    NULLIF(
        (CASE WHEN [1] IS NOT NULL THEN 1 ELSE 0 END +
         CASE WHEN [2] IS NOT NULL THEN 1 ELSE 0 END +
         CASE WHEN [3] IS NOT NULL THEN 1 ELSE 0 END +
         CASE WHEN [4] IS NOT NULL THEN 1 ELSE 0 END +
         CASE WHEN [5] IS NOT NULL THEN 1 ELSE 0 END), 0) AS Media
FROM
(
        SELECT 
        SUM([dbo].[Itens_op].[Quantidade_final]) as 'Total',
        [j2].[Codigo_produto] as 'Codigo_produto', 
        [dbo].[Itens_op].[unidade_ficha], 
        [dbo].[Itens_op].[unidade_cad] , 
        [j2].[Desc_tecnica], 
        [j4].descricao,
        [j2].[Estoque_minimo], 
		[j3].[saldo],
        DATEPART (year,     [j1].[Data_finalizacao]) as Ano ,
        DATEPART (month,    [j1].[Data_finalizacao]) as Mes,
        (DATEPART (iso_week, [j1].[Data_finalizacao])) - (DATEPART(iso_week, DATEADD (month, DATEDIFF (month, 0, [j1].[Data_finalizacao]), 0)) ) +1 as Semana
        FROM [dbo].[Itens_op] 
        LEFT JOIN [dbo].[Capa_op] AS [j1] ON (([j1].[Numero_op] = [dbo].[Itens_op].[Numero_op])) 
        LEFT JOIN [dbo].Itens_almox AS [j2] ON 
		(([j2].[Apelido_empresa] = [dbo].[Itens_op].[Apelido_empresa])and
		 ([j2].[Apelido_estabelecimento] = [dbo].[Itens_op].[Apelido_estabelecimento])and 
		 ([j2].[Codigo_produto] = [dbo].[Itens_op].[Codigo_produto])) 
		LEFT JOIN [dbo].[estoque_saldos] as [j3] ON 
		(([j3].[apelido_empresa] = [dbo].[Itens_op].[Apelido_empresa])and
		 ([j3].[Apelido_estabelecimento] = [dbo].[Itens_op].[Apelido_estabelecimento])and 
		 ([j3].[codigo_estoque] = '1') and
		 ([j3].[codigo_embalagem] = '') and
		 ([j3].[Codigo_produto] = [dbo].[Itens_op].[Codigo_produto])) 
         		 LEFT JOIN [dbo].[Tipo_do_item] as [j4] ON 
			(([j2].[apelido_empresa] = [j4].[Apelido_empresa])and
		 ([j2].[Apelido_estabelecimento] = [j4].[Apelido_estabelecimento])and 	 
		 ([j2].Codigo_tipo_item = [j4].Codigo_tipo_item))

        WHERE ([j1].[Data_finalizacao] > ${dtinicio} AND [j1].[Data_finalizacao] <= ${dtfinal})
        AND [j1].[Apelido_empresa] IS NOT NULL 
        AND [j1].[Apelido_estabelecimento] IS NOT NULL AND [j1].[Numero_op] IS NOT NULL 
        AND [j1].[Status_op] = ${req.body.status}
        AND [j2].[Apelido_empresa] IS NOT NULL 
        AND [j2].[Apelido_estabelecimento] IS NOT NULL 
        AND [j2].[Codigo_produto] IS NOT NULL 
        
        GROUP BY [j2].[Codigo_produto], 
        [dbo].[Itens_op].[unidade_ficha], 
        [dbo].[Itens_op].[unidade_cad], 
        [j2].[Desc_tecnica], 
        [j4].descricao,
        [j2].[Estoque_minimo], 
		[j3].[saldo],
        DATEPART (year, [j1].[Data_finalizacao]), 
        DATEPART (month, [j1].[Data_finalizacao]),
        (DATEPART( iso_week, [j1].[Data_finalizacao])) - (DATEPART(iso_week, DATEADD (month, DATEDIFF (month, 0, [j1].[Data_finalizacao]), 0)))
		
  ) as Dados
  PIVOT ( 
	
    SUM(Total) FOR Semana IN ([1], [2], [3], [4], [5])
) AS PivotTable;
        `

        await corp.$disconnect()


        const response = {
            ok: true,
            length: materiaprimas.length,
            materiaprimas: materiaprimas,
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

exports.getCapaopMateriaPrevisao = async (req, res, next) => {
    try {


        const previsaomateriaprimas = await corp.$queryRaw`
WITH ItensOp AS (
SELECT 
    Codigo_produto, 
    Unidade_estoque,
    Unidade_compra, 
    Desc_tecnica, 
    Estoque_minimo, 
    saldo,
    Ano,
    Mes,
    COALESCE([1], 0) as s1, 
    COALESCE([2], 0) as s2,
    COALESCE([3], 0) as s3,
    COALESCE([4], 0) as s4,
    COALESCE([5], 0) as s5,
		0  as c1, 
    0  as c2,
    0  as c3,
    0  as c4,
    0  as c5,
    (COALESCE([1], 0) + COALESCE([2], 0) + COALESCE([3], 0) + COALESCE([4], 0) + COALESCE([5], 0)) AS Total,
    (COALESCE([1], 0) + COALESCE([2], 0) + COALESCE([3], 0) + COALESCE([4], 0) + COALESCE([5], 0)) / 
    NULLIF(
        (CASE WHEN [1] IS NOT NULL THEN 1 ELSE 0 END +
         CASE WHEN [2] IS NOT NULL THEN 1 ELSE 0 END +
         CASE WHEN [3] IS NOT NULL THEN 1 ELSE 0 END +
         CASE WHEN [4] IS NOT NULL THEN 1 ELSE 0 END +
         CASE WHEN [5] IS NOT NULL THEN 1 ELSE 0 END), 0) AS Media
FROM
(
    SELECT  
        SUM([j4].[Quantidade_inicial]) as 'Total',
        [j2].[Codigo_produto] as 'Codigo_produto', 
        [j2].[Unidade_estoque], 
        [j2].[Unidade_compra], 
        [j2].[Desc_tecnica], 
        [j2].[Estoque_minimo], 
        [j3].[saldo],
        DATEPART (year, [j1].[termino_previsto]) as Ano,
        DATEPART (month, [j1].[termino_previsto]) as Mes,
        (DATEPART (iso_week, [j1].[termino_previsto]) - DATEPART(iso_week, DATEADD (month, DATEDIFF (month, 0, [j1].[termino_previsto]), 0))) as Semana
    FROM 
        [corp].[dbo].[Itens_op] as [j4]
    LEFT JOIN 
        [corp].[dbo].[Capa_op] AS [j1] 
        ON [j1].[Numero_op] = [j4].[Numero_op]
    LEFT JOIN 
        [corp].[dbo].[Itens_almox] AS [j2] 
        ON ([j2].[Apelido_empresa] = [j4].[Apelido_empresa] AND 
            [j2].[Apelido_estabelecimento] = [j4].[Apelido_estabelecimento] AND 
            [j2].[Codigo_produto] = [j4].[Codigo_produto])
    LEFT JOIN 
        [corp].[dbo].[estoque_saldos] as [j3] 
        ON ([j3].[apelido_empresa] = [j4].[Apelido_empresa] AND 
            [j3].[Apelido_estabelecimento] = [j4].[Apelido_estabelecimento] AND 
            [j3].[codigo_estoque] = '1' AND 
            [j3].[codigo_embalagem] = '' AND 
            [j3].[Codigo_produto] = [j4].[Codigo_produto])
    WHERE  
        [j1].[Apelido_empresa] IS NOT NULL AND
        [j1].[Apelido_estabelecimento] IS NOT NULL AND 
        [j1].[Numero_op] IS NOT NULL AND 
        [j1].[Status_op] = 'Cadastrada' AND 
        [j2].[Apelido_empresa] IS NOT NULL AND 
        [j2].[Apelido_estabelecimento] IS NOT NULL AND 
        [j2].[Codigo_produto] IS NOT NULL 
    GROUP BY 
        [j2].[Codigo_produto], 
        [j2].[Unidade_estoque], 
        [j2].[Unidade_compra],  
        [j2].[Desc_tecnica], 
        [j2].[Estoque_minimo], 
        [j3].[saldo],
        DATEPART (year, [j1].[termino_previsto]), 
        DATEPART (month, [j1].[termino_previsto]), 
        (DATEPART(iso_week, [j1].[termino_previsto]) - DATEPART(iso_week, DATEADD(month, DATEDIFF(month, 0, [j1].[termino_previsto]), 0)))
) as dados1
PIVOT 
(
    SUM(Total) FOR Semana IN ([1], [2], [3], [4], [5])
)as pvt1),
Compras AS (
SELECT 
    [Codigo material], 
    Unidade_estoque,
    Unidade_compra, 
    Desc_tecnica, 
    Estoque_minimo, 
    saldo,
    Ano,
    Mes,
	0  as s1, 
    0  as s2,
    0  as s3,
    0  as s4,
    0  as s5,
	COALESCE([1], 0) as c1, 
    COALESCE([2], 0) as c2,
    COALESCE([3], 0) as c3,
    COALESCE([4], 0) as c4,
    COALESCE([5], 0) as c5,
    (COALESCE([1], 0) + COALESCE([2], 0) + COALESCE([3], 0) + COALESCE([4], 0) + COALESCE([5], 0)) AS Total,
    (COALESCE([1], 0) + COALESCE([2], 0) + COALESCE([3], 0) + COALESCE([4], 0) + COALESCE([5], 0)) / 
    NULLIF(
        (CASE WHEN [1] IS NOT NULL THEN 1 ELSE 0 END +
         CASE WHEN [2] IS NOT NULL THEN 1 ELSE 0 END +
         CASE WHEN [3] IS NOT NULL THEN 1 ELSE 0 END +
         CASE WHEN [4] IS NOT NULL THEN 1 ELSE 0 END +
         CASE WHEN [5] IS NOT NULL THEN 1 ELSE 0 END), 0) AS Media
FROM
(
	SELECT SUM([j1].[Quantidade requisitada]) as 'Total',
		[j1].[Codigo material],
        [j2].[Unidade_estoque], 
        [j2].[Unidade_compra], 
		        [j2].[Desc_tecnica], 
        [j2].[Estoque_minimo], 
		[j3].[saldo],
        DATEPART (year,     [j1].[Data necessidade]) as Ano ,
        DATEPART (month,    [j1].[Data necessidade]) as Mes,
        (DATEPART (iso_week, [j1].[Data necessidade])) - (DATEPART(iso_week, DATEADD (month, DATEDIFF (month, 0, [j1].[Data necessidade]), 0)) ) +1 as Semana  FROM [corp].[dbo].[requisicao] as [j1]
  LEFT JOIN [corp].[dbo].[Itens_almox] AS [j2] ON 
		(([j2].[Apelido_empresa] = [j1].[Apelido_empresa])and
		 ([j2].[Apelido_estabelecimento] = [j1].[Apelido_estabelecimento])and 
		 ([j2].[Codigo_produto] = [j1].[Codigo material]))
		 LEFT JOIN [corp].[dbo].[estoque_saldos] as [j3] ON 
		(([j3].[apelido_empresa] = [j1].[Apelido_empresa])and
		 ([j3].[Apelido_estabelecimento] = [j1].[Apelido_estabelecimento])and 
		 ([j3].[codigo_estoque] = '1') and
		 ([j3].[codigo_embalagem] = '') and
		 ([j3].[Codigo_produto] = [j1].[Codigo material]))
  where [j1].[Status requisicao] = 'Comprado'
  and   [j1].[Data necessidade]> '2024-09-13'
          AND [j2].[Apelido_empresa] IS NOT NULL 
        AND [j2].[Apelido_estabelecimento] IS NOT NULL 
        AND [j2].[Codigo_produto] IS NOT NULL 

  group by
  [j1].Apelido_empresa,
  [j1].Apelido_estabelecimento,
  [j1].[Codigo material],
          [j2].[Unidade_estoque], 
        [j2].[Unidade_compra], 
          [j2].[Desc_tecnica], 
        [j2].[Estoque_minimo], 
		[j3].[saldo],
          DATEPART (year,     [j1].[Data necessidade]) ,
        DATEPART (month,    [j1].[Data necessidade]) ,
        (DATEPART (iso_week, [j1].[Data necessidade])) - (DATEPART(iso_week, DATEADD (month, DATEDIFF (month, 0, [j1].[Data necessidade]), 0)) )
  ) as compras
	pivot (
	SUM(Total) for Semana IN ([1],[2],[3],[4],[5])
	) AS pvt)
SELECT 
    ISNULL(ItensOp.Codigo_produto, Compras.[Codigo material]) AS Codigo_produto,
    ISNULL(ItensOp.Unidade_estoque, Compras.Unidade_estoque) AS Unidade_estoque,
    ISNULL(ItensOp.Unidade_compra, Compras.Unidade_compra) AS Unidade_compra,
    ISNULL(ItensOp.Desc_tecnica, Compras.Desc_tecnica) AS Desc_tecnica,
    ISNULL(ItensOp.Estoque_minimo, Compras.Estoque_minimo) AS Estoque_minimo,
    ISNULL(ItensOp.saldo, Compras.saldo) AS saldo,
    ISNULL(ItensOp.Ano, Compras.Ano) AS Ano,
    ISNULL(ItensOp.Mes, Compras.Mes) AS Mes,
    ItensOp.s1, ItensOp.s2, ItensOp.s3, ItensOp.s4, ItensOp.s5,
    Compras.c1, Compras.c2, Compras.c3, Compras.c4, Compras.c5,
    (ItensOp.s1+ ItensOp.s2+ ItensOp.s3+ ItensOp.s4+ ItensOp.s5) As Totop,
    (Compras.c1+ Compras.c2+ Compras.c3+ Compras.c4+ Compras.c5) As Totcompras,
    (ItensOp.saldo + ISNULL((Compras.c1+ Compras.c2+ Compras.c3+ Compras.c4+ Compras.c5),0) - ISNULL((ItensOp.s1+ ItensOp.s2+ ItensOp.s3+ ItensOp.s4+ ItensOp.s5),0)) As Necessidade

FROM 
    ItensOp
FULL OUTER JOIN 
    Compras 
ON 
    ItensOp.Codigo_produto = Compras.[Codigo material] and
	ItensOp.mes            = Compras.mes and
	ItensOp.Ano				= Compras.Ano
        `

        await corp.$disconnect()


        const response = {
            ok: true,
            length: previsaomateriaprimas.length,
            previsaomateriaprimas: previsaomateriaprimas,
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

exports.getCapaopMateriaLote = async (req, res, next) => {




    console.log(req.body);
    try {


        const produtoLotes = await corp.$queryRaw`
SELECT 
[el].Codigo_produto,
Case when [ia].[Codigo_tipo_item] = '001' then
     [el].lote_original 
else [el].Lote_interno
end as lote_original,
Case when [ia].[Codigo_tipo_item] = '003' then [co].data_validade_etq +1
     when [ia].[Codigo_tipo_item] = '007' then [co].data_validade_etq +1
     else [el].Data_validade_prod +1 end as Data_validade_prod , 
[ia].Desc_tecnica, 
Case when [ia].[Codigo_tipo_item] = '001' then
--[co].Termino_previsto +1
     [el].Data 
else [co].Termino_previsto +1
end as Data
  FROM 
  [corp].[dbo].[Estoque_lote] as [el]
    LEFT JOIN 
        [corp].[dbo].[Itens_almox] AS [ia] 
        ON ([ia].[Apelido_empresa]         = [el].[Apelido_empresa]         AND 
            [ia].[Apelido_estabelecimento] = [el].[Apelido_estabelecimento] AND 
            [ia].[Codigo_produto]          = [el].[Codigo_produto])
     LEFT JOIN 
        [dbo].[Capa_op] AS [co] 
        ON ([co].[Apelido_empresa]         = [el].[Apelido_empresa]         AND 
            [co].[Apelido_estabelecimento] = [el].[Apelido_estabelecimento] AND 
            [co].[numero_op]               = [el].Lote_interno)
 
  where  [el].Apelido_empresa = 'IQL Tintas'
  and [el].Apelido_estabelecimento = 'Matriz'
  and [el].Codigo_produto = ${req.body.Codigo_produto}
  and 
     (([ia].[Codigo_tipo_item] = '001' AND [el].lote_original = ${req.body.lote_original})
  OR ([ia].[Codigo_tipo_item] <> '001' AND [el].Lote_interno = ${req.body.lote_original}));   
  
      `

        await corp.$disconnect()

        console.log(produtoLotes)


        const response = {
            ok: true,
            //            length: produtoLotes.length,
            produtoLotes: produtoLotes,
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

exports.getCapaoOP = async (req, res, next) => {


    //   String mes = req.body.Mes;

    console.log(req.body);
    //    console.log(req.body.Ano + req.body.Mes + '01')
    if (req.body.Mes == '12') {
        datainic = new Date(req.body.Ano, req.body.Mes - 1, '01');
        datainic = new Date(req.body.Ano + 1, '01', '01');
    } else {
        datainic = new Date(req.body.Ano, req.body.Mes - 1, '01');
        datafim = new Date(req.body.Ano, req.body.Mes, '01');

    }
    console.log('datainic ' + datainic);
    console.log('datafim ' + datafim);


    try {


        const produtoOPs = await corp.$queryRaw`
select 
[j1].Numero_op, 
[j2].[agente_nome_origem], 
[j2].[Codigo_produto] as Codigo_produto_capa, 
[j1].Codigo_produto , 
[j2].Status_op, 
[j1].Quantidade_inicial,
[j2].Termino_previsto 
from 
dbo.Itens_op [j1]
    LEFT JOIN 
        [corp].[dbo].[Capa_op] AS [j2] 
        ON [j1].[Numero_op] = [j2].[Numero_op]
where 
[j1].Apelido_empresa = 'IQL Tintas'
and [j1].Apelido_estabelecimento = 'Matriz'
and [j1].Codigo_produto = ${req.body.Codigo_produto}
and [j2].Status_op = 'Cadastrada'
and [j2].Termino_previsto >= ${datainic}
and [j2].Termino_previsto < ${datafim} 
      `

        await corp.$disconnect()


        const response = {
            ok: true,
            length: produtoOPs.length,
            produtoOPs: produtoOPs,
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

exports.getCapaoMaterial = async (req, res, next) => {



    console.log(req.body);



    try {


        const lotes = await corp.$queryRaw`
   select 
   [j1].Numero_op, 
   [j2].[agente_nome_origem], 
   [j2].[Codigo_produto] as Codigo_produto_capa, 
   [j1].Codigo_produto , 
   [j2].Status_op, 
   [j1].Quantidade_inicial,
   [j2].Termino_previsto 
   from 
   dbo.Itens_op [j1]
       LEFT JOIN 
           [corp].[dbo].[Capa_op] AS [j2] 
           ON [j1].[Numero_op] = [j2].[Numero_op]
   where 
   [j1].Apelido_empresa = 'IQL Tintas'
   and [j1].Apelido_estabelecimento = 'Matriz'
   and [j1].Codigo_produto = ${req.body.Codigo_produto}
   and [j2].Status_op = 'Cadastrada'
   and [j2].Termino_previsto >= '2024-09-01'
   and [j2].Termino_previsto < '2024-10-01' 
         `

        await corp.$disconnect()


        const response = {
            ok: true,
            length: produtoOPs.length,
            produtoOPs: produtoOPs,
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

exports.getLotes = async (req, res, next) => {

    console.log(req.body.Codigo_produto);
    data_atual = new Date();
    console.log(data_atual);


    try {


        const produtoLotes = await corp.$queryRaw`
SELECT -- Top 10
[el].Codigo_produto,
Case when [ia].[Codigo_tipo_item] = '001' then [el].lote_original 
     else [el].Lote_interno end as lote_original,
Case when [ia].[Codigo_tipo_item] = '003' then [co].data_validade_etq
     when [ia].[Codigo_tipo_item] = '007' then [co].data_validade_etq
     else [el].Data_validade_prod end as Data_validade_prod,
[ia].Desc_tecnica,
[el].Data
FROM 
 [dbo].[Estoque_lote] as [el]
    LEFT JOIN 
        [dbo].[Itens_almox] AS [ia] 
        ON ([ia].[Apelido_empresa]         = [el].[Apelido_empresa]         AND 
            [ia].[Apelido_estabelecimento] = [el].[Apelido_estabelecimento] AND 
            [ia].[Codigo_produto]          = [el].[Codigo_produto])
    LEFT JOIN 
        [dbo].[Capa_op] AS [co] 
        ON ([co].[Apelido_empresa]         = [el].[Apelido_empresa]         AND 
            [co].[Apelido_estabelecimento] = [el].[Apelido_estabelecimento] AND 
            [co].[numero_op]               = [el].Lote_interno)
 
  where  [el].Apelido_empresa = 'IQL Tintas'
     and [el].Apelido_estabelecimento = 'Matriz'
     and [el].Codigo_produto = ${req.body.Codigo_produto}
order by [el].Data desc

         `

        await corp.$disconnect()


        const response = {
            ok: true,
            length: produtoLotes.length,
            produtoLotes: produtoLotes,
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

exports.getMoagem = async (req, res, next) => {

    console.log(req.body.Codigo_produto);
    data_atual = new Date();
    console.log(data_atual);


    try {


        const opmoagems = await corp.$queryRaw`
select 
   co.Numero_op, 
  co.Codigo_produto , 
  co.Status_op , 
  co.Quantidade_inicial, 
  co.Numero_pedido_venda,
  co.Data_criacao + 1 as Data_criacao,
  
    max( Case when [pp].Descricao_producao = 'Moagem' then
     'M'
	else ' '
	end) as 'Moagem',
  max (Case when [pp].Descricao_producao <> 'Moagem' then
     'T'
	else ' '
	end) as 'Outros',

  -- Soma de dias úteis dependendo da condição (Moagem = 4 dias, Outros = 2 dias)
  CASE 
    WHEN MAX(CASE WHEN pp.Descricao_producao = 'Moagem' THEN 1 ELSE 0 END) = 1 
      THEN DATEADD(DAY, 4 + 
                  ((4 / 5) * 2) + 
                  CASE WHEN (4 % 5) + DATEPART(WEEKDAY, co.Data_criacao + 1) > 6 
                       THEN 2 
                       WHEN (4 % 5) + DATEPART(WEEKDAY, co.Data_criacao + 1) = 6 
                       THEN 1 
                       ELSE 0 
                  END, co.Data_criacao + 1)
    ELSE DATEADD(DAY, 2 + 
                 ((2 / 5) * 2) + 
                 CASE WHEN (2 % 5) + DATEPART(WEEKDAY, co.Data_criacao + 1) > 6 
                      THEN 2 
                      WHEN (2 % 5) + DATEPART(WEEKDAY, co.Data_criacao + 1) = 6 
                      THEN 1 
                      ELSE 0 
                 END, co.Data_criacao + 1)
  END AS Data_Final
 
  from dbo.Capa_op as co
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
where (co.Status_op = 'Cadastrada' or co.Status_op = 'Em andamento')
AND co.Apelido_empresa = 'IQL Tintas'
AND pp.Apelido_estabelecimento = 'Matriz'
group by
  co.Numero_op, 
  co.Codigo_produto , 
  co.Status_op , 
  co.Quantidade_inicial, 
  co.Numero_pedido_venda,
  co.Data_criacao
         `

        await corp.$disconnect()


        const response = {
            ok: true,
            length: opmoagems.length,
            opmoagems: opmoagems,
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

exports.getProcCompras = async (req, res, next) => {

    console.log(req.body.Codigo_produto);
    data_atual = new Date();
    console.log(data_atual);


    try {


        const consumos = await corp.$queryRaw`
SELECT 
    io.Apelido_empresa, 
    io.Apelido_estabelecimento, 
    io.Codigo_produto, 
    [ia].[Unidade_estoque], 
    [ia].[Unidade_compra], 
    [ia].[Desc_tecnica], 
    [ia].[Estoque_minimo],
    [ia].[Lote_compra],
	(            select 
            sum([rq].[Quantidade requisitada]-[rq].quantidade_recebida)  as compras
            FROM [corp].[dbo].[requisicao] as [rq]
            where 
            [rq].Apelido_empresa = 'IQL Tintas' and
            [rq].Apelido_estabelecimento = 'Matriz' and
            [rq].[Codigo material] =io.Codigo_produto and
            [rq].[Status requisicao] = 'Comprado' and
            [rq].[data compra] >= '2024-10-01'
            group by 
            [rq].Apelido_empresa,
            [rq].Apelido_estabelecimento,
            [rq].[Codigo material],
            [rq].[Status requisicao]) as compras,
	(select sum([es].saldo) as saldoestoque  
            from [dbo].[estoque_saldos_lote_loc] as es
        	where 
        	[es].Apelido_empresa = 'IQL Tintas' and
        	[es].Apelido_estabelecimento = 'Matriz' and
        	([es].Codigo_Estoque = 1 or [es].Codigo_Estoque = 2) and
        	[es].Codigo_produto =io.Codigo_produto and
        	[es].saldo <> 0
        	group by
        	[es].Apelido_empresa ,
        	[es].Apelido_estabelecimento,
        	[es].Codigo_Estoque,
        	[es].Codigo_produto ) as saldoestoque,
			(
			select SUM([ip].Quantidade_pedido) as coleta
            from [dbo].coleta_pedido_insumos as [ip]
	        inner JOIN [dbo].[Capa_producao_estoque] AS cp ON 
            (cp.Apelido_empresa         = [ip].Apelido_empresa AND
            cp.Apelido_estabelecimento  = [ip].Apelido_estabelecimento AND
            cp.id_producao_estoque_capa = [ip].id_producao_estoque_capa)
	        where
	        [ip].Apelido_empresa         = 'IQL Tintas'  and 
	        [ip].Apelido_estabelecimento = 'Matriz' and
	        [cp].[status_coleta]         = '' and
	        [ip].Codigo_produto          = io.Codigo_produto
	        group by
	        [ip].Apelido_empresa       ,
	        [ip].Apelido_estabelecimento ,
	        [cp].[status_coleta]        ,
	        [ip].Codigo_produto         ) as coleta,
			(
			select 
	        SUM(io1.Quantidade_inicial) as opcadastradas
            FROM [dbo].Itens_op AS io1
            LEFT JOIN [dbo].[Capa_op] AS co ON 
            (co.Apelido_empresa = io1.Apelido_empresa AND
            co.Apelido_estabelecimento = io1.Apelido_estabelecimento AND
            co.Numero_op = io1.Numero_op )
	        LEFT JOIN [dbo].[Itens_almox] AS [ia] ON 
            ( [ia].[Apelido_empresa] = [io1].[Apelido_empresa] AND 
            [ia].[Apelido_estabelecimento] = [io1].[Apelido_estabelecimento] AND 
            [ia].[Codigo_produto] = [io1].[Codigo_produto])
	        where 
	        co.Status_op = 'Cadastrada'
	        and io1.Codigo_produto = io.Codigo_produto
		    group by
	        [io1].Apelido_empresa ,
	        [io1].Apelido_estabelecimento,
	        [io1].Codigo_produto ) as opcadastradas,


    -- Quantidades por mês/ano
    SUM(CASE WHEN DATEPART(year, co.Data_criacao) = 2023 AND DATEPART(month, co.Data_criacao) = 11 THEN io.Quantidade_final ELSE 0 END) AS 'Nov_2023',
    SUM(CASE WHEN DATEPART(year, co.Data_criacao) = 2023 AND DATEPART(month, co.Data_criacao) = 12 THEN io.Quantidade_final ELSE 0 END) AS 'Dec_2023',
    SUM(CASE WHEN DATEPART(year, co.Data_criacao) = 2024 AND DATEPART(month, co.Data_criacao) = 1 THEN io.Quantidade_final ELSE 0 END) AS 'Jan_2024',
    SUM(CASE WHEN DATEPART(year, co.Data_criacao) = 2024 AND DATEPART(month, co.Data_criacao) = 2 THEN io.Quantidade_final ELSE 0 END) AS 'Feb_2024',
    SUM(CASE WHEN DATEPART(year, co.Data_criacao) = 2024 AND DATEPART(month, co.Data_criacao) = 3 THEN io.Quantidade_final ELSE 0 END) AS 'Mar_2024',
    SUM(CASE WHEN DATEPART(year, co.Data_criacao) = 2024 AND DATEPART(month, co.Data_criacao) = 4 THEN io.Quantidade_final ELSE 0 END) AS 'Apr_2024',
    SUM(CASE WHEN DATEPART(year, co.Data_criacao) = 2024 AND DATEPART(month, co.Data_criacao) = 5 THEN io.Quantidade_final ELSE 0 END) AS 'May_2024',
    SUM(CASE WHEN DATEPART(year, co.Data_criacao) = 2024 AND DATEPART(month, co.Data_criacao) = 6 THEN io.Quantidade_final ELSE 0 END) AS 'Jun_2024',
    SUM(CASE WHEN DATEPART(year, co.Data_criacao) = 2024 AND DATEPART(month, co.Data_criacao) = 7 THEN io.Quantidade_final ELSE 0 END) AS 'Jul_2024',
    SUM(CASE WHEN DATEPART(year, co.Data_criacao) = 2024 AND DATEPART(month, co.Data_criacao) = 8 THEN io.Quantidade_final ELSE 0 END) AS 'Aug_2024',
    SUM(CASE WHEN DATEPART(year, co.Data_criacao) = 2024 AND DATEPART(month, co.Data_criacao) = 9 THEN io.Quantidade_final ELSE 0 END) AS 'Sep_2024',
    SUM(CASE WHEN DATEPART(year, co.Data_criacao) = 2024 AND DATEPART(month, co.Data_criacao) = 10 THEN io.Quantidade_final ELSE 0 END) AS 'Oct_2024'
FROM [dbo].Itens_op AS io
LEFT JOIN [dbo].[Capa_op] AS co ON 
    co.Apelido_empresa = io.Apelido_empresa AND
    co.Apelido_estabelecimento = io.Apelido_estabelecimento AND
    co.Numero_op = io.Numero_op
LEFT JOIN [dbo].[Itens_almox] AS [ia] ON 
    [ia].[Apelido_empresa] = [io].[Apelido_empresa] AND 
    [ia].[Apelido_estabelecimento] = [io].[Apelido_estabelecimento] AND 
    [ia].[Codigo_produto] = [io].[Codigo_produto]
WHERE 
    co.Data_criacao >= DATEADD(MONTH, -12, GETDATE())
    AND co.Status_op = 'Finalizada'
    AND (ia.Codigo_tipo_item = '001' OR ia.Codigo_tipo_item = '005')
GROUP BY 
    io.Apelido_empresa,
    io.Apelido_estabelecimento,
    io.Codigo_produto,
    [ia].[Unidade_estoque], 
    [ia].[Unidade_compra], 
    [ia].[Desc_tecnica], 
    [ia].[Estoque_minimo],
    [ia].[Lote_compra]
ORDER BY 
    io.Codigo_produto;
             `



        const response = {
            ok: true,
            length: consumos.length,
            consumos: consumos
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


exports.postEmailCompras = async (req, res, next) => {


    console.log(req.body);
    this.html = '';

    dtnecessidade = new Date(req.body.relcompra.dtnecessidade);
    saldonecessidade = Math.abs(req.body.relcompra.saldonecessidade);
    mediaconsumo = req.body.relcompra.mediaconsumo;
    vlrpedido = req.body.relcompra.vlrpedido;
    idnecessidade = req.body.relcompra.idnecessidade;


    fornecedors = [];

    contaspagar = [];


    var data = new Date();
    data = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    dtnecessidade = dtnecessidade.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    saldonecessidade = parseFloat(saldonecessidade).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

    vlrpedido = parseFloat(vlrpedido).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
    mediaconsumo = parseFloat(mediaconsumo).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
    idnecessidade = parseFloat(idnecessidade).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 0 });

    try {
        if (req.body.length != 0) {


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
                rq.[Codigo material] = ${req.body.relcompra.codigo_produto}
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
                    <td style="width:150px; text-align: center"> ` + req.body.relcompra.codigo_produto + ` </td>  
                    <td style="width:400px; text-align: center"> ` + req.body.relcompra.desc_tecnica + ` </td>  
                    <td style="width:400px; text-align: center; color: #7C0600;font-weight: bold"> ` + saldonecessidade + ` </td> 
                    <td style="width:400px; text-align: center"> ` + data + ` </td> 
                    <td style="width:400px; text-align: center"> ` + dtnecessidade +` </td> 
                    <td style="width:400px; text-align: center"> ` +  vlrpedido + ` </td> 
                    </tr>
                      `;
        }
        this.html = this.html + "</tbody></table><p>&nbsp;</p>";
        this.html = this.html + `
        <table style="border-collapse: collapse;" border="1">
        <tbody>
        <tr>
        <td style="text-align: center"><strong>Consumo Médio : ` + mediaconsumo + `</strong></td>
        </tr></tbody></table><p>&nbsp;</p>
                      `
                
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
        for (i = 0; i <= fornecedors.length - 1; i++) {
            datacompra = fornecedors[i].datacompra.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
            quantidade_recebida = parseFloat(fornecedors[i].quantidade_recebida).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });

            quantidade_requisitada = parseFloat(fornecedors[i].quantidade_requisitada).toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 4 });
            valorunitario = parseFloat(fornecedors[i].valorunitario).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 4 });

            this.html = this.html + "<tr> " +
                ' <td style="width:150px; text-align: center"> ' + fornecedors[i].codigo_produto + ' </td> ' +
                ' <td style="width:150px; text-align: center"> ' + fornecedors[i].codigo + ' </td> ' +
                ' <td style="width:180px; text-align: center"> ' + fornecedors[i].nome + ' </td> ' +
                ' <td style="width:180px; text-align: center"> ' + fornecedors[i].telefone + ' </td> ' +
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
                    tt.Codigo_agentes = ${fornecedors[i].codigo} AND
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
                ' <td style="width:150px; text-align: right"> '  + Valor_titulo + ' </td> ' +
                ' <td style="width:150px; text-align: right"> '  + Valor_Pagto + ' </td> ' +
                " </tr>"
            }
            this.html = this.html + "</tbody></table><p>&nbsp;</p>";
        }

        this.html = this.html + "</tbody></table><p>&nbsp;</p>";
        const createSendmail = await iql.sendmail.create({
            data: {
                destinatario: "luis.espoladore@adcon.srv.br",
                //destinatario: "luis.espoladore@adcon.srv.br;viviane.santos@iql.com.br;andreia.oliveira@iql.com.br;alexandre.gouveia@iql.com.br",
                html: Buffer.from(this.html),
                subject: "Pedido de Compras - " + data + " " + req.body.relcompra.codigo_produto + "-" + req.body.relcompra.desc_tecnica,
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

