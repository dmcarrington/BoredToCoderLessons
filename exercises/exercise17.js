const laptop = {
  brand: "Dell",
  ram: "16GB",
  storage: "1TB",
};

const person = {
  name: "Satoshi",
  age: 21,
  city: "Tokyo",
  laptop: laptop,
};

console.log("laptop brand is", person.laptop["brand"]);
