let express = require("express");
let app = express();

app
  .route("/BoredToCoder")
  .get(function (req, res) {
    res.send("BoredToCoder, Get method called");
  })
  .post(function (req, res) {
    res.send("BoredToCoder, POST method called");
  })
  .put(function (req, res) {
    res.send("BoredToCoder, PUT method called");
  });

app
  .route("/learnProgramming")
  .get(function (req, res) {
    res.send("learnProgramming, Get method called");
  })
  .post(function (req, res) {
    res.send("learnProgramming, POST method called");
  })
  .put(function (req, res) {
    res.send("learnProgramming, PUT method called");
  });

app.listen(8001);
