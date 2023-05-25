const ShoppingBasket = require('../shoppingBasket');

describe('Shopping Basket', () => {
  it('should construct properly', () => {
    const basket = new ShoppingBasket();

    expect(basket.total).toEqual(0.0);
    expect(basket.discount).toEqual(0.0);
  });

  it('should return the total price after adding one item and no discount', () => {
    const mockCandy = {
      getName: () => 'Mars',
      getPrice: () => 4.99
    }

    const basket = new ShoppingBasket();
    basket.addItem(mockCandy);
    expect(basket.getTotalPrice()).toEqual(4.99);
  });

  it('should return the total price after two candies added and no discount', () => {
    const mockCandyOne = {
      getName: () => 'Mars',
      getPrice: () => 4.99
    }

    const mockCandyTwo = {
      getName: () => 'Snickers',
      getPrice: () => 3.99
    }

    const basket = new ShoppingBasket();
    basket.addItem(mockCandyOne);
    basket.addItem(mockCandyTwo);
    expect(basket.getTotalPrice()).toEqual(8.98)
  });

  it('should allow you to apply a discount', () => {
    const basket = new ShoppingBasket();

    basket.applyDiscount(2);
    expect(basket.discount).toEqual(2.0)
  });

  it('should apply a discount successfully', () => {
    const mockCandyOne = {
      getName: () => 'Mars',
      getPrice: () => 4.99
    }
  
    const mockCandyTwo = {
      getName: () => 'Snickers',
      getPrice: () => 3.99
    }

    const basket = new ShoppingBasket();
    basket.addItem(mockCandyOne);
    basket.addItem(mockCandyTwo);
    basket.applyDiscount(2);
    expect(basket.getTotalPrice()).toEqual(6.98)
  });
});