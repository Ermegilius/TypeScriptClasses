"use strict";
// TODO: define ApiResponse as generic object
/* Implement a generic object called ApiResponse describing
an object that always has a status key
with the type number and a data key,
which can be anything.
*/
// Sample usage
// Example of a response that returns a string (for example, a welcome message)
const response1 = {
    status: 200,
    data: "Welcome to our site"
};
// Example of a response that returns a boolean (for example, a config option)
const response2 = {
    status: 200,
    data: true
};
