const express = require('express');
const https = require('https'); 
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
// app.get('/', (req, res) => {
  
// });
    
app.post('/', (req, res) => {
    const query = req.body.cityName;;
    const apiKey = '028932a5426a103813816f4013cf6ba5';
    const units = 'metric';
    const language = 'id';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&lang=${language}&appid=${apiKey}`;
    https.get(url, (response) => {
        console.log(response.StatusCode);

        response.on('data', (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desripction = weatherData.weather[0].description;
            const location = weatherData.name;
            const icon = weatherData.weather[0].icon;
            const imgUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
            console.log(imgUrl);
            res.write(`<h1>The temprature in ${location} is ${temp} degress</h1>`);
            res.write(`<h3>Wheather Description : ${desripction}</h3>`);
            res.write(`<img src = ${imgUrl}>`)
            res.send();
        });
    });
});



app.listen(port, () => {
    console.log(`Your server running on localhost:${port}`);
});