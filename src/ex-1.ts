function calculate(a: number, b: number, operator: string) {
  debugger
  //Start Coding Here
  switch (operator) {
    case "add":
      return a + b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      return "Invalid operator";
  }
}
debugger; 
console.log(calculate(10, 5, "add")); // 15
console.log(calculate(10, 5, "multiply")); // 50
console.log(calculate(10, 5, "divide")); // 2
console.log(calculate(10, 5, "mod")); // "Invalid operator"
