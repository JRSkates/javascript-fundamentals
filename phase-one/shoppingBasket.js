const Candy = require("./candy");

class ShoppingBasket {
  constructor(total) {
    this.total = 0.0;
  }

  getTotalPrice() {
    return this.total;
  }

  addItem(candy) {
    this.total += candy.price; 
  }

}

const bask = new ShoppingBasket();
console.log(bask.getTotalPrice());
const firstCandy = new Candy("Mars", 4.99);

console.log(firstCandy.getName());
console.log(firstCandy.getPrice());
bask.addItem(firstCandy);
console.log(bask.getTotalPrice())
bask.addItem(firstCandy);
console.log(bask.getTotalPrice())

module.exports = ShoppingBasket;
