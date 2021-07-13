const express = require("express");
const router = express.Router();
const main = require("../controllers/main");
const productos = require("../controllers/productosController");

router.get("/",main.index);
router.get("/about",main.index);

router.get("/productos",productos.productos);

module.exports = router;