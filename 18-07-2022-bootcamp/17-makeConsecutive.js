//Using the splice method, write a function that will fill the missing numbers of a sorted array of numbers, to make it consecutive. 
//Example: [1,2,3,6] should become [1,2,3,4,5,6]
function makeConsecutive (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] - arr[i] > 1 ) {
            arr.splice(i+1, 0, arr[i]+1);
        }
    }
    return arr;
};
makeConsecutive ([1,3,6,10,15])