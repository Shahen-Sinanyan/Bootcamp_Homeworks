//Write a function that will receive the length and the value and will return a pre-filled array 
function addValueByLength (length, value) {
    let result = [];
    while (length > 0) {
        result.push(value);
        length--;
    }
    return result;
};
addValueByLength (5, 'value')