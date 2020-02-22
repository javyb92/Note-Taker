var express = require("express");
var app = express();

//For hosting on Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up a path to the folders files to grab
app.use(express.static("public"));

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
