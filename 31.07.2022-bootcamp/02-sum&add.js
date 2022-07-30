const obj = {};
obj.add = function (num) {
    this.additional = num
};
obj.setSum = function (setSum) {
    this.sum = setSum;
}
obj.getSum = function () {
    return this.sum + this.additional > 100 ? 100:  this.sum + this.additional;
}
