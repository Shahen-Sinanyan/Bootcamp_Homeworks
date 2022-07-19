/*Create a function that will reverse the given string.
Ստեղծել ֆունկցիա որը դասավորում է տողը հակառակ հերթականությամբ։
*/
function reverseString (str) {
    let reversedString = ''
    for (let i = str.length-1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
};
console.log(reverseString('string'));