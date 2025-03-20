const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const pedidocompraV1Controller = require('../controllers/pedidocompra-V1-controller');

//router.get('/:skip&:take&:sortField&:sortOrder&:globalFilter&:filters&',  login.required, capaopV1Controller.getCapaop);
//router.get('/:numero_op', login.required, capaopV1Controller.getCapaopDetail);
//router.post('/pesquisa/datas/:skip&:take&:sortField&:sortOrder&:globalFilter&:filters&', login.required, capaopV1Controller.getCapaopPesquisaDetail);
router.post('/pesquisa/datas/:skip&:take&:sortField&:sortOrder&:globalFilter&', login.required, pedidocompraV1Controller.getPedidoCompraDetail);
router.get('/pesquisa/compras/', login.required, pedidocompraV1Controller.getComprasPendentes);

router.post('/pesquisa/histmaterial/', login.required, pedidocompraV1Controller.getHistMaterial);

module.exports = router;
