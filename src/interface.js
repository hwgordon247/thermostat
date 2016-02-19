$(document).ready(function() {
  var thermostat = new Thermostat();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=8dbcc5eceddae7ab2d858e41dcd0ad58&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  $('#select-city').submit(function(e) {
    console.log('clicked');
    e.preventDefault();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var city = $('#current-cit').val();
    var id = '&APPID=e4513b76de988bd77bb49e09c03c1ca6';
    var units = '&units=metric';
    $.get(url + city + id + units, function(report) {
      console.log(report);
      // $('#current-temperature').html(Math.round(report.main.temp) + '&#176;C');
      $('#conditions').html(report.name + ' | ' + Math.round(report.main.temp) + '&#176;C | ' + report.weather[0].description);
      });
    });


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
    $('#glasses-show').css('visibility', 'hidden');
    thermostat.powersavingOn();
    $('#ps-status').text('ON')
    updateTemperature();
  });

  $('#ps-off').click(function() {
    // $('<img id="glasses" src="public/glasses.png"  width="180" height="50" alt="submit" />').appendTo("#ps-off");
    $('#glasses-show').css('visibility', 'visible');
    thermostat.powersavingOff();
    $('#ps-status').text('OFF')
    updateTemperature();
  });


  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };

  // $('#glasses').mouseover(function(){
  //   $('#glasses').slideDown();
  // });


});
