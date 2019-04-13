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

var waitlist = [
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
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "addUser.html"));
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "allReservations.html"));
})

app.get("/waitlist", function(req, res) {
    res.sendFile(path.join(__dirname, "allReservations.html"))
});

app.get("/api/newReservation", function(req, res) {
    return res.json(newReservation);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

app.post("/api/newReservation", function(req, res) {

    console.log(newReservation);

    if (newReservation.length < 5) {
        newReservation.push(req.body);
        res.json(req.body);
        res.json(true);
      }
    });

app.post("/api/waitlist", function(req, res) {
    console.log(waitlist);

    if (newReservation.length > 5) {

        newReservation.push(waitlist);
        waitlist.push(req.body);
        res.json(req.body);
        res.json(true);
    }

});
  

app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    newReservation.length = 0;

    res.json({ ok: true });
});







app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})