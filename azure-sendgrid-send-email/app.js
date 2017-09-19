var express = require('express');
var bodyParser = require('body-parser')
var app = express();

require('dotenv').load();

var sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.static(__dirname + '/public')); // Use Static file
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/apply', function (req, res) {
    sendEmail(res);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

function sendEmail(res) {
    var toEmails = "받는 메일";
    var fromEmail = "보내는 메일";
    const msg = {
        to: toEmails,
        from: fromEmail,
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    sgMail.send(msg, function (err, json) {
        if (err) { 
            return console.error(err);
        }

        res.send(json);
    });
}
