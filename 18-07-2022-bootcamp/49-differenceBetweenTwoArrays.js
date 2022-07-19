//Write a function to find the difference of two arrays

function differenceOfTwoArrays (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            arr2.splice(arr2.indexOf(arr1[i]),1);
            arr1.splice(i,1);
            i--;
        }
    }
    let result = [].concat(arr1,arr2);
    return result;
};

differenceOfTwoArrays ([1,2,3,4,5,6], [4,5,6,7,8,9,10])
///////////////////////////////////////////
