const Candy = require("./candy");

class ShoppingBasket {
  constructor() {
    this.total = 0.0;
    this.discount = 0.0;
  }

  applyDiscount(discount) {
    this.discount = discount
    this.total -= discount
  }

  getTotalPrice() {
    return this.total;
  }

  addItem(candy) {
    this.total += candy.getPrice(); 
  }

}

module.exports = ShoppingBasket;

// const bask = new ShoppingBasket();
// console.log(bask.getTotalPrice());
// const firstCandy = new Candy("Mars", 4.99);
// 
// console.log(firstCandy.getName());
// console.log(firstCandy.getPrice());
// bask.addItem(firstCandy);
// console.log(bask.getTotalPrice())
// bask.addItem(firstCandy);
// console.log(bask.getTotalPrice())
// 
