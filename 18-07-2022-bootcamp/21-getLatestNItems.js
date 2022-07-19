// Using slice, Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

function getLatestNItems (arr, n) {
    let latestElem = arr.slice(arr.length - n, arr.length);
    if (n > arr.length) {
        latestElem = [...arr];
    }
    return latestElem;
};
 getLatestNItems ([1,2,3,4,5,6,7], 8)