const fibonacci = function(num) {
    let base = [1,1];
    let sequence = base;
    let number;
    if (!(isNaN(num))) {
        number = num.toString();
    } else {
        number = num;
    }
    console.log(num);
    if (number < 0) {
        return "OOPS";
    }
    if (number == 0) {
        return 0;
    }
    for (let i = 0; i < number; i++) {
        sequence.push(sequence[i] + sequence[i+1]);
    }
    console.log(sequence);
    return sequence[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
