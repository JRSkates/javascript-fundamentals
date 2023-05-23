class Candy {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  getName() { 
    return this.brand
  }

  getPrice() {
    return this.price
  }
};

const firstCandy = new Candy('Mars', 4.99);

console.log(firstCandy.getName());
console.log(firstCandy.getPrice()); 

module.exports = Candy;