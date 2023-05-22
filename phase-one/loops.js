console.log(" ");
console.log("Even Odd Loop from 0 to 10 using a while loop");
let i = 0;
while (i <= 10) {
  if (i % 2 == 0) {
    console.log(i + " is even");
    i++;
  } else {
    console.log(i + " is odd");
    i++;
  }
}

console.log(" ");
console.log("Even Odd Loop from 0 to 10 using a for loop");
for (let n = 0; n <= 10; n++) {
  if (n % 2 == 0) {
    console.log(n + " is even");
  } else {
    console.log(n + " is odd");
  }
}

const fizzbuzzUntil = (num) => {
  let x = 1;
  while (x <= num) {
    if (x % 15 == 0) {
      console.log("Fizzbuzz");
      x++;
    } else if (x % 5 == 0) {
      console.log("Buzz");
      x++;
    } else if (x % 3 == 0) {
      console.log("Fizz");
      x++;
    } else {
      console.log(x);
      x++;
    }
  }
};
console.log(" ");
console.log("A FizzBuzz loop from 0 to 10 using a while loop");
console.log(fizzbuzzUntil(10));
