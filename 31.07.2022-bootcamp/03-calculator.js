// Using the constructor function create, an object and methods to support the following functionality 
// const calculator = new Calculator(0); // Initial result is 0 
// calculator.plus(5); // add 5 to the result 
// calculator.minus(3); // subtract 3 from result 
// calculator.multiply(3); // multiply result by 3
// calculator.divide(2); // divide result on 2
// calculator.getResult() // Returns the result
function Calculator (result = 0) {
    this.plus = function (num) {
        return result += num;
    };
    this.minus = function (num) {
        return result -= num; 
    };
    this.multiply = function (num) {
        return result *= num;
    };
    this.divide = function (num) {
        return result /= num; 
    };
    this.getResult = function () {
        return result
    }
}

const calculator = new Calculator()
calculator.plus(5); // add 5 to the result 
calculator.minus(3); // subtract 3 from result 
calculator.multiply(3); // multiply result by 3
calculator.divide(2); // divide result on 2
calculator.getResult()