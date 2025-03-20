const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const usuarioV1Route = require('./routes/usuario-V1-route');
const loginV1Route = require('./routes/login-V1-route');
const menuV1Route = require('./routes/menu-V1-route');
const capaopV1Route = require('./routes/capaop-V1-route');
const compraV1Route = require('./routes/compra-V1-route');
const compraproV1Route = require('./routes/comprapro-V1-route');
const colunaV1Route = require('./routes/coluna-V1-route');
const pedidocompraV1Route = require('./routes/pedidocompra-V1-route');
const inventarioV1Route = require('./routes/inventario-V1-route');


app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(fileUpload());
//app.use(bodyParser.urlencoded({ extended: false }));  // apenas dados simples
//app.use(bodyParser.json()); // json de entrada no body

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        );

    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
        return res.status(200).send({});
    }
    next();
});

app.use('/v1/usuario', usuarioV1Route);
app.use('/v1/login', loginV1Route);
app.use('/v1/capaop', capaopV1Route);
app.use('/v1/compra', compraV1Route);
app.use('/v1/comprapro', compraproV1Route);
app.use('/v1/pedidocompra', pedidocompraV1Route);
app.use('/V1/coluna', colunaV1Route);
app.use('/V1/menu' , menuV1Route);
app.use('/v1/inventario', inventarioV1Route);


// Quando não encontra rota, entra aqui:
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;