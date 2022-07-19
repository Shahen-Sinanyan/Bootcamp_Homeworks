//Using from, write a JavaScript function to clone an array

function cloneArray (arr) {
    let  clone = Array.from(arr, function(item)  {
             return item
         });
    return clone;
};
cloneArray([1,2,3,4,5])