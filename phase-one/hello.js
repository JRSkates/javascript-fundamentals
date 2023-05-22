console.log(
  "Hello - I am the first file! You might be running this from main.js"
);

const sum = 2 + 2;
console.log(" ");
console.log("A simple sum:");
console.log("2 + 2 = " + sum);

const greeting = "Hello ";
const someName = "Makers";

console.log(" ");
console.log("A simple greeting");
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

console.log(" ");
console.log("The next message is..");
printMessage("My first JavaScript function!");

console.log(" ");
console.log("Here is an inherieted Function that returns 4");
console.log(thisIsFour());

module.exports = printMessage;
