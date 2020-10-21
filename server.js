//node modules needed to make and delete notes in the app
const express = require('express');
const app = express();
const path = require('path');
//const apiRoutes = require("./Routes/apiRoutes")
//const htmlRoutes = require("./Routes/apiRoutes")
//When you use express, you need a local host port, live server won't run it
var PORT = process.env.PORT || 8080;

//Allows Express to handle the data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("Develop"));

//Air traffic control, require the routes for the server
require("./Routes/apiRoutes")(app);
require("./Routes/htmlRoutes")(app);

//Make sure the PORT is listening, or it won't work
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
}
);