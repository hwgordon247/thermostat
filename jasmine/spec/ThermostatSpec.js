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

});
