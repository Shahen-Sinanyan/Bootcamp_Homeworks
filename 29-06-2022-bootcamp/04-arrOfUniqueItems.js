/*Write a function to return only unique values of the given array. 
Ստեղծել ֆւնկցիա որը վերադարծնում է տրված զանգվածի միայն չկրկնվող անդամները։
*/

// with methods
function arrOfUniqueItems (arr) {
    let result = [];
    let reserv ;
    for (let i = 0; i < arr.length; i++) {
        reserve = arr[i];
        delete arr[i];
        if (!arr.includes(reserve)) {
            result.push(reserve);
        }
        arr[i] = reserve;
    }
    return result;
};
console.log(arrOfUniqueItems([1,2,3,4,5,6,6,7,7,8,8,4]));

/////////////////////////
/*// withouth methods
function arrOfUniqueItems (arr) {
    let result = [];
   
    root:
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j !== i && arr[i] === arr[j]) {
                continue root;
            }
        }
        result.push(arr[i]);
    }
    return result;
};
console.log(arrOfUniqueItems([1,2,3,4,5,6,1,2,3,4,5,6,7,8,9,11,1,21,12,13]));
*/