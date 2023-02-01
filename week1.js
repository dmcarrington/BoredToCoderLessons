const bands = [
  {
    max: 1,
    description: "Shrimp",
  },
  {
    max: 10,
    description: "Crab",
  },
  {
    max: 50,
    description: "Octopus",
  },
  {
    max: 100,
    description: "Fish",
  },
  {
    max: 500,
    description: "Dolphin",
  },
  {
    max: 1000,
    description: "Shark",
  },
  {
    max: 5000,
    description: "Whale",
  },
  {
    max: 21000000,
    description: "Humpback",
  },
];

let bitcoin = prompt("Please enter amount of Bitcoin");
for (let index = 0; index < bands.length; index++) {
  if (bitcoin < bands[index].max) {
    console.log("You are a ", bands[index].description);
    break;
  }
}
