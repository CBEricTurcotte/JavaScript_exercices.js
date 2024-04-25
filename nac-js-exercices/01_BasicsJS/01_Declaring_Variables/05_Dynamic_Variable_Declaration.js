// Exercise 5
// Create a variable named 'productName' and assign it the value 'Smartphone'.
// Dynamically create a new variable named 'numProducts' and assign it the value 50.

// Your code here
let productName = "Smartphone";
let numProducts = 50;

console.log(productName);
console.log(numProducts);
// Expected Output: Smartphone
// Expected Output: 50

// In the terminal, copy & paste the code below and run it to see the result in the console.

// node 01_BasicsJS/01_Declaring_Variables/05_Dynamic_Variable_Declaration.js

// let productName = "Smartphone";
// let numProducts = 50;

let dynamicVar;

if (numProducts > 0) {
  dynamicVar = productName + "s"; // Pluralize productName if numProducts is greater than 0
} else {
  dynamicVar = "No products available"; // Set dynamicVar to a default message if numProducts is 0 or less
}

console.log(dynamicVar); // Output depends on the value of numProducts
