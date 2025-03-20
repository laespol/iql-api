
const { PrismaClient: PrismaClientCorp } = require('../prisma/client/corp');

const { PrismaClient: PrismaClientIql } = require('../prisma/client/iql');


const corp = new PrismaClientCorp();
const iql = new PrismaClientIql();


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

exports.postInventario = async (req, res, next) => {
    try {

        console.log(req.body)

        let dtfinal = req.body.DataAtual.slice(0, 10);



        const inventario = await iql.$queryRaw`        
            INSERT INTO hospital.coletores (
            coletor,
            localizacao, 
            idinventariante, 
            codigobarra, 
            codigoproduto, 
            lote, 
            unidade, 
            embalagem, 
            quantidade, 
            dataatual) 
            VALUES (
            ${req.body.coletor},
            ${req.body.localizacao}, 
            ${req.body.idinventariante}, 
            ${req.body.codigobarra}, 
            ${req.body.codigoproduto}, 
            ${req.body.lote}, 
            ${req.body.unidade}, 
            ${req.body.embalagem}, 
            ${req.body.quantidade}, 
            ${dtfinal});
        `;

        await iql.$disconnect();
        // Resposta de sucesso
        const response = {
          ok: true,
          message: 'Arquivo recebido com sucesso!'
        };
  
        return res.status(200).send(response);
      
    } catch (error) {
      console.error('Erro no servidor:', error);
      return res.status(500).send({ ok: false, error: error.message });
    }
  };
