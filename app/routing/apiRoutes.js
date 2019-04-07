// Dependencies
const express = require("express");
const path = require("path");

// Setup express router
const router = express.Router();

// Route to friends JSON
router.get("/api/friends", function(req, res) {
    return res.json();
});

// Route to survey page
router.post("/api/friends", function(req, res) {
    const newFriend = req.body;
    console.log(newFriend);

    res.json(newFriend);
});

module.exports = router;