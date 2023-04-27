let exp = require("express");
let app = exp();

app.get("/intro", function (req, res) {
  res.send("welcome to Introduction to Express");
});

app.post("/shafeeq", function (req, res) {
  res.send("shafeeq is back via POST method");
});

app.get("/shafeeq", function (req, res) {
  res.send("shafeeq is back via GET method");
});

app.put("/shafeeq", function (req, res) {
  res.send("shafeeq is back via PUT method");
});

app.delete("/shafeeq", function (req, res) {
  res.send("shafeeq is back via DELETE method");
});

app.listen(8001);
