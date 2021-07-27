const path = require("path");

module.exports = {
    productos: (req,res)=> res.render("productos"),
    productoInterno: (req,res)=> res.render("productoInterno"),   
}