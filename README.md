# JavaScript Division by Zero Bug
This repository demonstrates a common error in JavaScript: incorrect handling of division by zero. The `foo` function attempts to divide `a` by `b`, but it does not properly handle the case where `b` is zero. This leads to unexpected behavior, potentially causing errors or producing incorrect results.

## Bug Description
The `foo` function incorrectly returns 0 when `b` is 0.  A more robust solution is needed to handle division by zero gracefully, perhaps by throwing an error or returning a special value like `NaN` or `Infinity`. 

## Solution
The solution file (`bugSolution.js`) provides a corrected version of the `foo` function, demonstrating how to handle division by zero appropriately.