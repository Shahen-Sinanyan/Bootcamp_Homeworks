//Using slice, write a JavaScript function to clone an array

function cloneArray (arr) {
    let arrClone = [];
    for (let i = 0; i < arr.length; i++) {
       arrClone = arrClone.concat(arr.slice(i, i+1));
    }
   
    return arrClone;
}
cloneArray ([1,2,3,4]) 