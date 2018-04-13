var express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {

  res.send("hello world!");
});

var server = app.listen(8088, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Mail app listening at http://%s:%s", host, port)
});