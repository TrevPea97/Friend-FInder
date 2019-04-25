// ==============================================================================
// DEPENDENCIES

var express = require("express");
var bodyParser = require('body-parser');

// ==============================================================================
// EXPRESS CONFIGURATION

var app = express();


var PORT = process.env.PORT || 8080;


app.use(express.static(__dirname + "/app/public"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.text());

app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ================================================================================
// ROUTER

require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);


// ==============================================================================
// LISTENER

app.listen(PORT, function() {

  console.log("App listening on http://localhost:" + PORT);

});