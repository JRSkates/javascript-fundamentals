class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

//const firstCandy = new Candy("Mars", 4.99);

//console.log(firstCandy.getName());
//console.log(firstCandy.getPrice());
//console.log(firstCandy);
module.exports = Candy;
