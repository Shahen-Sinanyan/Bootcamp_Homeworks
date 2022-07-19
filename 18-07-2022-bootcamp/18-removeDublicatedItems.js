//Using the splice method, create a function which is removing duplicated numbers from a sorted array of numbers

function removeDublicatedItems (arr1) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length-1; j++) {
            if (j !== i && arr1[i] === arr1[j]) {
                arr1.splice(j , 1);
                j--;
            }
        }
    }
return arr1;
}
removeDublicatedItems([1,2,2, 2, 2, 2, 2,3,8,3,8,9,9,9])