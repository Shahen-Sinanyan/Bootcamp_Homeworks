//Using sort, Write a JavaScript function to get the min element of an array of numbers

function getMinEl (arr) {
    arr.sort(function (a,b) {
        return a - b;
    });
    return arr[0];
}
let arr = [1,2,3,4,5,6,0,-1];
getMinEl(arr)
