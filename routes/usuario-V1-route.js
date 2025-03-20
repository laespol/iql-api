const express = require('express');
const router = express.Router();
const login = require('../middleware/login');

const usuarioV1Controller = require('../controllers/usuario-V1-controller');



router.get('/',  login.required, usuarioV1Controller.getUsuario);
router.get('/:idusuario', login.required, usuarioV1Controller.getUsuarioDetail);
router.post('/', login.required, usuarioV1Controller.postUsuario);
router.put('/:idusuario', login.required, usuarioV1Controller.updateUsuario);
router.delete('/:idusuario', login.required, usuarioV1Controller.deleteUsuario);
router.get('/consulta/painel/:idnivel', login.required, usuarioV1Controller.painel);

module.exports = router;