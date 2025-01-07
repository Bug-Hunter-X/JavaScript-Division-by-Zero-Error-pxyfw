function foo(a, b) {
  if (b === 0) {
    throw new Error('Division by zero'); // Throw an error
  } else {
    return a / b; 
  }
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(10,0)); // throws error