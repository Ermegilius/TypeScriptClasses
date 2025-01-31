"use strict";
/*
We created a wrapInArray function that accepts
any argument and wraps it in an array.
So, if you call it with a string,
it will return an array containing that string.

Take a look at the sample usage and
update the wrapInArray function definition to be a
valid TypeScript function.
*/
function wrapInArray(value) {
    return [value];
}
// Sample usage
wrapInArray("Hello"); // ["Hello"]
wrapInArray(15); // [15]
wrapInArray(true); // [true]
const user = {
    name: "Sam",
    age: 51,
    id: 1,
};
console.log(wrapInArray(user)); // [{name: "Sam", age: 51}]
