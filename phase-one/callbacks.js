const printMessage = () => {
  console.log(" ");
  console.log("Hello there, this messaged had a two second Timout");
};

setTimeout(printMessage, 2000);

const printHello = () => {
  console.log(" ");
  console.log("Hello again! This one had a three second Timout");
};

setTimeout(printHello, 3000);

const printExercise = () => {
  console.log(" ");
  console.log(
    "Hello! This one took five seconds, and it's going via the excuteAfterDelay function"
  );
};

const executeAfterDelay = (sec, printFunction) => {
  let newSec = sec * 1000;
  setTimeout(printFunction, newSec);
};

const printCounter = () => {
  console.log(" ");
  console.log("Seven seconds this time");
  console.log("Run node counter.js to get a one second incrementing counter");
};

executeAfterDelay(5, printExercise);
executeAfterDelay(7, printCounter);
