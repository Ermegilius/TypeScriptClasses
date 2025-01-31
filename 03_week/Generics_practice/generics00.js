"use strict";
/* We already captured the generic type and called it Type.
 * Use that to make the function valid in TypeScript
 *(the parameter is missing a type).
 */
function getFirst(array) {
    return array[0];
}
// Sample usage
console.log(getFirst(["Sam", "Alex"])); // "Sam"
console.log(getFirst([15, 12, 4])); // 15
