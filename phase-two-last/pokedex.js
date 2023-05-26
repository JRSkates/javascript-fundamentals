const fetchPokemon = require('./api');
//const showPokemon = require('./api');

class Pokedex {
  constructor() {
    this.list = []
  }

  all() {
    return this.list
  }

  catch(pokemon) {
    return fetchPokemon(pokemon)
    .then((caught) => {
      this.list.push(caught);
    });
  }
};

let dex = new Pokedex();
//dex.catch('pikachu')
//console.log(dex.all());
module.exports = Pokedex;