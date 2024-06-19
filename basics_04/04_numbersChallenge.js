// 1 Number Challenge
// Instructions:

// Create a variable called x that is a random number between 1 and 100 along with a variable called y that is a random number between 1 and 50.

// Create a variable for the sum, difference, product, quotient and remainder of x and y. Log the output in a string that shows he two numbers of x and y along with the operator and result.

// You can log the output string directly or put them in separate variables and log them like below.
// You can use string concatenation or template literals for the output.t


// const x = 10;   For static value
// const y = 20;

const x = Math.floor(Math.random() * 100+1);
const y = Math.floor(Math.random() * 50+1);

const sumFormula = x+y;
const sum = `${x} + ${y} = ${sumFormula}`

const difference = x-y;
const differeceOutput = `${x} - ${y} = ${difference}`
const product = x*y;
const productOutput = `${x} * ${y} = ${product}`
const quotent = x/y;
const quotentOutput = `${x} / ${y} = ${quotent}`
const remainder = x%y;
const remainderOutput = `${x} % ${y} = ${remainder}`

console.log(sum,differeceOutput, productOutput,quotentOutput ,remainderOutput);

