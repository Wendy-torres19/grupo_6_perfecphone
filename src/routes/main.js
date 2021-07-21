const express = require("express");
const router = express.Router();
const main = require("../controllers/main");
const productos = require("../controllers/productosController");
const formularioUsuario = require("../controllers/formularioUsuario");

router.get("/",main.index);
router.get("/about",main.index);

router.get("/productos",productos.productos);

router.get("/formularioUsuario",formularioUsuario.formularioUsuario);

module.exports = router;