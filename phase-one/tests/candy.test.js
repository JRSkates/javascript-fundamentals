const Candy = require('../candy');

describe('Candy', () => {
  it('Properly constructs', () => {
    const firstCandy = new Candy("Mars", 4.99);

    expect(firstCandy.name).toBe('Mars');
    expect(firstCandy.price).toBe(4.99);
  });

  it ('returns getName', () => {
    const firstCandy = new Candy("Mars", 4.99);

    expect(firstCandy.getName()).toBe('Mars');
  });

  it ('returns getPrice', () => {
    const firstCandy = new Candy("Mars", 4.99);

    expect(firstCandy.getPrice()).toBe(4.99);
  });
});