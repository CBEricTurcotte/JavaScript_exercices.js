// Exercise 4
// Use nested for loops to iterate over rows and columns.
// Add a continue statement to skip the inner loop when the row is 1 and the column is 1.

// Your code here
for (let rows = 0; rows < 3; rows++) {
  for (let column = 0; column < 2; column++) {
    if (rows === 1 && column === 1) {
      continue;
    }
    console.log("Row " + rows + ", Column " + column);
  }
}
// Expected Output:
// Row 0, Column 0
// Row 0, Column 1
// Row 1, Column 0
// Row 2, Column 0
// Row 2, Column 1

// In the terminal, copy & paste the code below and run it to see the result in the console.

// node 02_ControlFlow/14_Loop_Control_Statements/04_Nested_Loop_with_continue.js
