var noteListData = require ("../js/index.js")

module.exports = function(app){

    app.get("/api/index", function(req, res) {
        res.json(noteListData);
      });


}