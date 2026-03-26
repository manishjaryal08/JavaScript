/*
 
//Math object

let num = -56;
let num3 = Math.abs(num);
// console.log(typeof num3, num3);
console.log(Math.PI.toFixed(5));
console.log(Math.max(554, 668, 84, 9, 6));
console.log(Math.ceil(5.68));

console.log(Math.random().toFixed(3));


//Math.random() generate the random number bet 0 and 1 where 0 is inclusive but 1 is exclusive

// console.log((Math.ceil(Math.random() * 10) % 6) + 1);

//random number generator between 15-25
for (let i = 0; i < 50; i++) {
  console.log(rannum + "   ");
}
  

*/

// random function

let date = new Date();
let num = date.getTime() % 10;
num /= 10;
console.log(Math.sqrt(num));
