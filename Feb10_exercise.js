const person = {
  name: "David",
  age: 21,
  city: "Chester",
};

function greet(p) {
  console.log("Hello,", p.name);
}

function getPersonInfo(p) {
  console.log(p.name, ",", p.age, "years old, from", p.city);
}

greet(person);
getPersonInfo(person);

/**
 * JSON (JavaScript Object Notation) is a data interchange format, representing attributes and values in
 *  a human-readable format. It is capable of represeting all variable types used in Javascript as attribute-value pairs.
 * JSON data is principally used in passing data between back-end services and web front-ends over API,
 *  either to allow the page to send requests, or receiving response data from the server side. JSON can
 *  also be used for reading and writing documents to common databases e.g. mongoDB and Elastic.
 */

console.log("JavaScript Object to JSON conversion result:");
console.log(JSON.stringify(person, null, 2));
