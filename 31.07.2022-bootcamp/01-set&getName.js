//  Create an object and methods to support the following functionality 
// const obj = {}; 


// // Your code to add methods

// obj.setName(‘John’);  
// console.log(obj.getName()); // Should log ‘John’
const obj = {}; 

obj.setName = function (name) {
    this.name = name;
};
obj.getName = function () {
    return this.name;
}