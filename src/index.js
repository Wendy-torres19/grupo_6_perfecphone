const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

//App server
app.set("port",process.env.PORT || 3000);
app.listen(app.get("port"),()=> console.log("server on http://localhost:"+app.get("port")));


//App access public
app.use(express.static(path.resolve(__dirname,"../public")));

//App settings

// App middlewares

//App Routes
app.use(require("./routes/main"));