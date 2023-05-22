console.log("Hello - I am a file!");

const sum = 2 + 2;

console.log("2 + 2 = " + sum);

const greeting = "Hello ";
const someName = "Makers";

console.log(greeting + someName);


const printMessage = (message) => {
  console.log(message);
};

const doSimpleSum = (num1, num2) => {
  const result = num1 + num2;
  return result;
};

const returnFour = () => {
  return 4;
};

const thisIsFour = returnFour;


printMessage("My first JavaScript function!");
console.log(thisIsFour());

module.exports = printMessage;