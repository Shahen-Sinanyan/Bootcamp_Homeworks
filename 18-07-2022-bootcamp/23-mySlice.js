Array.prototype.mySlice = function (start, end = this.length) {
    
    let result = [];
    if (start < 0) {
        for (let i = this.length + start; i < (end < 0? this.length + end: end); i++) {
            result.push(this[i])
        }
        return result;
    } else {
        for (let i = start; i < ((this.length < end)? this.length: end); i++) {
            result.push(this[i]);
        }
        return result;
    }
}