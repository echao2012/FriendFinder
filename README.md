# Friend Finder
[Visit the Deployed Site](https://friend-finder-echao.herokuapp.com/)  

Find a friend by answering 10 questions. This application compares your answers to those from other users and gives you the user with the closest match.

## About
Friend Finder is an example of using the Express Node.js module to handle the various routes for this application. A GET route to `/survey` displays the survey page. A GET route to `/api/friends` displays the JSON of all users, while a POST to this route handles incoming survey results. All other GET routes default to the home page.
