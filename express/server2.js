let exp = require("express");
let app = exp();

app.get("/", function (req, res) {
  res.send("Hello my friends");
});

app.get("/trainer/:name", function (req, res) {
  const name = req.params.name;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Trainer name: <b>" + name + "</b>");
  if (name === "shafeeq") {
    res.write(" subject: HTML, CSS, Python");
  } else if (name === "tadas") {
    res.write(" subject: scala, java");
  } else {
    res.write(" not sure");
  }
  res.end();
});

app.listen(8001);
