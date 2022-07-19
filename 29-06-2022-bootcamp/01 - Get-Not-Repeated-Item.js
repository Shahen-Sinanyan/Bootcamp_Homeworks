/*Find the value that is not being repeated inside the given array.
Գտնել այն արժեքը որը ընհանրապես չի կրկնվում տրված զանգվածում
Օրինակ։ ["a", "a", "b", "a"] //Պատասխան։ 'b'*/

function getNotRepeatedItem (arr){
    let result;
    root:
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j !== i && arr[i] === arr[j] ) {   
               continue root;
            }
        }
        result = arr[i];
        return result;
    }
};
console.log(getNotRepeatedItem([1,2,3,1,2,3,4,]));