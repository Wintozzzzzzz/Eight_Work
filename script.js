var depositAmount = prompt("Enter the deposit amount:");
var interestRate;

depositAmount = parseInt(depositAmount);

if (depositAmount <= 1000) {
    interestRate = 10; 
} else if (depositAmount >= 1000 && depositAmount < 5000) {
    interestRate = 15; 
} else {
    interestRate = 20; 
}

var interest = (depositAmount * interestRate) / 100;


var totalAmount = depositAmount + interest;


console.log("Initial deposit amount: $" + depositAmount);
console.log("Interest rate: " + interestRate + "%");
console.log("Interest earned: $" + interest);
console.log("Total amount after interest: $" + totalAmount);
