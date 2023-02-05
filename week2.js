let x = [11, 22, 33, 44];

let total = 0;
for (i = 0; i < x.length; i++) {
  console.log("element [", i, "]=", x[i]);
  total += x[i];
  console.log("total: ", total);
}

///////////////////////////////////////////////

function num(val) {
  let words = "";
  switch (val) {
    case 1:
      words = "one";
      break;
    case 2:
      words = "two";
      break;
    case 3:
      words = "three";
      break;
    case 4:
      words = "four";
      break;
    case 5:
      words = "five";
      break;
    case 6:
      words = "six";
      break;
    case 7:
      words = "seven";
      break;
    case 8:
      words = "eight";
      break;
    case 9:
      words = "nine";
      break;
    case 10:
      words = "ten";
      break;
    case 11:
      words = "eleven";
      break;
    case 12:
      words = "twelve";
      break;
    case 13:
      words = "thirteen";
      break;
    case 14:
      words = "fourteen";
      break;
    case 15:
      words = "fifteen";
      break;
    case 16:
      words = "sixteen";
      break;
    case 17:
      words = "seventeen";
      break;
    case 18:
      words = "eighteen";
      break;
    case 19:
      words = "nineteen";
      break;
  }
  return words;
}

function tens(number) {
  let words = "";
  switch (number) {
    case 2:
      words = "twenty";
      break;
    case 3:
      words = "thirty";
      break;
    case 4:
      words = "forty";
      break;
    case 5:
      words = "fifty";
      break;
    case 6:
      words = "sixty";
      break;
    case 7:
      words = "seventy";
      break;
    case 8:
      words = "eighty";
      break;
    case 9:
      words = "ninety";
      break;
  }
  return words;
}

function printNum(number) {
  const ones = number % 100;
  const hundreds = parseInt(number / 100) % 10;
  const thousands = parseInt(number / 1000);

  let result = "";
  if (thousands) {
    result += num(thousands) + " thousand ";
  }
  if (hundreds) {
    result += num(hundreds) + " hundred ";
  }
  if (ones >= 20) {
    result += tens(parseInt(ones / 10));
    result += " " + num(ones % 10);
  } else {
    result += num(ones);
  }
  console.log(result);
}

const nums = [5006, 7006, 51, 7066, 5050];
nums.forEach(function (n) {
  printNum(n);
});

///////////////////////////////////////////////

function tax(salary) {
  let tax = 0;
  if (salary < 1000) {
    tax = 0;
  } else if (salary >= 1000 && salary < 2000) {
    tax = (salary * 21) / 100;
  } else if (salary >= 2000 && salary < 3000) {
    tax = (salary * 30) / 100;
  } else {
    tax = (salary * 40) / 100;
  }

  let net = salary - tax;
  return tax;
}

salary = 9000;
console.log("Salary is ", salary);
console.log("tax is: ", tax(salary));
console.log("Net: ", salary - tax(salary));

///////////////////////////////////////////////

function addition(a, b) {
  let c = a + b;
  return c;
}

let t = addition(60, 70);
console.log(t);
console.log(addition(603, 703));

///////////////////////////////////////////////

function salary(name, salary) {
  let tax = 0;
  if (salary < 1000) {
    tax = 0;
  } else if (salary >= 1000 && salary < 2000) {
    tax = (salary * 21) / 100;
  } else if (salary >= 2000 && salary < 3000) {
    tax = (salary * 30) / 100;
  } else {
    tax = (salary * 40) / 100;
  }

  let net = salary - tax;
  console.log("Employee name: ", name);
  console.log(name, "salary: ", salary);
  console.log("Tax: ", tax);
  console.log("Net: ", net);
}

salary("shafeeq", 1200);
salary("John", 2100);

///////////////////////////////////////////////

function shafeeq() {
  console.log("Hello");
  console.log("my friends");
}

shafeeq();
console.log("----------------");
shafeeq();
shafeeq();

///////////////////////////////////////////////

for (let a = 1, b = 10, c = 100; a <= 10; a++, b += 10, c += 100) {
  console.log("a: ", a, ", b: ", b, ", c: ", c);
}

let A = 3;
switch (A) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  default:
    console.log("unrecognised ", A);
}

let day = 3;
switch (day) {
  case 2:
  case 5:
    console.log("Instalaltions");
    break;
  case 3:
  case 6:
    console.log("Documentations");
    break;
  case 1:
  case 4:
  case 7:
    console.log("Take backups");
    break;
}
