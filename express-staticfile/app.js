var express = require('express');
var app = express();

// Use Static file
app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});