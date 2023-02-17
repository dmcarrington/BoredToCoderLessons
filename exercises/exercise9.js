const percentage = 79;
let grade = "F";
switch (true) {
  case percentage >= 90 && percentage <= 100: {
    grade = "A";
    break;
  }
  case percentage >= 80 && percentage <= 89: {
    grade = "B";
    break;
  }
  case percentage >= 70 && percentage <= 79: {
    grade = "C";
    break;
  }
  case percentage >= 60 && percentage <= 69: {
    grade = "D";
    break;
  }
}
console.log(grade);
