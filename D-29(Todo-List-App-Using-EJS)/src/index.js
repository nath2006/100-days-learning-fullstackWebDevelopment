const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

const port = 5000;

app.get("/",(req, res) => {
    
    let today = new Date();
    let currentDay = today.getDay();
    let day = "";

    if (currentDay === 6 || currentDay === 0) {
        day ="Nyantai";
    }else {
        day = "Kerja";
    }

    res.render("list", {currentDay : day} );
    
});

app.listen(port, () => {
    console.log(`localhost:${port}`);
});