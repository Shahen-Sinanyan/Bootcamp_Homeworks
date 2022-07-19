//Using from, and Set create a function that is removing duplicates from an array 
function deleteDublicate (arr) {
    const set = new Set(arr);
   return Array.from(set);
}
let arr = [1,2,3,4,5,6,5,4,3,3]
deleteDublicate(arr)