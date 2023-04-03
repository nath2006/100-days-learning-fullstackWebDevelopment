const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const port = 5000;

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + "/index.html");
// });

// app.post("/", (req, res) => {
//     const namaDepan = req.body.namaDepan;
//     const namaBelakang = req.body.namaBelakang;

//     const namaLengkap = namaDepan+ namaBelakang;

//     res.send(`Selamat datang ${namaDepan + namaBelakang}`);
// });
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/', (req,res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    // [berat badan (kg) : (tinggi badan(m))kuadrat] 
    const heightPow = Math.pow(height, 2);
    const result = weight / heightPow * 720;

    res.send(`Your BMI is ${result}`);
});


app.listen(port, () => {
    console.log(`Your server runing on localhost:${port}`);
});