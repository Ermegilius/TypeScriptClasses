"use strict";
/*
Complete the getFirst function such that it's valid in TypeScript.
You will need to capture the type yourself.
Once you complete that, refactor the type into a T character.
*/
function getFirstGenerics(array) {
    return array[0];
}
// Sample usage
console.log(getFirstGenerics(["Sam", "Alex"])); // "Sam"
console.log(getFirstGenerics([15, 12, 4])); // 15
