//Functions
/*
 
//function creation
function greeting() {
  return "hey devlopers..!!!";
}

//functioncall
let x = greeting();
console.log(x);

let y = function () {
  console.log("y called");
  return "bye";
};
y();

function addNumber(num1 = 0, num2 = 0, num3 = 0) {
  //setting default value of the parametersx
  return num1 + num2 + num3;
}
console.log(addNumber(1), addNumber(5, 6), addNumber(9, 4, 6));


//use of rest operator(must be last parameter) -> can take any number of parameters as input and store in form of array
function add(...num) {
  console.log(num);
  let sum = 0;
  for (let x of num) {
    sum += x;
  }
  return sum;
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

//rest in destructuring
let [winner, ...runnersup] = ["x", "y", "z", "w"];
console.log(winner, runnersup);


//Arrow Function
const mul = (a, b) => a * b;

//returing object with arrow function --- see it's syntax bcz one arrow func see bracket it see for return stmt
const user = (user_name, user_age) => ({
  username: user_name,
  userage: user_age,
});
// console.log(mul(10, 5));

console.log(user("manish", 24));
*/
//IIFE
(function question() {
  console.log("????");
})();

(() => {
  console.log(`server started`);
})();
