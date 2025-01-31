/* We already captured the generic type and called it Type.
 * Use that to make the function valid in TypeScript
 *(the parameter is missing a type).
 */

function getFirst<Type>(array: Array<Type>) {
	return array[0];
}

// Sample usage
console.log(getFirst<string>(["Sam", "Alex"])); // "Sam"
console.log(getFirst<number>([15, 12, 4])); // 15
