var _START_TEMPERATURE = 20;
var _COLOUR = ['red', 'yellow', 'green']

function Thermostat() {
  this.temperature = _START_TEMPERATURE;
  this.maxTemperature = 24
  this.minTemperature = 11
  this.powersaving = true
  this.colour = _COLOUR[1]
}

Thermostat.prototype.up = function() {
  if (this.temperature > this.maxTemperature) {
    throw new Error("Phew, are you trying to roast us?! Temperature can't go that high!")
  } else {
    this.temperature += 1;
  };
  if (this.temperature > 25) {
    this.colour = _COLOUR[0]
  };
};

Thermostat.prototype.down = function() {
  if (this.temperature < this.minTemperature) {
    throw new Error("Brrr, are you crazy?! Temperature cannot go below 10 degrees!")
  } else {
    this.temperature -= 1;
  };
  if (this.temperature < 18) {
    this.colour = _COLOUR[2]
  };
};

Thermostat.prototype.powersavingOff = function() {
  this.powersaving = false
  this.maxTemperature = 32
};

Thermostat.prototype.powersavingOn = function() {
  this.powersaving = true
  this.maxTemperature = 25
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = _START_TEMPERATURE;
  this.colour = _COLOUR[1]
  this.powersaving = true;
};

Thermostat.prototype.checkTemp = function() {
  return this.temperature
};

Thermostat.prototype.checkPSmode = function() {
  if (this.powersaving = true) {
    return true
  } else {
    return false
  };

// Thermostat.prototype.energyUsage() {
//   if (this.temperature < 15) {
//     return 'low-usage'
//   } else if (this.temperature > 15 & this.temperature < 25) {
//     return 'medium-usage'
//   } else {
//     return 'high-usage'
//   };

};
