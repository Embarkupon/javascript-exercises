const sumAll = function(min, max) {
    if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }
    if (min > max) {
        return ((min-max+1)/2) * (max+min);
    }
    return ((max-min+1)/2) * (max+min);
};

// Do not edit below this line
module.exports = sumAll;
