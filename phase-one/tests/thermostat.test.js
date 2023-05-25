const Thermostat = require('../thermostat');

describe('Thermostat Class', () => {
  it('should return the constructed temperature', () => {
    const therm = new Thermostat();

    expect(therm.getTemperature()).toEqual(20);
  });
});