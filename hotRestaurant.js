var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var newReservation = [
    {
        name: "Colby",
        email: "user@emial.com",
        userName: "colbyUser",
        password: "password",
        reservation: 4
    }
];

var waitlist = [];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
})

app.get("/waitlist", function(req, res) {
    res.sendFile(path.join(__dirname, "waitlist.html"));
});














app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})