const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const compraV1Controller = require('../controllers/compra-V1-controller');

router.post('/consulta/compras', login.required, compraV1Controller.getProcCompras);
router.post('/consulta/opcadastrada', login.required, compraV1Controller.getProcCompras1);
router.post('/consulta/intermediario', login.required, compraV1Controller.getProcIntermediario);
router.post('/consulta/fornecedor', login.required, compraV1Controller.getFornecedor);
router.post('/consulta/periodo', login.required, compraV1Controller.postConsultaComprasPeriodo);
router.post('/consulta/impostos', login.required, compraV1Controller.postConsultaImpostos);
router.get('/dados/situacao', login.required, compraV1Controller.getSituacaoOP);
router.get('/dados/pagamentos7dias', login.required, compraV1Controller.getPagamentos7dias);
router.get('/dados/recebimento7dias', login.required, compraV1Controller.getRecebimento7dias);
router.get('/dados/vendas7dias', login.required, compraV1Controller.getVendas7dias);
router.get('/consulta/pedidosatraso', login.required, compraV1Controller.getConsultaPedidosemAtraso);
router.get('/consulta/titulosatraso', login.required, compraV1Controller.getConsultaTitulosemAtraso);
router.get('/consulta/titulovenc3meses', login.required, compraV1Controller.getConsultaTitulovenc3meses);
router.get('/consulta/porcentagemcompra', login.required, compraV1Controller.getConsultaPorcentagemComprasPedidos);
router.get('/consulta/porcentagemcompramesant', login.required, compraV1Controller.getConsultaPorcentagemComprasPedidosmesant);
router.get('/dados/OpCadstradaCustodias', login.required, compraV1Controller.getOpCadstradaCustodias);
router.get('/consulta/diferencasproduzidas', login.required, compraV1Controller.getConsultaDiferencaproduzida);
router.get('/consulta/diferencasproduzidasdet', login.required, compraV1Controller.getConsultaDiferencaproduzidadet);
router.get('/consulta/SituacaoTitulosnoMes', login.required, compraV1Controller.getConsultaSituacaoTitulosnoMes);
router.get('/consulta/Situacaocomprasaberto', login.required, compraV1Controller.getConsultaComprasaberto);
router.get('/consulta/Dre', login.required, compraV1Controller.getConsultaDre);
router.post('/consulta/Dfc/', login.required, compraV1Controller.postConsultaDfc);
router.get('/consulta/Bancos', login.required, compraV1Controller.getConsultaBanco);
router.post('/consulta/produtos', login.required, compraV1Controller.postConsultaProdutos);
router.post('/consulta/comissao', login.required, compraV1Controller.postConsultaComissao);

module.exports = router;

