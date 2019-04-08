// Dependencies
const express = require("express");
const path = require("path");

// Include the friends data
const friends = require(path.join(__dirname, "..", "data", "friends"))

// Setup express router
const router = express.Router();

// Route to friends JSON
router.get("/api/friends", function(req, res) {
    return res.json(friends);
});

// Route to add friends data
router.post("/api/friends", function(req, res) {
    const newFriend = req.body;
    console.log(newFriend);

    let iMin = 0;
    let minScore;

    friends.forEach(function(friend, iFriends) {
        // Calculate the total difference
        const score = friend.scores.reduce((acc, val, i) => acc + Math.abs(val - newFriend.scores[i]), 0);

        // Check if this is the closest match
        if(minScore > score || minScore === undefined) {
            iMin = iFriends;
            minScore = score;
        }
    });

    // Save the new friend data
    friends.push(newFriend);

    // Return the closest match
    res.json(friends[iMin]);
});

module.exports = router;