var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname + '/public')); // Use Static file
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/apply', function (req, res) {
    var name = req.body.name;
    var testJson = {
        result: true,
        msg: "hello, " + name
    };

    res.json(testJson)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
