const findTheOldest = function(obj) {
    let today = new Date();
    let year = today.getFullYear();

    let ages = obj.map((x) => x.yearOfDeath - x.yearOfBirth);
    
    return 0;
};

// Do not edit below this line
module.exports = findTheOldest;
