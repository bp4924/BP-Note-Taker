// Dependencies
const express = require("express");
const fs = require("fs");

// Set up Express App
var app = express();
var PORT = process.env.PORT || 3001;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));

require("./routing/html-routes.js")(app);
require("./routing/api-routes.js")(app);

// Start the server
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
