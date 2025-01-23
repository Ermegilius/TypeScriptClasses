/*
Create a type alias that you will use
for the product parameter.
The type alias should be called ProductRow and
it will represent a row of products from the database.
Infer the types of each item from the sample usage.
*/
function showProduct(product) {
    var id = product[0], name = product[1], price = product[2], available = product[3];
    if (available) {
        var result = "[".concat(id, "] ").concat(name, " costs $").concat(price, ".");
        console.log(result);
        return result;
    }
    else {
        var result = "[".concat(id, "] ").concat(name, " is currently unavailable.");
        console.log(result);
        return result;
    }
}
// Sample usage (do not modify)
showProduct([1, "Lemon", 3, true]); // "[1] Lemon costs $3.
showProduct([2, "Peach", 5, false]); // "[2] Peach is currently unavailable.
