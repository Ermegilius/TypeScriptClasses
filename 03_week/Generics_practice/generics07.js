"use strict";
/*
Visualize the code duplication

Before we implement the generic ApiResponse object,
take a look at all code duplication here
 that's needed to define the three interfaces:
    UserApiResponse
    ProductApiResponse
    ProductsApiResponse
While they all follow the same shape,
we had to repeat the status and data for each interface.
Now, imagine the response object looked more complex,
and imagine you needed to describe 50 different responses.
This duplication becomes quite a big problem then.
 That's why we'll implement a generic ApiResponse interface
 in the next challenge.
*/
