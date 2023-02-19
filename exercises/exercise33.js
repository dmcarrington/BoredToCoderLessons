class BankAccount {
  #balance = 0;
  accountNo = 0;
  overdraftLimit = 0;
  constructor(accountNo, overdraftLimit) {
    this.accountNo = accountNo;
    this.overdraftLimit = overdraftLimit;
  }
  printStatement() {
    console.log("****************");
    console.log("Account ", this.accountNo);
    console.log("Balance: ", this.#balance);
    console.log("Overdraft limit: ", this.overdraftLimit);
    console.log("****************");
  }
  deposit(amount) {
    this.#balance += amount;
    console.log("Deposited: ", amount);
    this.printStatement();
  }
  withdraw(amount) {
    if (this.#balance + this.overdraftLimit >= amount) {
      this.#balance -= amount;
      console.log("withdrawn: ", amount);
    } else {
      console.log("Insufficient remaining balance:", this.#balance);
    }
    this.printStatement();
  }
}

myAccount = new BankAccount(1234, 500);
myAccount.deposit(1000);
myAccount.withdraw(100);
myAccount.withdraw(1000);
myAccount.withdraw(500);
