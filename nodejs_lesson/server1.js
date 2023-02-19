let http1 = require("http");

function process(a, b) {
  console.log("Hello my friends");
}
let server1 = http1.createServer(process);
server1.listen(4005);
