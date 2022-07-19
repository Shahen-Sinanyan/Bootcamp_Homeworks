//* Create a custom Array.prototype.myJoin should work similarly to Array.prototype.join
Array.prototype.myJoin = function joinItems (separator) {
    separator === undefined? separator = ',': separator;
    let joined = ''+ this[0];
    for (let i = 1; i < this.length; i++) {
       joined += (separator + this[i]);
    }
    return joined;
};