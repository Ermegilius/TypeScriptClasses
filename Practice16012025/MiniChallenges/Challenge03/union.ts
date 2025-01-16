/*
Write or update a function formatValue that receives one argument 
which could either be a string or a number.
When it's a string, it should return a lowercase version 
of that string.
When it's a number, it returns a string representation 
of the number rounded to two decimal points

*/
function formatValue(value: string | number): string {
	if (typeof value === 'string') {
	return value.toLowerCase();
	} else {
	return value.toFixed(2);
	}
	}
	
	// Sample usage (do not modify)
	console.log(formatValue("Welcome")); // "welcome"
	console.log(formatValue(12)); // 12.00
	console.log(formatValue(24.15329)); // 24.15