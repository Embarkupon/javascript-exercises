const getTheTitles = function(obj) {
    let titleArr = [];
    for (let i = 0; i < obj.length; i++) {
        titleArr.push(obj[i].title);
    }
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
