const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const capaopV1Controller = require('../controllers/capaop-V1-controller');

router.get('/:skip&:take&:sortField&:sortOrder&:globalFilter&:filters&',  login.required, capaopV1Controller.getCapaop);
//router.get('/:numero_op', login.required, capaopV1Controller.getCapaopDetail);
//router.post('/pesquisa/datas/:skip&:take&:sortField&:sortOrder&:globalFilter&:filters&', login.required, capaopV1Controller.getCapaopPesquisaDetail);
router.post('/pesquisa/datas/:skip&:take&:sortField&:sortOrder&:globalFilter&', login.required, capaopV1Controller.getCapaopPesquisaDetail);
router.get('/pesquisa/situacao/',  login.required, capaopV1Controller.getCapaopStatus);
router.post('/materiaprima/consumo/',login.required, capaopV1Controller.getCapaopMateriaPrima);
router.post('/materiaprima/previsao/',login.required, capaopV1Controller.getCapaopMateriaPrevisao);
router.post('/consulta/materialOP/',login.required, capaopV1Controller.getCapaoOP);
//router.post('/materiaprima/consumo/:Codigo_produto',login.required, capaopV1Controller.getCapaopMateriaPrimaProduto);
//router.get('/:Codigo_produto&:lote_original', login.required, capaopV1Controller.getCapaopMateriaLote);
router.post('/', login.required, capaopV1Controller.getCapaopMateriaLote);
router.post('/consulta/lotes', login.required, capaopV1Controller.getLotes);
router.post('/consulta/moagem', login.required, capaopV1Controller.getMoagem);
router.post('/consulta/compras', login.required, capaopV1Controller.getProcCompras);
router.post('/email/pedido', login.required, capaopV1Controller.postEmailCompras);
module.exports = router;




