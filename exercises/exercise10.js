const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt("Enter a number: "));
if (isNaN(num)) {
  console.log("Invalid number input, must be an integer!");
  return;
}
if (num % 2) {
  console.log(num, " is odd");
} else {
  console.log(num, " is even");
}
