const lowerCaseMessage = (message) => {
  return message.toLowerCase();
};

const transform = (message, lowerCaseFunction) => {
  return lowerCaseFunction(message);
};

console.log(transform('WHY ARE YOU SHOUTING', lowerCaseMessage));

const notifyByEmail = (email) => {
  return 'Email sent to ' + email
};

const notifyByText = (text) => {
  return 'Text sent to ' + text
};

const notify = (string, notifyFunction) => {
  return notifyFunction(string);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));