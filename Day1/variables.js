//var declaration and defination
/*
using let keyword

*/
let userName = "Manish Jaryal";
let userAge = 24;

//updating value
userAge = 25;
// console.log(userName + " " + userAge);
// let userName = "mani";//let , const can't be re-declared
if (true) {
  let userName = "mansih";
  let passkey = 564;
  console.log(userName);
}
// console.log(passkey);//no issue with let

/*
using const keyword
*/
const Dob = "01/08/2001";
// Dob = "02/08/2001";//const value can be updated

/*
using var keyword :->old method
 problem with  var
  -> can redeclare the variable 
  -> var created can be accessed anywhere in the program
*/
var accountId = 1234;
var accountId = 124; //no error
// console.log(accountId);

if (true) {
  var powerLevel = 10;
}

console.log(powerLevel); //powerlevel can be accesed outside the scope

function counter() {
  let count = 0;
}

// console.log(count);//error the var declared in func can't be accesed outside
