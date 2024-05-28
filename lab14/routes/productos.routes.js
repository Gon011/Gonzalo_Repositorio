const express = require('express');
const router = express.Router();

const controladores = require('../controllers/productos.controller');

router.get("/", controladores.get_productos);

module.exports = router;