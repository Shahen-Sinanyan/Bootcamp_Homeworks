//Using the map, write a function to clone an array

function toClone (arr) {
    let cloneArr = arr.map(function (item) {
        return item;
    });
    return cloneArr;
}
let arr = [1,2,3,4,6];

toClone (arr);