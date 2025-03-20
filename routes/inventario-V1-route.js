const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const inventarioV1Controller = require('../controllers/inventario-V1-controller');

router.post('/criarInventario',  inventarioV1Controller.postInventario);

module.exports = router;




