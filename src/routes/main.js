const express = require("express");
const router = express.Router();
const main = require("../controllers/main");
const productos = require("../controllers/productosController");
//const formularioUsuario = require("../controllers/formularioUsuario");
//const carrito = require("../controllers/carrito");

router.get("/",main.index);
router.get("/about",main.index);

router.get("/productos",productos.productos);
router.get("/productoInterno",productos.productoInterno);

//router.get("/formularioUsuario",formularioUsuario.formularioUsuario);
//router.get("/formularioRegistro",formularioUsuario.formularioRegistro);

//router.get("/carrito",carrito.carrito);

module.exports = router;