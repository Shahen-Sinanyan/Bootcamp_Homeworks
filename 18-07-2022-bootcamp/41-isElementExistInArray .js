//Write a function which is checking if a given element contains inside an array

function isElementExistInArray (element, array) {
    return array.indexOf(element) === -1? false: true;
}

undefined
isElementExistInArray (3, [1,2,3,4,5])