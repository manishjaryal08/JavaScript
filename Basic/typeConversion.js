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

 The Truthy Values

Everything else is truthy. If it is not on the list of 8 items above, JavaScript will treat it as true.

*/
