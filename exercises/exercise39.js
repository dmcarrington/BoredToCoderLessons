function divide(a, b) {
  if (b == 0) {
    throw "divide by zero";
  }
  return a / b;
}

const a = 1;
const b = 0;

try {
  console.log(divide(a, b));
} catch (error) {
  console.log(error);
}
