var  { PrismaClient }  = require('../prisma/client/iql')

/*
const iql = new PrismaClient({
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

const iql = new PrismaClient()

exports.getColunaDetail = async (req, res, next) => {
//    console.log("getColunaDetail " + JSON.stringify(req.params));
    try {
        const colunas = await iql.coluna.findMany({
            where: {
                programa: req.params.programa,
                status: 'A'
            },
            orderBy: {
                ordem: "asc"
            }
        })

        if (colunas.length == 0) {
            await iql.$disconnect()
            return res.status(404).send({
                ok: false,
                message: 'Coluna não encontrado'
            })
        }

//        console.log(JSON.stringify(colunas));

        await iql.$disconnect()
        //       console.log("colunas" +  JSON.stringify(colunas));
        const response = {
            ok: true,
            colunas: colunas
        }
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        await iql.$disconnect()
        return res.status(500).send({
            ok: false,
            error: error
        });
    }
};

exports.getColunaDetailusuario = async (req, res, next) => {
//    console.log("getColunaDetailusuario " + req.user.idusuario + ' ' + req.params.programa);
    try {
        const colunas = await iql.usuariocoluna.findMany({
            select: {
                coluna: true
            },
            where: {
                idusuario: Number(req.user.idusuario),
                status: 'A',
                coluna: {
                    programa: req.params.programa,
                }
            },
            orderBy: {
                idusuariocoluna: 'asc'
            }

        })
//        console.log(JSON.stringify(colunas));

        if (colunas.length == 0) {
            await iql.$disconnect()
            return res.status(404).send({
                ok: false,
                message: 'Coluna não encontrado'
            })
        }

        await iql.$disconnect()
        const response = {
            ok: true,
            colunas: colunas
        }
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        await iql.$disconnect()
        return res.status(500).send({
            ok: false,
            error: error
        });
    }
};


exports.postColuna = async (req, res, next) => {
    let createColunas = [];
    //   console.log(JSON.stringify(req.body.selectedColumns));
    //console.log("req.user.idusuario" +  req.user.idusuario);
    //console.log("req.params.programa" + req.params.programa);
    try {

        const totalRecords = await iql.usuariocoluna.count({
            where: {
                idusuario: Number(req.user.idusuario),
                status: 'A',
                coluna: {
                    programa: req.params.programa,
                }
            }
        })
//        console.log("totalRecords" + totalRecords);
        const deleteColuna = await iql.usuariocoluna.deleteMany({
            where: {
                idusuario: Number(req.user.idusuario),
                status: 'A',
                coluna: {
                    programa: req.params.programa,
                }
            },
        });
        await iql.$disconnect()
//        console.log("deleteColuna " + totalRecords);
//        console.log("selectedColumns " + req.body.selectedColumns.length);
        for (let i = 0; i <= req.body.selectedColumns.length - 1; i++) {
            console.log(i + " " + JSON.stringify(req.body.selectedColumns[i].idcoluna));

            createColunas = await iql.usuariocoluna.create({
                data: {
                    idcoluna: req.body.selectedColumns[i].idcoluna,
                    idusuario: req.user.idusuario,
                    idusercreateAt: req.user.idusuario,
                }
            }); 
 //           console.log("createColunas = " + JSON.stringify(createColunas));
        }
        await iql.$disconnect()
        const totalRecords1 = await iql.usuariocoluna.count({
            where: {
                idusuario: Number(req.user.idusuario),
                status: 'A',
                coluna: {
                    programa: req.params.programa,
                }
            }
        })
        await iql.$disconnect()
//        console.log("totalRecords1 " + totalRecords1);
        const response = {
            ok: true,
            message: 'Colunas inserido com sucesso',
            createColunas: createColunas
        }
        return res.status(201).send(response);
    } catch (error) {
        console.log(error);
        await iql.$disconnect()
        return res.status(500).send({
            ok: false,
            error: error
        });
    }
};
