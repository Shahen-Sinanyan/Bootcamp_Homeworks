//* Create a custom Array.prototype.myConcat should work similarly to Array.prototype.concat

Array.prototype.myConcat = function (...args) {
    let result = this;
    for (let item of args) {
        result = [...result, ...item]
    }
    return result;
}