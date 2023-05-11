const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); 

const port = 5000;
let items = [];

app.get("/",(req, res) => {
    
    let today = new Date();
    const options = {
        weekday : 'long',
        day : 'numeric',
        month : 'long'
    };
    
    const day= today.toLocaleDateString("en-US", options)

    
    res.render("list.ejs", {currentDay : day, newListItems : items} );

    for(let i =0; i<items.length; i++) {
    
        console.log(items)
    }
 
});

app.post("/", (req,res) => {
    let item = req.body.newItems;
    items.push(item);

    res.redirect('/');
})

app.listen(port, () => {
    console.log(`localhost:${port}`);
});