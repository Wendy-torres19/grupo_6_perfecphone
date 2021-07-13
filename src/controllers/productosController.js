const path = require("path");

module.exports = {
    productos: (req,res)=> res.sendFile(path.resolve(__dirname,"../views","productos.html")),    
}