"use strict";
/*
There are two sets:
    set1 that's supposed to only contain numbers
    set2 that's supposed to only contain strings.
However, we've provided incorrect type arguments.
Start by reading and understanding the error message.
Then, correct the type arguments.
There are two ways to correct them.
*/
const set1 = new Set();
set1.add(5);
set1.add(10);
set1.add(3);
console.log(set1);
const set2 = new Set();
set2.add("abc");
set2.add("def");
console.log(set2);
