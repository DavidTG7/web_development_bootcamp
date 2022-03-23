
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/', function(req, res) {

  var weight = Number(req.body.weight);
  var height = Number(req.body.height) * Number(req.body.height);
  var result = Math.floor(weight / height);

  res.send('<h2>RESULT</h2><br>Your BMI is: ' + result);
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
});
