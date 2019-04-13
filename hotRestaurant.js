var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var user = [
    {
        name: "Colby",
        email: "user@emial.com",
        userName: "colbyUser",
        password: "password",
        reservation: 4
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
})