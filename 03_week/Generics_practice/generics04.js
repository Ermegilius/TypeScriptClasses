"use strict";
/*
How would you use generics in this case?
*/
function sumNumbers(numbers) {
    return numbers.reduce((total, value) => total + value, 0);
}
// Sample usage (do not modify)
console.log(sumNumbers([1, 2, 3])); // 6
console.log(sumNumbers([5, 3])); // 8
