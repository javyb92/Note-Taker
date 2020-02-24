var noteData = require("../db/db.json")
var router = require("express").Router();
var fs = require("fs");

    //Recieve all notes
    router.get("/api/notes", function(req, res) {
        res.json(noteData);
    });

    //Recieve targeted note
    router.get("/api/notes/:id", function(req, res) {
        var chosen = req.params.note;
        console.log(chosen);
    
    });

    //Making notes using push
    router.post("/api/notes", function(req, res) {
        noteData.push(req.body);
        res.json(true);

    });
    //Supposed to deleted targeted notes
    router.delete("/api/notes/:id", function(req, res) {

    });

    module.exports = router;