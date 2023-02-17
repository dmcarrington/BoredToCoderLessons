const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt("Enter a number: "));
if (isNaN(num)) {
  console.log("Invalid number input, must be an integer!");
  return;
}

const isEven = num % 2 ? false : true;
const isPositive = num >= 0;
const isMultipleof4 = !(num % 4);

console.log("Is Even: ", isEven);
console.log("Is Positive: ", isPositive);
console.log("Is Multiple of 4: ", isMultipleof4);
