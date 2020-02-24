var noteData = require ("../db/db.json")
var fs = require("fs");


module.exports = function(app){

    app.get("/api/notes", function(req, res) {
        res.json(noteData);
      });

    app.post("/api/notes", function(req, res) {
        noteData.push(req.body);
        res.json(true);
        
    });

    app.delete("/api/notes/:id", function(req, res) {

    });


}