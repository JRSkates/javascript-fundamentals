const Thermostat = require('../thermostat');

describe('Thermostat Class', () => {
  it('should return the constructed temperature', () => {
    const therm = new Thermostat();

    expect(therm.getTemperature()).toEqual(20);
  });

  it('should return 22 after calling the up method twice', () => {
    const therm = new Thermostat();
    therm.up();
    therm.up();

    expect(therm.getTemperature()).toEqual(22);
  });

  it('should return 21 after calling the up method twice and the down method once', () => {
    const therm = new Thermostat();
    therm.up();
    therm.up();
    therm.down();

    expect(therm.getTemperature()).toEqual(21);
  });

  it('should return confirmation when calling Power Saving Mode', () => {
    const therm = new Thermostat();

    expect(therm.setPowerSavingMode(true)).toBe('PSM is now on, max temperature is 25');
  });

  it('should limit the max temperature to 25 when PowerSavingMode is true', () => {
    const therm = new Thermostat();
    therm.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      therm.up();
    };

    expect(therm.getTemperature()).toEqual(25);
  });

  it('should remove limit when called with false', () => {
    const therm = new Thermostat();
    therm.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      therm.up();
    };

    expect(therm.setPowerSavingMode(false)).toBe('PSM is now off, max temperature is no more 25');
  });

  it('should allow higher than 25 after removed', () => {
    const therm = new Thermostat();
    therm.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      therm.up();
    };
    therm.setPowerSavingMode(false);
    therm.up();
    
    expect(therm.getTemperature()).toEqual(26);
  });

  it('should reset back to 20 with the reset method', () => {
    const therm = new Thermostat();
    therm.up();
    therm.up();
    therm.reset();

    expect(therm.getTemperature()).toEqual(20);
  });
});