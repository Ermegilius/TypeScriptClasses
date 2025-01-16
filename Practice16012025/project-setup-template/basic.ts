const add = (a:number, b: number, isTrue: boolean, message: string) => {
  let c = a+b;
  if (isTrue === true) {return c}
  else {return message}
}

let a = 14;
let b = 2;
let isTrue = false;
let message = 'Hello World';


console.log(add (a, b, isTrue, message));
