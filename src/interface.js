$(document).ready(function() {
  var thermostat = new Thermostat();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=8dbcc5eceddae7ab2d858e41dcd0ad58&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=8dbcc5eceddae7ab2d858e41dcd0ad58&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  });

  $('#temperature').text(thermostat.temperature);
  updateTemperature();

  $('#temp-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.resetTemp();
    thermostat.powersavingOn();
    $('#ps-status').text('ON')
    updateTemperature();
  });

  $('#ps-on').click(function() {
    thermostat.powersavingOn();
    $('#ps-status').text('ON')
    updateTemperature();
  });

  $('#ps-off').click(function() {
    thermostat.powersavingOff();
    $('#ps-status').text('OFF')
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };

});
