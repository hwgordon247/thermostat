describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20)
  });

  it("increases by 1 degrees when commanded to", function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21)
  });

  it("decreases by 1 degrees when commanded to", function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19)
  });

  it("cannot decrease temp below 10 degrees", function() {
    thermostat.temperature = thermostat.MINTEMP;
    expect(function(){thermostat.down();}).toThrow("Ice ice baby!")
  });

  it("is set to powersave by default", function() {
    expect(thermostat.isPowersave).toBe(true);
  });

  it("has a maximum temperature of 25 when powersave is on", function() {
    thermostat.temperature = 25;
    expect(function(){thermostat.up();}).toThrow("It's getting hot in here!")
  });

  it("can switch powersave off", function() {
    thermostat.powersaveOff();
    expect(thermostat.isPowersave).toBe(false);
  });

  it("can switch powersave off", function() {
    thermostat.powersaveOff();
    thermostat.powersaveOn();
    expect(thermostat.isPowersave).toBe(true);
  });

  it("has a maximum temperature of 32 when powersave is off", function() {
    thermostat.powersaveOff();
    thermostat.temperature = 32;
    expect(function(){thermostat.up();}).toThrow("It's getting hot in here!")
  });

});
