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
// console.log(age, weight);

//string

let user_name = "Manish Jaryal";
// console.log(user_name);

//boolean

let isLogedIn = true;
// if (isLogedIn) console.log("user is loged in");

//undefined->no value assigned
let accountId;

// console.log(accountId);

//bigInt
let num = 248785255598525962596526988946512584125854258541255n; //n is requried to be at last
// console.log(num);
// console.log(typeof num);

//null
let insta_id = null;
// console.log(insta_id);
// console.log(typeof insta_id);//typeof inst_id  which store null is object  which is the leagecy  bug which isn't solved

//symbol

const id1 = Symbol("id");
const id2 = Symbol("id");
// console.log(id1, id2);
// console.log(id1 == id2);

//Non primitive data type
//array ,object,fucntion

let arr = [10, "manish", 2.5, true];
// console.log(arr);

//object

const user = {
  userName: "Manish",
  accNo: 567558,
  age: 24,
  gender: "Male",
};

//function
function greeting() {
  //   console.log("hello");
}

greeting();

//typeof()  operator:-

// console.log(typeof greeting);

// console.log(typeof arr);//arr is of object type
//everything in javascript is object type

// primitive is immutable datatype:-
let a = 10;
a = 20; //though immutable  but value can be changed here how???
//the value of a=10 isn't changed but the new block of memory  is allocated and 20 is stored there and a start refrence to that memory block so  ,orignally the value is not changed but the variable started refrencing to new memory block
// console.log(a);

user_name[1] = "j";
console.log(user_name); //the value of username isn't  changed

//non primitive data types are mutable
let arr1 = [5, 6, 9, 5];
arr1[3] = 58;
console.log(arr1);

const obj = {
  name: "Manish",
  age: 56,
};

console.log(obj);
