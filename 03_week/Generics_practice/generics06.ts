/*
Specify the parameter type using the Array generic type. 
Infer the type from the sample usage.
*/

function logValues<T>(values: Array<T>) {
	console.log(values);
}

// Sample usage (do not modify)
const data = [10, "Sam", "", 15, 0, 20];
logValues(data);
