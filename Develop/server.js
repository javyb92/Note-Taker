var express = require("express");
var path = require("path")
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes.js");
var app = express();
var PORT = process.env.PORT || 8900;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up a path to the folders files to grab
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
