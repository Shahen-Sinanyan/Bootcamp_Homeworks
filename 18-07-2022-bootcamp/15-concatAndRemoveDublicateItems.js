//Using concat compute the union of two arrays and then remove all duplicated items if they exist

function concatAndRemoveDublicateItems (arr1, arr2) {
    arr1 = arr1.concat(arr2);
        for (let i = 0; i < arr1.length; i++) {
            for (let j = 0; j < arr1.length; j++) {
                if (j !== i && arr1[i] === arr1[j]) {
                    arr1.splice(j , 1);
                    j--;
                }
            }
        }
    return arr1;
 }
  concatAndRemoveDublicateItems([1,2,3,4,1,2,3,4],[1,4,3,4,5,6,3,2,7,8]);