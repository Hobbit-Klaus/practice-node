var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname + '/public')); // Use Static file
app.use(bodyParser.urlencoded({ extended: false })); 

app.post('/apply', function (req, res) {
    res.send("Hello " + req.body.name);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
