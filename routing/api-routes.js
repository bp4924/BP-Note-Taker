const fs = require("fs");
const uniqid = require("uniqid");

let data = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(data);
  });

  app.get("/api/notes/:id", function (req, res) {
    res.json(data[Number(req.params.id)]);
  });

  app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    console.log(newNote);
    newnote.id = uniqid();
    data.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(data), function (err) {
      if (err) throw err;
    });
    res.json(data);
  });

  app.delete("/api/notes/:id", function (req, res) {
    let noteId = req.params.id;
    let newId = 0;
    data = data.filter((currentNote) => {
      return currentNote.id != noteId;
    });
    for (currentNote of data) {
      currentNote.id = newId.toString();
      newId++;
    }

    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    res.json(data);
  });
};
