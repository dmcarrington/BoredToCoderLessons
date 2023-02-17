const prompt = require("prompt-sync")({ sigint: true });

let tempF = prompt("Enter temperature in Farenheit: ");
const tempC = (tempF - 32) / 1.8;
if (tempF <= 32) {
  console.log("Freezing!", tempF, "F / ", tempC, "C");
} else if (tempF >= 212) {
  console.log("Boiling!", tempF, "F / ", tempC, "C");
} else {
  console.log("Just right!", tempF, "F / ", tempC, "C");
}
