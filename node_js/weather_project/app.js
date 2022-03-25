const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {


  const query = req.body.cityName;
  const apiKey = "e33e05258b1ff18174e03d6f8b509ec8";
  const units = "metric";

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
  https.get(url, function(response) {
    // console.log(response.statusCode);
    var my_response = response.statusCode;
    if (my_response == 200) {

      console.log(`${my_response} Successful response`)
    };

    response.on("data", function(data) {
      const weather_data = JSON.parse(data);
      const temp = weather_data.main.temp;
      const description = weather_data.weather[0].description;
      const city = weather_data.name;
      const icon = weather_data.weather[0].icon;
      const image = "<img src='http://openweathermap.org/img/wn/" + icon + "@2x.png'>";

      res.send("<h2>The temperatue in " +
        "<em style='color:blue'>" + city + "</em>" +
        " is " + "<em style='color: red'>" + temp + "	°C</em>" +
        ", with " + description + ".</h2>" + "<br>" +
        image + image + image);
    });
  });
});



app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});
