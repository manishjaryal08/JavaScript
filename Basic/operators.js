/*


//Arithmetic operators
console.log(10 + 20);
console.log(23 - 6);
console.log(2 * 3);
console.log(8 / 2);
console.log(98 % 8);
console.log(5 ** 3);

//Assigment operator
let num1 = 50;
let num2 = 89;
num1 = num1 + 4;
// console.log(num1);
let result = num1 + num2;

num1 += 6; //num1=num1+6

//comparision operator
//== equaltiy
//=== strict equality
let user = "Manish";
let password = "1234";
let islogedIn = false;
if (user == "Manish") {
  if (password === 1234) {
    islogedIn = true;
  }
}

if (islogedIn) {
  console.log("user is loged in sucessfully");
} else {
  console.log("user login unsucessful");
}

if (num1 > num2) {
  console.log("num1 is greater");
} else {
  console.log("num2 is greater");
}

//issue with floating point numbers --  classical problem -- to handle this tofixed()function is used

let x = 0.1;
let y = 0.2;
let c = x + y;
if (c == 0.3) {
  console.log("inside the if block");
} else {
  console.log(c);
}
//problem fixed
if (c.toFixed(1) == 0.3) {
  console.log("inside the if block");
}


//ecma script rules
//null is loosely equal to undefined...nothing else just undefined
console.log(null == undefined); //true
console.log(null === undefined); //false

// for >,<,>=,<= ... null is considered as number and undefined in considered as Nan

console.log(null >= 0);

//String compersion -> from the first character and compare there assci value if equal then move to next character
*/
console.log("Mani" < "Zani");

console.log(null >= "");

//logical  operator
let a = 10;
let b = 20;
console.log(a && b); //b -> first true and so second answer hoga and mei
console.log(a || b); //a -> first true hai next dekhna hi nhi
let q = "mani";
let k = "ani";
console.log(q && k, q || k); //same logic
