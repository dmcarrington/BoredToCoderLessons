let fileSystem = require("fs");

function readData(err, data) {
  console.log(data);
}

//fileSystem.readFile("./data.txt", "utf8", readData);

fileSystem.readFile("./data.txt", "utf8", function (err, data) {
  console.log(err);
  console.log("------------------");
  console.log(data);
});
