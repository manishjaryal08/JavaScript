/*

DataTypes:-
1.primitive 
    ->number,string,boolean,undefined,null,bigint,symbol
2.non-primitiv
    ->array,object,function

*/

//number->range 2^53 -1 to -2^53
let age = 24;
let weight = 65.25;
console.log(age, weight);

//string

let user_name = "Manish Jaryal";
console.log(user_name);

//boolean

let isLogedIn = true;
if (isLogedIn) console.log("user is loged in");

//undefined->no value assigned
let accountId;

console.log(accountId);

//bigInt
let num = 248785255598525962596526988946512584125854258541255n; //n is requried to be at last
console.log(num);
console.log(typeof num);

//null
let insta_id = null;
console.log(insta_id);
