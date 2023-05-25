const multiply = require('../multiply');

describe('multiply', () => {
  it ('multiplies 2 and 10', () => {
    expect(multiply(2, 10)).toEqual(20);
  });

  it ('multiplies larger numbers', () => {
   expect(multiply(3645, 1234)).toEqual(4497930);
  });
});