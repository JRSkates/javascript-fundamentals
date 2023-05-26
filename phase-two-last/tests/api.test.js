const fetchPokemon = require('../api');
const showPokemon = require('../api');

describe('FetchPokemon', () => {
  it('returns a promise with populated new pokemon object', (done) => {
    fetchPokemon('pikachu').then((pokemon) => {
      expect(pokemon.id).toEqual(25);
      done();
    });
  });

  it ('console.logs with showPokemon', (done) => {
    showPokemon('pikachu').then((show) => {
      (expect(show.id)).toEqual(25);
      (expect(show.weight)).toEqual(60);
      done();
    });
  });
});