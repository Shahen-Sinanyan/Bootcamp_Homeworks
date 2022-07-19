/*Create a function that accepts 2 arrays of words and returns the common words from each.
Գրել ֆունկցիա որը ստանում է 2 զանգված և վերադարձնում է նրանց ընդհանուր տարրերը։
Օրինակ։ 
arr1 ["dog", "cat", "parrot"] 
arr2 ["lizard", "rat", "cat"] 
// Պատասխան։ ["cat"]
*/
function findCommonItems (arr1, arr2) {
    let result = [];
    let repeatedWords = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !repeatedWords.includes(arr1[i])) {
                result.push(arr1[i]);
                repeatedWords.push(arr1[i]);
                break;
            }
        }
    }
    return result;
};
console.log(findCommonItems(['hello', 'hi','HELLO', 'bye',0], ['0', 0, 'hello', '0', 'bye', ]));