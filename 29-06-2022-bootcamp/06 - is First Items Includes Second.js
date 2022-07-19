/*Write a function that accepts 2 array arguments and returns a boolean value - Does the first array contain all elements represented in the second array.
Ստեղծել ֆունկցիա որը ստանում է 2 զանգված և վերադարձնում boolan - ստուգելով արդյոք առաջին զանգվածը պարունակում է 2-րդ զանգվածի բոլոր անդամները
*/
function isFirstItemsIncludesSecond (arr1, arr2) {
    root:
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j]) {
                //delete arr1[j]; 
                continue root;
            }
        }
        return false;
    }
    return true;
};
console.log(isFirstItemsIncludesSecond([14,  3, 8, 28, 2,5,6,7,8,9], [ 28, 3, 8, 2, 14]));
