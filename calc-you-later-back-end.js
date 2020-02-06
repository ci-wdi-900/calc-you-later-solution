/******************
 * YOUR CODE HERE *
 ******************/

//  Takes in two numbers and a string representing an operation.
// function calculate(num1: number, num2: number, operation: string): number
function calculate(num1, num2, operation) {
  num1 = Number(num1);
  num2 = Number(num2);

  const isAddition = operation === '+'
    || operation === 'plus'
    || operation === 'added to';
  const isSubtraction = operation === '-'
    || operation === 'minus'
    || operation === 'subtracted from';
  const isMultiplication = operation.toLowerCase() === 'x'
    || operation === 'times'
    || operation === 'multiplied by';
  const isDivision = operation === '/'
    || operation === 'divided by';
  const isModulus = operation === '%'
    || operation === 'modulus'
    || operation === 'mod';

  if (isAddition) {
    return num1 + num2;
  } else if (isSubtraction) {
    return num1 - num2;
  } else if (isMultiplication) {
    return num1 * num2;
  } else if (isDivision) {
    return num1 / num2;
  } else if (isModulus) {
    return num1 % num2;
  } else {
    return `Sorry, that's not a mathematical operation!`
  }
}


/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;