const getNumberSign = (num) => {
  if (num === 0) {
    return "zero";
  } else if (num < 0) {
    return "negative";
  } else {
    return "positive";
  }
};

console.log(getNumberSign(3));
console.log(getNumberSign(0));
console.log(getNumberSign(-5));

const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length == validLength) {
    return true;
  } else {
    return false;
  }
};

console.log(isValidLength("00"));
console.log(isValidLength("00112233445"));

const fizzBuzz = (num) => {
  if (num % 15 == 0) {
    return "FizzBuzz";
  } else if (num % 5 == 0) {
    return "Buzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else {
    return num;
  }
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(8));
console.log(fizzBuzz(15));
console.log(fizzBuzz(18));
console.log(fizzBuzz(20));
