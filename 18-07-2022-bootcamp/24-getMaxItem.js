
//Using sort, Write a JavaScript function to get the max element of an array of numbers
let arr = [1,2,5,3,9,2,6,7,4,0,0,0,,9,9,9,99,0]
function getMaxItem (arr) {
    arr.sort(function (a, b) {
       return b - a
    })
    return arr[0]; 
} 
 getMaxItem (arr)