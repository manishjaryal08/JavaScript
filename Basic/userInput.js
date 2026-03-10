const readline = require("readline-sync");
let input = readline.question("what is your name");
console.log(typeof input);
let num;
if (Number(input) != NaN) {
  num = Number(input);
}
console.log(num + 5);
