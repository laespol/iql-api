const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const compraV1Controller = require('../controllers/comprapro-V1-controller');

router.post('/consulta/opcadastrada', login.required, compraV1Controller.getProcCompras1);


module.exports = router;




