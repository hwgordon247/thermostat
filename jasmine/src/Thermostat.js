function Thermostat() {
  this.DEFAULTTEMPERATURE = 20;
  this.MINTEMP = 10;
  this.temperature = this.DEFAULTTEMPERATURE ;
  this.isPowersave = true ;
};

  Thermostat.prototype.up = function(){
    this.temperature ++;
  };

  Thermostat.prototype.down = function(){
    if (this.temperature === this.MINTEMP)
      throw "Ice ice baby!";
    else {
      this.temperature --;
    }
  };
