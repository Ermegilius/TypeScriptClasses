const person1: {
	name: string;
	age: number;
} = {
	name: "John1",
	age: 30,
};

console.log(person1.name);

const product: {
	id: string;
	price: number;
	tags: string[];
	details: {
		title: string;
		description: string;
	};
} = {
	id: "abc1",
	price: 12.99,
	tags: ["great-offer", "hot-and-new"],
	details: {
		title: "Red Carpet",
		description: "A great carpet - almost brand-new!",
	},
};
console.log(product.details.description);

//////////////////////////
type Person = {
	// custom type
	name: string;
	age: number;
	hobbies: string[];
};

let person: Person = {
	name: "John",
	age: 30,
	hobbies: ["Sports", "Reading", "Cooking"],
};

console.log(person.name);

//////////////////////////

let favoriteActivities: string[] = [];

// console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby);
}

const tuplePerson: [string, number, boolean] = ["James Bond", 30, true];
console.log(
	`Name: ${tuplePerson[0]}, Age: ${tuplePerson[1]}, Has drivers license: ${tuplePerson[2]}`
);

//////////////////////////

enum Direction {
	up = 1,
	down = 2,
	left = 3,
	right = 4,
}

let move: Direction = Direction.up;
console.log(move);

//////////////////////////

let code: string | number | boolean;
code = 123;
code = "321";
code = false; // Error

//////////////////////////

let userInput: unknown;
let userName: string;

userInput = 5;
userName = "Max";
if (typeof userInput === "string") {
	userName = userInput;
}
console.log(userName);
