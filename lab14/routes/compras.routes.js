const express = require('express');
const router = express.Router();

const controladores = require('../controllers/compras.controller');

router.get("/", controladores.get_compras);

module.exports = router;