const names = ['Anna', 'Li', 'Charlie', 'Mary', 'Jo'];

const isShortedThanThree = (element) => {
  if (element.length < 3) {
    return true;
  } else {
    return false;
  }
};

const namesShorterThanThree = names.filter(isShortedThanThree);

console.log(' ')
console.log('using the filter function on an array, with another created function as an argument')
console.log('this created function iterates over the array and returns true if the element is shorter than 3')
console.log(namesShorterThanThree);

const getUppercased = (element) => {
    return element.toUpperCase();
};

const uppercasedNames = names.map(getUppercased);
console.log(uppercasedNames);

const phoneNumbers = [ 
  '1763687364',
  '4763687363',
  '7867867862',
  'AAAA#####AAAA#87@768767382672',
  '4763687363',
  '4764689363'
];

const filterLongNumbers = (element) => {
  if (element.length <= 10) {
    return true;
  } else {
    return false;
  }
};

const checkLength = (element) => {
  if (element.length <= 10) {
    return true;
  } else {
    return false;
  }
};

console.log(checkLength('7867867862'));
const onlyValidNumbers = phoneNumbers.filter(filterLongNumbers);
console.log(onlyValidNumbers);

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (element) => {
  console.log(`Hi ${element.name}! ${element.discount}% off our best candies for you today!'`)
}

const personalMessages = namesAndDiscounts.map(generateMessages);

personalMessages;
