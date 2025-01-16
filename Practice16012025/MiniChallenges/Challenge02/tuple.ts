/*
Create a type alias that you will use 
for the product parameter.
The type alias should be called ProductRow and 
it will represent a row of products from the database. 
Infer the types of each item from the sample usage.
*/

function showProduct(product) {
	// Optional: refactor to destructuring
	const id = product[0];
	const name = product[1];
	const price = product[2];
	const available = product[3];
	
	if (available) {
			return `[${id}] ${name} costs $${price}.`;
	} else {
			return `[${id}] ${name} is currently unavailable.`;
	}
}

// Sample usage (do not modify)
showProduct([1, "Lemon", 3, true]); // "[1] Lemon costs $3.
showProduct([2, "Peach", 5, false]); // "[2] Peach is currently unavailable.