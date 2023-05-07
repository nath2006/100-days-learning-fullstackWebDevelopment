const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); 

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

    res.render("list.ejs", 
        {currentDay : day} 
    );
});

app.listen(port, () => {
    console.log(`localhost:${port}`);
});