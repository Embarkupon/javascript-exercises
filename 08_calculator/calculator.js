const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  if (array.length == 0) {
    return 0;
  }
	let sum = array.reduce((x, y) => {
    return x + y;
  }, 0);
  return sum;
};

const multiply = function(array) {
	let product = array.reduce((x, y) => {
    return x * y;
  }, 1);
  return product;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(num) {
  let array = [];
  if (num == 0) {
    return 1;
  }
  for (let i = 0; i < num; i++) {
    array.push(i + 1);
  }
  let product = array.reduce((x, y) => {
    return x * y;
  }, 1);
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
