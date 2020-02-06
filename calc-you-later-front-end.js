// Grab the calculate function from our other file. Imports can be tricky at first, so this one's a gimme!
const calculate = require('./calc-you-later-back-end')


// For the following steps, write the code, like the example above, DIRECTLY
// below the comment that describes it.

// That way our comments will describe what the code right under it does.
// Thus providing documentation for future readers. Including yourself!


// Grab the three user inputs from the command line. They'll be in a special
// array that the node environment gives us, called "process.argv".

// Arrays are like strings, in that they have something stored at each index.
// But unlike arrays, they don't store single-character strings--instead, they
// can store anything of any length!

// In process.argv's case, they store the strings the user types in. The tricky
// thing is that process.argv[0] returns the first thing the user types in,
// which is always "node". Similarly, process.argv[1] returns the second thing
// the user typed, which is the name of the file they wanted to run with node.
// So if we want to get the commands the user wants US to run, those strings
// start at index 2.

// Put the two numbers and the operation into variables so we can feed them into
// our calculate function. We can decide what order the user inputs go in by
// storing the approprate pair of them as the numbers, and the other one as the
// operation. By far the most user-friendly way to store them is to assume
// they're in [number] [operation] [number] order, as in:
// 5 + 5
// 6 minus 4
// 10 X 5

// Here we store what's in those process.argv indices in well-named variables.
const num1 = process.argv[2];
const num2 = process.argv[4];
const operation = process.argv[3];

// Stretch goal version:
// const firstNumberIndex = process.argv.findIndex((value) => !isNaN(value))
// const lastIndex = process.argv.length - 1;
// const words = process.argv.slice(firstNumberIndex + 1, lastIndex);

// const num1 = process.argv[firstNumberIndex];
// const num2 = process.argv[lastIndex];
// const operation = words.join(' ');


// Store the return value of our calculate function, making sure to feed it the correct values from our user input.
const result = calculate(num1, num2, operation);

// Then, print out that return value to the terminal.
console.log(result);