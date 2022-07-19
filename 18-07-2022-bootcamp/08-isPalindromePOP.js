//Create a function that is receiving a sting argument and checks if it is a palindrome using pop() 
function isPalindrome (str) {
    let arr = str.split('')
  for (let i = 0; i < arr.length/2; i++) {
      if (arr[i] !== arr.pop()) {
          return false;
      }
  }  
    return true;
};
let str = 'abcdeffedcba';
console.log(isPalindrome (str))