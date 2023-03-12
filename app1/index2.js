let exp = require("express");
let app = exp();

function writeHeader(req, res, next) {
  res.writeHead(200, { "Content-Type": "text/html" });
  next();
}

function forHomePage(req, res, next) {
  res.write("<br>Welcome to home page<br>");
  next();
}

function forTrainers(req, res, next) {
  res.write("<br>Welcome to trainers<br>");
  next();
}

app.use(writeHeader);
app.use("/trainers", forTrainers);

app.get("/", function (req, res) {
  res.write("<center>Welcome to my home page</center>");
  res.write("<br><a href = '/trainers'>Trainers</a>");
  res.end();
});

app.get("/trainers", function (req, res) {
  res.write("Shafeeq<br>");
  res.write("Ed<br>");
  res.write("Tadas<br>");
  res.write("John");
  res.end();
});

app.get("/trainers/shafeeq", function (req, res) {
  res.write("shafeeq<br>");
});

app.listen(8001);
