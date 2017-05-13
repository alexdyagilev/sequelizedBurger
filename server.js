
var express = require("express");
var	methodOverride = require("method-override");
var	bodyParser = require("body-parser");
var	handlebars = require("express-handlebars");

var app = express();
var	PORT = process.env.PORT || 8080;

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./controllers/burgerControllers")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
