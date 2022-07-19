// Create a custom Array.prototype.myToString it should work similarly to Array.prototype.toString

Array.prototype.myToString = function () {
    let result = '' + this[0]
    for(let i = 1; i < this.length; i++) {
        result += ',' + this[i]
    }
    return result;
}
