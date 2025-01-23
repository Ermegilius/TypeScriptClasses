// //1
// let variable: number = 5;
// console.log(variable);
// variable = 6;
// console.log(variable);

// //2
// const email: string = "mail@mail.com";
// console.log(email);

// //3
// const array: number[] = [1, 2, 3];
// console.log(array);
// array.push(4);
// console.log(array);

//4
const person: { name: string; age: number } = { name: "John", age: 30 };
console.log(person);
person.age = 42;
console.log(person);

// //5
// let newVariable: string | number;
// newVariable = "Hello";
// if (typeof newVariable === "string") {
// 	newVariable = "Good bye";
// 	console.log(newVariable);
// }

// //6
// const arrayString: string[] = ["1", "2", "3"];
// console.log(arrayString);
// arrayString.forEach((elem) => {
// 	console.log(elem);
// });

// const sum = (a: number, b: number): void => {
// 	a + b;
// };
// const multiply = (a: number, b: number): void => {
// 	a * b;
// };
// const divide = (a: number, b: number): number => {
// 	return a / b;
// };
// console.log(sum(5, 5), multiply(5, 5), divide(5, 5));

// type Hobbies = string[];
// const hobbies: Hobbies = ["Sports", "Cooking", "Reading"];
// const activeHobbies: Hobbies = ["Hiking", ...hobbies];
// console.log(activeHobbies);

// const add = (activeHobbies) => {
// 	activeHobbies = [...activeHobbies, hobbies[0], hobbies[2]];
// 	console.log(activeHobbies);
// };

// add(activeHobbies);

// class Department {
// 	name: string;
// 	constructor(n: string) {
// 		this.name = n;
// 	}
// }

// const it = new Department("IT Department");
// console.log(it);

interface Person {
	name: string;
	age: number;
	greet(phrase: string): void;
}

interface ExtendedPerson extends Person {
	email?: string;
}

const user1: Person = {
	name: "Vova",
	age: 37,
	greet: (phrase) => console.log(phrase),
};

console.log(user1);
user1.greet("Hi there - I am");
