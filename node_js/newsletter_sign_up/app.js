const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req, res) {

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us14.api.mailchimp.com/3.0/lists/8760cd87d7";

  const options = {
    method: "POST",
    auth: "david1:8cc4b2413b83f7ef88e0c3234470181b-us14"
  };

  const request = https.request(url, options, function(response) {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html")
    }
    else {
      res.sendFile(__dirname + "/failure.html")
    };


    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);

  request.end();

});

app.post("/failure", function(req, res) {
  res.redirect("/")
});

app.post("/success", function(req, res) {
  res.redirect("/")
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.")
});



// api key
// 8cc4b2413b83f7ef88e0c3234470181b-us14

// List ID
// 8760cd87d7
