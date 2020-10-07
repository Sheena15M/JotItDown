//node modules needed to make and delete notes in the app
var express = require ("express");
var apiRoutes = require ("./routes/apiRoutes");
var htmlRoutes = require ("./routes/htmlRoutes")

//When you use express, you need a local host port, live server won't run it
var PORT = process.env.PORT || 8080;

//Allows Express to handle the data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Air traffic control, require the routes for the server
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Make sure the PORT is listening, or it won't work
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
}
);