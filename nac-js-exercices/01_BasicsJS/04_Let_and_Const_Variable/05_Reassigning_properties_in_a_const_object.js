// Exercise 5
// Declare a constant variable named 'car' and assign it an object with properties 'brand' and 'color'.
// Attempt to reassign the 'color' property.

// Your code here
const car = { brand: "Toyota", color: "Red" };
// Attempt to reassign the 'color' property
const updatedCar = { ...car, color: "Blue" };

console.log(updatedCar);
// Expected Output: { brand: 'Toyota', color: 'Blue' }

// In the terminal, copy & paste the code below and run it to see the result in the console.

// node 01_BasicsJS/04_Let_and_Const_Variable/05_Reassigning_properties_in_a_const_object.js
