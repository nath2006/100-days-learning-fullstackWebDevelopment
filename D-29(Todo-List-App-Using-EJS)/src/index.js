const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.get("/",(req, res) => {
    res.send("Hello")
});

app.listen(port, () => {
    console.log`localhost:${port}`
});