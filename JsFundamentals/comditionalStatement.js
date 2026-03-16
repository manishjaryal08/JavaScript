const readlineSync = require("readline-sync");
/*
let age = readlineSync.question("how old are you \n");
if (age > 18) {
  console.log("you are eligible to vote");
} else {
  console.log("you cannot vote");
}

let isLogedIn = false;
const userPassword = "1234";
if (readlineSync.question("enter your password") === userPassword) {
  isLogedIn = true;
} else {
  console.log("wrong password \n  try again!!!!");
}
if (isLogedIn) {
  console.log("user acces granted");
}
*/

let num1 = Number(readlineSync.question("enter first number \n"));
let num2 = Number(readlineSync.question("enter second number \n"));
let operator = readlineSync.question("enter the operation to perfrom \n");

if (operator == "+") {
  console.log(num1 + num2);
} else if (operator == "-") {
  console.log(num1 - num2);
} else if (operator == "*") {
  console.log(num1 * num2);
} else if (operator == "/") {
  console.log(num1 / num2);
} else {
  console.log("invalid operator");
}
