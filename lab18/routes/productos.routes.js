const express = require('express');
const isAuth = require("../util/isAuth");
const router = express.Router();

const controladores = require('../controllers/productos.controller');

router.get("/:id", isAuth, controladores.get_producto);
router.get("/", isAuth, controladores.get_productos);

module.exports = router;