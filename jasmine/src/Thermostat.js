function Thermostat() {
  this.DEFAULTTEMPERATURE = 20;
  this.MINTEMP = 10;
  this.temperature = this.DEFAULTTEMPERATURE ;
  this.isPowersave = true ;
  this.MAXTEMPON = 25;
  this.MAXTEMPOFF = 32;
};

  Thermostat.prototype.up = function(){
    if (this.temperature === this.setMax())
      throw "It's getting hot in here!";
    else {
    this.temperature ++;
    }
  };

  Thermostat.prototype.down = function(){
    if (this.temperature === this.MINTEMP)
      throw "Ice ice baby!";
    else {
      this.temperature --;
    }
  };

  Thermostat.prototype.powersaveOff = function(){
    this.isPowersave = false;
  };

  Thermostat.prototype.powersaveOn = function(){
    this.isPowersave = true;
  };

  Thermostat.prototype.setMax = function(){
    if (this.isPowersave){
      return this.MAXTEMPON
    }
    else {
      return this.MAXTEMPOFF
    }
  };
