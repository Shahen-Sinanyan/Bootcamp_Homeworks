/*From the given array of numbers and strings create 2 new arrays, one containing only numbers, another one only strings.
Տրված զանգվածից որը պարունակում թվեր և տողեր, ստեղծել նոր 2 զանգված մեկը միայն թվեր կպարունակի, մյուսը միայն տողեր
*/
function getStringsSeparateNums (arr) {
    let str = [];
    let num = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i] && typeof(arr[i]) === 'number') {
            num.push(arr[i]);
        } else if ( typeof(arr[i]) === 'string') {
            str.push(arr[i]);
        }
    }
    let result = [str , num];
    return result;
};    
console.log(getStringsSeparateNums([1,2,'hello', 5,'', '   ', '999', NaN , null, undefined]));