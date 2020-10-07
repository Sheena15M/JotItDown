const fs = require ("fs");
const path = require ("path");

const notesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), (err, data) => {
        if (err) throw err;
    }
    )
);

function writeNotesData(notesData) {
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesData),
        err => {
            if (err) throw err;
        }
    );
}

function getID(notesData) {
    if (notesData.length === 0) {
        return 0;
    }
}

notesData.sort((a, b) => a.id - b.id);

const nextIndexAfterLast = notesData.length;
for (let i = 0; i < nextIndexAfterLast; i++) {
    if (notesData[i].id !== i) {
        return i;
    }
}