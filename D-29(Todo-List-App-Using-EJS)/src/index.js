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

    switch(currentDay) {
        case 0 :
            day = "Sunday"
            break;
        case 1 : 
            day = "Monday"    
            break;
        case 2 : 
            day = "Tuesday"
            break;
        case 3 : 
            day = "Wednesdaya"
            break;
        case 4 : 
            day = "Thrusday"
            break;
        case 5 : 
            day = "Friday"
            break;
        case 6 : 
            day = "Saturday"
            break;
        default :
            day = " "
    }
    
    res.render("list.ejs", 
        {currentDay : day} 
    );
});

app.listen(port, () => {
    console.log(`localhost:${port}`);
});