const path = require("path");

module.exports = {
    index: (req,res)=> res.render("home"),

    about: (req,res)=> res.render("about")
}

