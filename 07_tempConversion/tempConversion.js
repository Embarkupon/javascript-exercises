const convertToCelsius = function(farenheit) {
  if (isNaN(farenheit)) return 'ERROR';
  let celsius = ((farenheit - 32) * (5/9));
  return Math.round(celsius * 10)/10;
};

const convertToFahrenheit = function(celsius) {
  if (isNaN(celsius)) return 'ERROR';
  let farenheit = ((celsius * (9/5) + 32));
  return Math.round(farenheit * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
