let fileSystem = require("fs");

function errorOccurred(error) {
  console.log(error);
}

fileSystem.writeFile("tadas.txt", "we are going to manchester", errorOccurred);
