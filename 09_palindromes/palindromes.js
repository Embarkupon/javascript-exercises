const palindromes = function (palindrome) {
    //remove whitespace and special characters
    let newStr = palindrome.replace(/[^A-Z0-9]/ig,"");
    newStr = newStr.toLowerCase(); //ignore case
    //create variables to reverse the string
    let strArray = newStr.split("");
    let reverseStr = "";
    let length = strArray.length;
    //pop the last character and add it to the reversed string.
    for (let i = 0; i < length; i++) {
        reverseStr += strArray.pop().toString();
    }
    //if the original and reversed march, the string is a palindrome
    if (reverseStr.localeCompare(newStr) === 0) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
