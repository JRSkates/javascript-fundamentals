const extractData = (data) => {
  const pokemon = {};
  
  pokemon.name = data.name;
  pokemon.id = data.id;
  pokemon.height = data.height;
  pokemon.weight = data.weight;
  pokemon.type = data.types.map((typeData) => typeData.type.name);
  
  return pokemon;
}

const fetchPokemon = (pokeName) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    return extractData(data);
  })
  .then((pokemon) => {
    return pokemon;
  })
};

const showPokemon = (name) => {
  let poke = fetchPokemon(name).then((pokemon) => console.log(pokemon));
  return poke
}

// showPokemon('pikachu')
// { name: 'pikachu', id: 25, height: 4, weight: 60, type: [ 'electric' ] }

module.exports = fetchPokemon;
module.exports.showPokemon;