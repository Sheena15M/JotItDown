//NPM packages needed for the app
const fs = require ("fs");
const path = require ("path");
const uniqid = require("uniqid")

//JSON to create the pathways
let notesData;

//Function needed to write the notes in the first place
function writeNotesData(notesData) {
    fs.writeFileSync(
        path.join(__dirname, "../Develop/db/db.json"),
        JSON.stringify(notesData),
        err => {
            if (err) throw err;
        }
    );
}

//Function to get the notes data regardless of how long it is
function getID(notesData) {
    if (notesData.length === 0) {
        return 0;
    }


//Sort the notes in order
notesData.sort((a, b) => a.id - b.id);

const nextIndexAfterLast = notesData.length;
for (let i = 0; i < nextIndexAfterLast; i++) {
    if (notesData[i].id !== i) {
        return i;
    }
}
return nextIndexAfterLast;
}
//Get the notes, post them, and if you're done delete them 
module.exports = app => {
    app.get("/api/notes", (req, res) => {

     notesData= JSON.parse(
            fs.readFileSync(path.join(__dirname, "../Develop/db/db.json"), (err, data) => {
                if (err) throw err;
            }
            )
      )
       res.json(notesData) 
    
    });

    app.post("/api/notes", (req, res) => {
        let data = req.body;
        data.id = uniqid()
        notesData.push(data);
        writeNotesData(notesData);
        return res.json(notesData);
    }
    );
    app.delete("/api/notes/:id", function (req,res) {
        //notesData.splice(req.params.id, 1);
        //for (let i = 0; i < notesData.length; ++i) {
            //if (id === notesData[i].id) {
                //notesData.splice(i, 1);
                //return;
            //}
        //}

        let  notes= notesData.filter(note => {
            return note.id !== req.params.id
        })

        console.log(notes)
        console.log("here")
    writeNotesData(notes);
    res.send(notes);
    });
};