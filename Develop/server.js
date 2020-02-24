var express = require("express");
var path = require("path")

var app = express();
var PORT = process.env.PORT || 8900;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up a path to the folders files to grab
app.use(express.static("public"));

// require("./routes/apiRoutes")(app);

//Links server.js to htmlRoutes.js
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
