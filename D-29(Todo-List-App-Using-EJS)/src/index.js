/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views')); 

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

let tasks = [];
let workTask = [];

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

	res.render('list.ejs',{ listTitle:day, newListItems:tasks });
});

app.get('/work', (req, res) => {
	const title = 'Work List';
	res.render('list.ejs',{ listTitle:title, newListItems:workTask });
});

app.post('/',(req,res) => {
	const item = req.body.newItem;

	if(req.body.list === 'Work' ) {
		workTask.push(item);
		res.redirect('/work');
	}else {
		tasks.push(item);
		res.redirect('/');
	}
});


app.listen(port,() => {
	console.log(`Server running on ${port}`);
});
