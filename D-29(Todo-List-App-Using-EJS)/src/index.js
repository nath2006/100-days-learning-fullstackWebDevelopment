const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); 

const port = 5000;


app.get("/",(req, res) => {
    
    let today = new Date();
    const options = {
        weekday : 'long',
        day : 'numeric',
        month : 'long'
    };
    const day = today.toLocaleDateString("en-US", options)
    res.render("list", {currentDay : day, newListItems : items});
});

let items = [];

app.post("/", (req,res) => {
    const item = req.body.newItems;
    items.push(item);

    res.redirect('/');
})

app.listen(port, () => {
    console.log(`localhost:${port}`);
});