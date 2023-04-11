const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const port = 9000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", (req, res) => {
    let firstname = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;

    console.log(`Hellow ${firstname} dengan nama belakang ${lastName} dan email ${email}`);
});

app.listen (port, () => {
    console.log(`localhost:${port}`);
});

//api
//d6f995bfdfef44c5fffd85e6d8b0ca29-us9