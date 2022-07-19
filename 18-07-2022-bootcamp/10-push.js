//Create a function that is receiving a number and returns an array which is containing all even digits. Use push method 
function getEvenDigits (number) {
    number = Math.abs(number);
    let evenDigits = [];
    while (number) {
        if ((number % 10) % 2 === 0) {
            evenDigits.push(number % 10);
        }
        number = Math.floor(number/10);
    }
    return evenDigits;
}