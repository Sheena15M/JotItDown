const fs = require ("fs");
const path = require ("path");

const notesData = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../db/db.json"), (err, data) ==> {
        if (err) throw err;
    }
    )
);