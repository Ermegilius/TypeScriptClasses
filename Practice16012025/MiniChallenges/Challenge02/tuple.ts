/*
Create a type alias that you will use 
for the product parameter.
The type alias should be called ProductRow and 
it will represent a row of products from the database. 
Infer the types of each item from the sample usage.
*/

type ProductRow = [id: number, name: string, price: number, available: boolean];

function showProduct(product: ProductRow): string {
	const [id, name, price, available] = product;

	if (available) {
		let result = `[${id}] ${name} costs $${price}.`;
		console.log(result);

		return result;
	} else {
		let result = `[${id}] ${name} is currently unavailable.`;
		console.log(result);
		return result;
	}
}

// Sample usage (do not modify)
showProduct([1, "Lemon", 3, true]); // "[1] Lemon costs $3.
showProduct([2, "Peach", 5, false]); // "[2] Peach is currently unavailable.
