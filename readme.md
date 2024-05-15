a JavaScript program to implement a banking system with account types of savings account and current account. The savings account class uses ES6 class syntax with private properties and methods, and the current account class uses Object.create with private properties and methods.



The program defines the Account class with protected properties and methods for common functionality. The savings account class extends the Account class and adds a calculateInterest method for calculating interest on the account balance. The current account class is created by cloning the Account prototype and adding an overdraft limit property.



The program allows users to create new savings or current accounts, deposit or withdraw funds, and calculate interest (for savings accounts). It also allows users to view their account balance and transaction history.