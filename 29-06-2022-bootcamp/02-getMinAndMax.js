/*Find the smallest and the largest number from the supplied numeric array. Return an array containing these numbers։
Գտնել զանգվածի ամենափոքր և ամենամեծ տարրերը և վերադարձնել նոր զանգվածի մեջ։ 
Օրինակ։ [14, 28, 3, 8, 2] //Պատասխան։ [2, 28];
*/
function getMinAndMax (arr) {
    let result = [];
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    result.push(min, max);
    return result;
};
console.log(getMinAndMax([1,2,3,4,5,6]));