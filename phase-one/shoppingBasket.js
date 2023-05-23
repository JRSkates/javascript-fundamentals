require("./candy");

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

module.exports = ShoppingBasket;
