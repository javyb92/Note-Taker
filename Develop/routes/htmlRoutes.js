//Dependencies
var path = require("path");
var router = require("express").Router();

//Retrieves note.html
    router.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
//Redirects to index if no route is found
    router.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

module.exports = router;