//Using the filter, write a JavaScript function to clone an array
function cloneByFilter (arr) {
    let arrCopy = arr.filter((item) => true);
    return arrCopy;
}
arr = [1,2,3,4,null,undefined,NaN,false, 8];
cloneByFilter(arr);