let myhttp = require("http");

function doThis(req, res) {
  res.writeHead(200, { "Content-Type": "text/HTML" });

  if (req.url == "/") {
    res.write("Home page<br>");
    res.write(`<a href="http://localhost:4005/aboutus">About us</a><br>`);
    res.write(`<a href="http://localhost:4005/services">Services</a><br>`);
  }
  if (req.url == "/aboutus") {
    res.write("We are the teams of 16");
  }
  if (req.url == "/services") {
    res.write("We provide Bitcoin services");
  }

  res.end();
}

let server1 = myhttp.createServer(doThis);

server1.listen(4005);
