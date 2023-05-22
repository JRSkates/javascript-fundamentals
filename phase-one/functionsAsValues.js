const lowerCaseMessage = (message) => {
  return message.toLowerCase();
};

const transform = (message, lowerCaseFunction) => {
  return lowerCaseFunction(message);
};

console.log(' ')
console.log('Transform Function with a message and a LowerCaseFunction as a value');
console.log(transform("WHY ARE YOU SHOUTING", lowerCaseMessage));

const notifyByEmail = (email) => {
  return `Email sent to ${email}`;
};

const notifyByText = (phoneNumber) => {
  return `Text sent to ${phoneNumber}`;
};

const notify = (string, notifyFunction) => {
  return notifyFunction(string);
};

console.log(' ')
console.log('notify Function with a message and a notifyFunction as a value');
console.log(notify("hello@makers.tech.test", notifyByEmail));
console.log(notify("+10000000000", notifyByText));
