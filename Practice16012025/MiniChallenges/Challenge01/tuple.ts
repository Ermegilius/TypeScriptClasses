/*
Create a type called Point which you will use 
for the parameter of the getPointDescription function.
This type should expect an array of exactly two items where 
both items are numbers.
While the first item represents the latitude 
and the second one represents the longitude,
*/

type Point = [number, number];

function getPointDescription(point: Point): string {
	return `Latitude: ${point[0]}, longitude: ${point[1]}`;
}

// Sample usage (do not modify)
console.log(getPointDescription([10.134, 15.9149])); // "Latitude: 10.134, longitude: 15.9149"
console.log(getPointDescription([-19.132, 2.91472])); // "Latitude: -19.132, longitude: 2.91472"
