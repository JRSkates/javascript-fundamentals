const Pokedex = require('../pokedex');

describe ('Pokedex', () => {
  it ('returns an empty array before adding any pokemon', () => {
    let dex = new Pokedex
    expect(dex.all()).toEqual([]);
  });

  it ('can add a pokemon to the pokedex', (done) => {
    let dex = new Pokedex();
    dex.catch('pikachu').then(() => {
      expect(dex.all()[0].name).toBe('pikachu');
      done();
    });
  })

  it('catches multiple pokemon', (done) => {
    dex = new Pokedex();
    dex.catch('pikachu').then(() =>{
      dex.catch('charizard').then(() =>{
        expect(dex.all()[0].name).toBe('pikachu');
        expect(dex.all()[0].id).toBe(25);
        expect(dex.all()[1].name).toBe('charizard');
        expect(dex.all()[1].id).toBe(6);
        done();
      });
    });
  });
});