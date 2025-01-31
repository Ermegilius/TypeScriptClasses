"use strict";
/*
Let's try to implement our custom generic array type to help
you better understand the generics. We'll call it MyArray.
We won't implement all the methods and properties.
Only those shown in the sample usage.

Complete the MyArray definition
such that it satisfies the sample usage.

*/
// Sample usage
const data1 = [1, 14, 2];
console.log(data1.length); // 3
console.log(data1.toString()); // "3"
console.log(data1.push(10)); // 4 (the new length of the array)
const data2 = ["abc"];
console.log(data2.length); // 1
console.log(data2.toString()); // "abc"
console.log(data2.push("def")); // 2 (the new length of the array)
