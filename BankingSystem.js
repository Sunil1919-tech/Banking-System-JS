// Define the Account class using constructor functions with protected properties and methods

function Account(accountNum, accountHolder, balance) {
    this._accountNum = accountNum;
    this._accountHolder = accountHolder;
    this._balance = balance;
    this._history = []
}

Account.prototype._updateBalance = function(amount){
    this._balance += amount;
    this._history.push({type:"update", amount});
    return this;
}

Account.prototype._canWidthraw = function(amount){
    return this._balance >= amount;
}

Account.prototype.deposit = function(amount){
    this._updateBalance(amount);
    return this;
}

Account.prototype.withdraw = function(amount){
    if(this._canWidthraw(amount)){
        this._updateBalance(-amount)
    }else{
        console.log("insufficient balance")
    }
    return this
}

Account.prototype.getBalance = function(amount){
    return this._balance;
}

Account.prototype.getHistory = function(amount){
    return this._history;
}


 // Define the SavingsAccount class as a subclass of Account using ES6 class syntax with private properties and methods

 class SavingsAccount extends Account{

    #interestRate;
    constructor(accountNum, accountHolder, balance, interestRate){
        super(accountNum, accountHolder, balance);
        this.#interestRate = interestRate;
    }

    #calculateInterest(){
        const interest = this._balance * this.#interestRate;
        this._updateBalance(interest);
        this._history.push({type:"interest", amount: interest})
        return this;
    }

    deposit(amount){
        this._updateBalance(amount);
        return this;
    }
    withdraw(amount) {
        if (this._canWithdraw(amount)) {
          this._updateBalance(-amount);
        } else {
          console.log("Insufficient balance.");
        }
        return this;
      }

      calculateInterest() {
        this.#calculateInterest();
        return this;
      }
 }

//  // Define the CurrentAccount class as a subclass of Account using Object.create with private properties and methods
//  const CurrentAccount = Object.create(Account.prototype);
//  CurrentAccount.constructor = function(accountNum, accountHolder, balance, overdraft) {
//    Account.call(this, accountNum,accountHolder,balance,overdraft)
//  }

console.log("connected")

const account1 = new Account(45485, "Sunil", 100);
const account2 = new Account(485, "Salman", 579);

console.log(account1)
// console.log(account2)

// account1._updateBalance(578);
// account1._updateBalance(1000);
// account1.deposit(100);

// console.log(account1.getHistory());

// account1.withdraw(500);
// console.log (account1.getBalance());
// account2.withdraw(700)

const sunil = new SavingsAccount(13546, "Sethu", 50000, 12);
console.log(sunil)
sunil.deposit(1000);
sunil._updateBalance(150);

sunil.calculateInterest();
