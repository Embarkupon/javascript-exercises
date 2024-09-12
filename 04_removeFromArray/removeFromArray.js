// removes an element from an array
const removeFromArray = function(array, ...args) {
    // new mutable array
    let spliced = [];
    // populates new array with input array's values
    spliced = array.sort().slice();
    let curr = null;
    // iterates through args array
    for (let i = 0; i < args.length; i++) {
        // iterates through input array
        for (let j = 0; j < array.length; j++) {
            // if bothe values are strictly equal then remove it from the new array
            if (args[i] === array[j]) {
                spliced.splice(spliced.indexOf(args[i]), 1);
                curr = array[j];
                console.log (`args (index,element): (${i},${args[i]}). input array (index,element): (${j},${curr})`);
            }
        }
               
    }
    console.log(`spliced array, [${spliced}]. Input array, [${array}]`);
    return spliced;
};

// Do not edit below this line
module.exports = removeFromArray;
