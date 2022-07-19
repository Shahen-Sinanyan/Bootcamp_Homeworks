// Using slice, Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
function getFirstNItems (arr, n) {
    let firstNitems = arr.slice(0,n);
    return firstNitems;
};

getFirstNItems([1,2,3,6,7,8,9],4)