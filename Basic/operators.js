//Arithmetic operators
/*
console.log(10 + 20);
console.log(23 - 6);
console.log(2 * 3);
console.log(8 / 2);
console.log(98 % 8);
console.log(5 ** 3);
*/

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
