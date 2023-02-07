function ones(number) {
  let words = "";
  switch (number) {
    case 1:
      words = "One";
      break;
    case 2:
      words = "Two";
      break;
    case 3:
      words = "Three";
      break;
    case 4:
      words = "Four";
      break;
    case 5:
      words = "Five";
      break;
    case 6:
      words = "Six";
      break;
    case 7:
      words = "Seven";
      break;
    case 8:
      words = "Eight";
      break;
    case 9:
      words = "Nine";
      break;
    case 10:
      words = "Ten";
      break;
    case 11:
      words = "Eleven";
      break;
    case 12:
      words = "Twelve";
      break;
    case 13:
      words = "Thirteen";
      break;
    case 14:
      words = "Fourteen";
      break;
    case 15:
      words = "Fifteen";
      break;
    case 16:
      words = "Sixteen";
      break;
    case 17:
      words = "Seventeen";
      break;
    case 18:
      words = "Eighteen";
      break;
    case 19:
      words = "Ninteen";
      break;
  }
  return words;
}

function ty(number) {
  let words = "";
  switch (number) {
    case 20:
      words = "Twenty";
      break;
    case 30:
      words = "Thirty";
      break;
    case 40:
      words = "Forty";
      break;
    case 50:
      words = "Fifty";
      break;
    case 60:
      words = "Sixty";
      break;
    case 70:
      words = "Seventy";
      break;
    case 80:
      words = "Eighty";
      break;
    case 90:
      words = "Ninety";
      break;
  }
  return words;
}

function printNumber(number) {
  let result = "The number you have entered is ";
  let newnumber = number;
  if (newnumber <= 9999 && newnumber >= 1) {
    // thousands
    if (newnumber >= 1000) {
      result = ones(parseInt(newnumber / 1000)) + " thousand";
      newnumber = newnumber % 1000;
      // add comma after thousands if we also have hundreds
      if (newnumber >= 100) {
        result += ", ";
      } else if (newnumber) {
        // add "and" if we only have tens or ones after thousands
        result += " and";
      }
    }

    // hundreds
    if (newnumber >= 100) {
      result += ones(parseInt(newnumber / 100)) + " hundred";
      newnumber = newnumber % 100;
      // add 'and' after hundreds if we have any following digits
      if (newnumber) {
        result += " and";
      }
    }

    // tens
    if (newnumber >= 20) {
      result += " " + ty(parseInt(newnumber / 10) * 10);
      newnumber = newnumber % 10;
    }

    // ones & teens
    if (newnumber >= 1) {
      result += " " + ones(newnumber);
    }
    console.log(result);
  } else {
    console.log("The number you have entered is not valid for this program");
  }
}

let newnumber = 2029;
printNumber(newnumber);
