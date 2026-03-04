var message = "hello geeks";
console.log(message);
message = "hello developers!!";
console.log(message);

let user_name = "manish";
console.log(user_name);

const dob = "01/08/2001";
console.log(dob);

/*
key facts about variable in js
var-> multiple declaration is possible
var->global scoped can be accesed outside the func or block:
const-> can not be updated
*/

var user_id = 121;
var user_id = 122; //allowed

if (true) {
  var age = 24;
  let score = 500;
}
console.log(age); // fine can be accesed outside the scope
// console.log(score);//error
const power = "high";
// power = "low";//error
