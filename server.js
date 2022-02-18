var express = require("express");
var bodyParser = require("body-parser");

var app = express();

//Importing Router Layer and DB Layer in Script...
let Router = require("./routes/router");
let DB = require("./db/db");

var port = process.env.PORT || 8080;
app.set("port", port);

//Creating an HTTP Server and binding it with the web application.

var directory = express.static("public");
app.use(directory);
app.use(bodyParser.json());
app.use("/", Router);

app.listen(port, () => {
  console.log("Listening on port ", port);
});

//Make sure to open the connection...
DB.connect();
