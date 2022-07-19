//* Create a custom Array.prototype.myPop should work similarly to Array.prototype.pop
Array.prototype.myPop = function removeLastItem () {
    const returnAndRemoveLastItem = this.splice( this.length-1, 1);
    return returnAndRemoveLastItem[0];
};