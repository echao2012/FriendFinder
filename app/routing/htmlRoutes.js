// Dependencies
const express = require("express");
const path = require("path");

// Setup express router
const router = express.Router();

// Route to home page
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "home.html"));
});

// Route to survey page
router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "survey.html"));
});

// Redirect any unhandled route to home page
router.get("*", function(req, res) {
    res.redirect("/");
});

module.exports = router;