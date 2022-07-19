//Using reverse, write a function that checks if the string is a palindrome

function isPalindrome (str) {
    let reserveStr = str;
    str = str.split('').reverse().join('');
    return str === reserveStr? true: false;
};
let str = 'abcdeffedcba';
 isPalindrome (str)