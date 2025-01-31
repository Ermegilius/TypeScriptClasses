// TODO: refactor using Array generic type
// function getFirstEntry(names: Array<string>) {
// 	return names[0];
// }
function getFirstEntry<T>(names: Array<T>) {
	return names[0];
}

// Sample usage (do not modify)
console.log(getFirstEntry(["Sam", "Alex"])); // "Sam"
console.log(getFirstEntry(["Green", "Sam", "Charley"])); // "Green"
console.log(getFirstEntry([15, 12, 4])); // 15
