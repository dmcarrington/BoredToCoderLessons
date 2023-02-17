const person = {
  name: "Satoshi",
  age: 21,
  city: "Tokyo",
};

for (property in person) {
  console.log(property, ":", person[property]);
}

person.name = "David";
person["city"] = "Chester";

for (property in person) {
  console.log(property, ":", person[property]);
}
