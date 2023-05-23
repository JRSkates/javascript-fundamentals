const nameArr = ["Jack", "Tom", "Harry", "Matt"];

console.log(" ");
console.log("An Array and the 2nd value in the array");
console.log(nameArr);
console.log(nameArr[1]);

const newArr = nameArr.concat("Phil");

console.log(" ");
console.log("newArr with a value concatenated on the end");
console.log(newArr);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(" ");
console.log("numArr executed with the forEach function");
numArr.forEach((element) => console.log(element));

const addToBatch = (arr, num) => {
  if (arr.length < 5) {
    arr = arr.concat(num);
    return arr;
  } else {
    return arr;
  }
};

console.log(" ");
console.log(
  "addToBatch function created, concats to an array if the length is less than 5"
);
console.log(addToBatch([1], 3));
console.log(addToBatch([1, 2, 3], 4));
console.log(addToBatch([1, 2, 3, 4, 5, 6], 7));
console.log(addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
