// Exercise 4
// Declare a function named 'greetUser' that takes a parameter 'name' and a default parameter 'greeting' set to 'Hello'.
// The function should return a personalized greeting.

// Your code here
function greetUser(name, greeting = "Hello") {
  return greeting + ", " + name + "!";
}

console.log(greetUser(name));
// Expected Output: Hello, John!

// In the terminal, copy & paste the code below and run it to see the result in the console.

// node 03_Functions/16_Declaring_Functions/04_Function_with_Default_Parameter.js
