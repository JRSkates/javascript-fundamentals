const candies = [
  { name: 'Aero', price: 1.99 },
  { name: 'Skitties', price: 2.99 },
  { name: 'Mars', price: 1.49 },
  { name: 'Maltesers', price: 3.49 },
  { name: 'Skittles', price: 1.49 },
  { name: 'Starburst', price: 5.99 },
  { name: 'Ricola', price: 1.99 },
  { name: 'Polkagris', price: 5.99 },
  { name: 'Pastila', price: 4.99 },
  { name: 'Mentos', price: 8.99 },
  { name: 'Raffaello', price: 7.99 },
  { name: 'Gummi bears', price: 10.99 },
  { name: 'Fraise Tagada', price: 5.99 }
];

// first argument is a string - return candies that start with
// these letters AND you can afford with the second argument
// max budget

const capitalFirstLetter = (str) => {
  return str && str[0].toUpperCase() + str.slice(1)
}

const searchCandies = (string, max_price) => {
  let capString = capitalFirstLetter(string);
  let functionFilter = candies.filter(candy => candy.price < max_price && candy.name.startsWith(capString));
  let final = functionFilter.map(candy => candy.name);
  return final;
};

// console.log(capitalFirstLetter("test"))
// console.log(capitalFirstLetter("Test"))
// console.log(searchCandies('Ma', 10))
// console.log(searchCandies('Ma', 2))
// console.log(searchCandies('S', 10))

module.exports = searchCandies;
