function salarySlip(salary, absences) {
  try {
    let tax = (salary * 21) / 100;
    if (absences >= 6) {
      throw "too many absences";
    }
    if (salary <= 100) {
      throw "very low salary";
    }
    console.log(tax);
    console.log(absences);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("AAA");
  }
}

salarySlip(2000, 6);
