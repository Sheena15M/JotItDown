const path = require("path");

//Get and send information to the index.html
module.exports = app => {
    app.get("/", (req,res) =>
    res.sendFile(path.join(__dirname, "..public/index.html"))
    );
//Get and send information to the notes.html
    app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/notes.html"))
    );
};
