Array.prototype.myUnshift = function(...value) {
    for (let i = value.length - 1; i >= 0; i--) {
        this.splice(0,0, value[i]) 
    }
    return this.length;
}