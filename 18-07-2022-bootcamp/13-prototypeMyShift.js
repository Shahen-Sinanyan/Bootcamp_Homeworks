Array.prototype.myShift = function removeLastItem () {
    const returnAndRemoveFirstItem = this.splice(0, 1);
    return returnAndRemoveFirstItem[0];
};

