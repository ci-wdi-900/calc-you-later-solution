const calculate = require('./calculate')

const num1 = process.argv[2];
let num2 = process.argv[4];
let operation = process.argv[3];

// The below code checks (simply and inexpertly)
// if we have 4 arguments instead of 3 and if the third argument is also a word.
// In other words, [number] [string] [string] [number] instead of the usual
// [number] [string] [number] format. If so, we put the two strings together
// and grab the correct second number so we can pass them to `calculate`.
if (isNaN(num2) && !isNaN(process.argv[5])) {
  operation = process.argv[3] + ' ' + process.argv[4];
  num2 = process.argv[5];
}

const result = calculate(num1, num2, operation);
console.log(result);