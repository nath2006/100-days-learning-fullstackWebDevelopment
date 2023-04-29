const https = require("https");
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");


const port = 9000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/singnup.html")
});

app.post("/", (req, res) => {
    let firstname = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;

    const data = {
        members : [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastName
                }
            }
        ]
    };
    
    const jsonData = JSON.stringify(data);

    const url = "https://us9.api.mailchimp.com/3.0/lists/3fb49b20d2";
    const option = {
        method: "POST",
        auth: "YourAuthCode"
    };

    const request = https.request(url, option, (response) => {
        console.log(response.statusCode);
        if(response.statusCode === 200){
            res.sendFile(__dirname + "/public/succes.html")
        }else{
            res.sendFile(__dirname + "/public/failed.html")
        }
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        });
    });
    request.write(jsonData);
    request.end();
});

app.post("/failed", () => {
    res.redirect("/");
});


app.post("/succes", () => {
    res.redirect("/");
});

app.listen (port, () => {
    console.log(`localhost:${port}`);
});

