class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log("Сума для внесення має бути більше нуля!");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else if (amount > this.balance) {
      console.log("Недостатньо коштів для зняття!");
    } else {
      console.log("Сума для зняття має бути більше нуля!");
    }
  }

  getBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance()); // 1000
account1.deposit(500);
console.log(account1.getBalance()); // 1500
account1.withdraw(200);
console.log(account1.getBalance()); // 1300
account1.withdraw(2000); // Недостатньо коштів для зняття!
account1.deposit(-100); // Сума для внесення має бути більше нуля!
