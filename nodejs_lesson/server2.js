let myhttp = require("http");

function doThis(req, res) {
  res.writeHead(200, { "Content-Type": "text/HTML" });
  res.write("<center>Welcome to my website </center>");
  res.write("<br>");
  res.write("<b>hello my friends</b>");
  res.write("</html>");
  res.end();
}

let server1 = myhttp.createServer(doThis);

server1.listen(4005);
