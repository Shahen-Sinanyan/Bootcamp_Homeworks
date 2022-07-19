//* Create a custom Array.prototype.myIncludes should work similarly to Array.prototype.includes

Array.prototype.myIncludes = function (value) {
    for (let i = 0; i < this.length; i++) {
        if (value === this[i]) {
            return true;
        }
    }
    return false;
};
[1,2,3,4,5,6,7].myIncludes(3)
['a','b','c','d'].myIncludes('b')