var noteData = require("../db/db.json")
var router = require("express").Router();
var fs = require("fs");

    ///api/api/notes
    //Recieve all notes

    // server.js
    // /api       +      "/notes" 

    router.get("/notes", function(req, res) {
        res.json(noteData);
    });

    //Recieve targeted note
    router.get("/notes/:id", function(req, res) {
        var chosen = req.params.note;
        console.log(chosen);
    
    });

    //Making notes using push
    router.post("/notes", function(req, res) {
        noteData.push(req.body);
        res.json(true);
    });

    //Supposed to deleted targeted notes
    router.delete("/notes/:id", function(req, res) {
        // remove the record with matching ID from the noteData array
        // 'javascript how to remove from array'
        noteData.pop();
        res.json(true);
    });

    module.exports = router;