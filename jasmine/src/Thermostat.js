function Thermostat() {
  this.DEFAULTTEMPERATURE = 20;
  this.temperature = this.DEFAULTTEMPERATURE ;
};

  Thermostat.prototype.up = function(){
    this.temperature ++;
  };

  Thermostat.prototype.down = function(){
    this.temperature --;
  };
