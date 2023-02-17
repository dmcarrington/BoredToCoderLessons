const lizard = {
  legs: 4,
  tail: true,
};

const snake = {
  tail: true,
};

const objects = [lizard, snake];
const fields = ["legs", "tail"];

objects.forEach(function (obj) {
  for (i in fields) {
    if (obj[fields[i]] !== undefined) {
      console.log(obj[fields[i]]);
    } else {
      console.log("Object does not have value ", fields[i]);
    }
  }
});
