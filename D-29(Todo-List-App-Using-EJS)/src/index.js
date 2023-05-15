/* eslint-disable no-undef */
const express = require('express');
const bodyParser = require('body-parser');
// eslint-disable-next-line no-unused-vars
const path = require('path');

const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views')); 

app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(__dirname + '/public'));
let tasks = [];
const port = 5000;

app.get('/',(req,res) => {
	const today = new Date();
	let options = {
		weekday: 'long',
		year:'numeric',
		day: 'numeric',
		month:'long'
	};
	const day = today.toLocaleDateString('en-US',options);
	res.render('list.ejs',{kindOfDay:day,tasks:tasks});
});


app.post('/',(req,res) => {
	const task = req.body.newItem;
	tasks.push(task);
	res.redirect('/');
});

app.listen(port,() => {
	console.log(`Server running on ${port}`);
});
