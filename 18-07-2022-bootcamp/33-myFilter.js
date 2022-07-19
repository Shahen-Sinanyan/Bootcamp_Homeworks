//Create a custom Array.prototype.myFilter should work similarly to Array.prototype.filter

Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

[1,2,3,4,5,6,7].myFilter(function (item, i , arr) {
        return i % 2 === 0
})