const convertToCelsius = function(farenheit) {
  if (isNaN(farenheit)) return 'ERROR';
  let celsius = ((farenheit - 32) * (5/9));
  return Math.round(celsius * 10)/10;
};

const convertToFahrenheit = function(celsius) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
