const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

// open login page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

// login logic
app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    // simple login check
    if(username === "amit" && password === "1234"){
        res.sendFile(path.join(__dirname, "views", "dashboard.html"));
    }
    else{
        res.send("Login Failed ❌");
    }
});

// start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
