const express = require("express");
const bodyParser = require("body-parser");

const port = 9000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.listen (port, () => {
    console.log(`localhost:${port}`);
});