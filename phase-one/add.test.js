const add = require('./add');

describe('add', () => {
  it('adds 2 and 2', () => {
    expect(add(2, 2)).toBe(4);
  });

  it ('adds larger numbers', () => {
    expect(add(56765, 987678)).toBe(1044443);
  });
});

