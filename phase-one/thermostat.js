class Thermostat {
  constructor() {
    this.temperature = 20;
    this.powerSaving = false
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.powerSaving == true && this.temperature == 25) {
      return 'Max Power Saving Temperature'
    } else {
      this.temperature++;
    }
  }

  down() {
    this.temperature--;
  }

  setPowerSavingMode(boolean) {
    if (boolean == true) {
      this.powerSaving = true;
      return 'PSM is now on, max temperature is 25'
    } else {
      this.powerSaving = false;
      return 'PSM is now off, max temperature is no more 25'
    };
  };

  reset() {
    this.temperature = 20;
  }
};

module.exports = Thermostat;