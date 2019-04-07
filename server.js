// Dependencies
const express = require("express");
const path = require("path");

// Setup Express
const app = express();
const PORT = process.env.PORT || 3000;

// Setup Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Include routes
app.use(require(path.join(__dirname, "app", "routing", "apiRoutes")));
app.use(require(path.join(__dirname, "app", "routing", "htmlRoutes")));

// Start the server to begin listening
app.listen(PORT, function() {
    console.log("Server listening on PORT " + PORT);
})