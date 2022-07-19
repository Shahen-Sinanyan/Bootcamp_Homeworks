/*From the given array of numbers create two arrays one containing only odd and the other only even numbers.
Տրված թվային զանգվածից ստանալ երկու զանգվածներ, որոնցից մեկը կպարունակի միայն կենտ իսկ մյուսը միայն զույգ թվեր:
*/
function sorteOddAndEvenNums (arr) {
    let odd = [];
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    return {odd, even}
};
console.log(sorteOddAndEvenNums([1,2,3,4,5,6,7,8,10]));