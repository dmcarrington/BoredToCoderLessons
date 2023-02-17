function truthyOrFalsy(value) {
  if (value) {
    console.log(value, "is Truthy");
  } else {
    console.log(value, "is Falsy");
  }
}

const sampleVals = [1, 0, true, false, "a", "", undefined, NaN];
sampleVals.forEach(function (val) {
  truthyOrFalsy(val);
});
