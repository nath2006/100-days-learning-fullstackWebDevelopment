const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Your server runing on localhost:${port}`);
});