let y = "10";
let x = Number(y);
// console.log(typeof x, typeof y);

let a = 123;
let b = a.toString();
// console.log(typeof a, typeof b);

let var1 = "manish";
let var2 = Number(var1);
let var3 = "56";
// console.log(var2);
// console.log(typeof var2);
/*
worng way to do
NaN is not equal to anything or even itself
if (Number(var1) !== NaN && Number(var3) !== NaN) {
  console.log(var1 + var3);
} else {
  console.log("can't add both type mismtach");
}
*/
if (!Number.isNaN(Number(var1)) && !Number.isNaN(Number(var3))) {
  // If we want to treat them as numbers for addition,
  // we should also use the Number() conversion here.
  console.log(Number(var1) + Number(var3));
} else {
  //   console.log("can't add, both type mismatch");
}

// console.log(0 / 0); //NaN

let isLogedIn = ture;
let num5 = Number(isLogedIn);
console.log(num5);

/*
falsy values:-

false (The boolean keyword itself)

0 (The number zero)

-0 (Minus zero)

0n (BigInt zero)

"", '', `` (Empty strings—any string with absolutely nothing in it)

null (The intentional absence of any object value)

undefined (A variable that has been declared but not assigned a value)

NaN (Not a Number)

tuthy values :-
Gemini said
In JavaScript, truthy and falsy refer to how values behave when they are evaluated in a "boolean context."

Whenever you put a variable inside an if statement, a while loop, or use it with logical operators, JavaScript automatically tries to convert that value into a strict true or false. This automatic conversion is called type coercion.

The easiest way to learn this concept is to memorize the "falsy" values, because there are only a few of them. If a value is not on the falsy list, it is automatically truthy.

🛑 The Falsy Values
There are exactly 8 falsy values in modern JavaScript. If you put any of these into an if condition, they will evaluate to false:

false (The boolean keyword itself)

0 (The number zero)

-0 (Minus zero)

0n (BigInt zero)

"", '', `` (Empty strings—any string with absolutely nothing in it)

null (The intentional absence of any object value)

undefined (A variable that has been declared but not assigned a value)

NaN (Not a Number)

Example of Falsy:

Everything else is truthy. If it is not on the list of 8 items above, JavaScript will treat it as true.

*/
