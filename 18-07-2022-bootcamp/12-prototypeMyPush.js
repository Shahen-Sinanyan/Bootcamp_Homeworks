//* Create a custom Array.prototype.myPush should work similarly to Array.prototype.push

Array.prototype.myPush = function push (...values) {
    for (let i = 0; i < values.length; i++) {
        this[this.length] = values[i]
    }
    return this.length;
}