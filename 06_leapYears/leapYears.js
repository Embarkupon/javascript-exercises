const leapYears = function(year) {
    if (!Number.isInteger(year)) {
        console.log(year);
        return false;
    }
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log(`passed third condition: ${year%400}`);
                return true;
            }
            console.log(`passed second condition: ${year%100}`);
            return false;
        }
        console.log(`passed first condition: ${year%4}`);
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
