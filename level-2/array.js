const arr = [1, 5, 3, 6, 75, 57];
/*

//array creation
let marks = [10, 5, 6, 9, 8, 7, 6, 8];
//printing array
console.log(marks);
//acessing elements of array
console.log(marks[2]);
//array in js can store the hetrogeneous type of data
let arr2 = ["Manish", 24, 65, true];
console.log(arr2);
//length of array
console.log(arr2.length);
 

//arr are mutable in array

arr[0] = "ghr";
console.log(arr);

// add elmt at end of  array
arr.push("strike");
console.log(arr);
//delete elmt form end of array
let x = arr.pop();
console.log(x);
console.log(arr);

//add and delete element from start of array
arr.unshift(5);
console.log(arr);
arr.push(["manish", "jaryal", 571]);//complete array will be stored as single element
console.log(arr);
arr.shift();
console.log(arr);
//try to avoid shift and unshift operation

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
//for of loop
for (let elt of arr) {
  console.log(elt);
}


//copying array pass the reference
let arr2 = arr;
arr2.push("hello");

let arr3 = [59, 7, 94, 289, 985];
// arr = arr3; //error ..bcz array is declared with const u can't change the reference

console.log(arr);

console.log(arr3.slice(2, 3)); //slice(start ,end) end is exclusive --return the part of array without affecting orignal

// console.log(arr3.splice(2, 4)); //splice(start, number of elmt) --- return part of array and remove it from orignal
console.log(arr3.splice(1, 2, "mansug", "fwh", 55, 67)); //after start and no of elmt... pass the elements you want to insert
console.log(arr3);


let num = [5, 99, 4, 9, 875, 24];
// let y = num + arr; //adding two arr will return all elment in string format
// console.log(typeof y);
let arr5 = arr.concat(arr, num); //concat with array will return new array
console.log(arr5);
//spread
let arr6 = [...num, ...arr, ...arr5];
console.log(arr6);

console.log(arr.toString()); //return string
console.log(arr.join("--")); //it will also return string but you can modify the seperator bet them

//reverse()
arr.reverse();
console.log(arr);

//sort
let x = arr.sort(); //sort the orignal array and retrun it's reference
x.push(88);
console.log(x);
console.log(arr);
//problem will sort func it treat the elemt as string and compare char by char so sorting number will not give correct results
*/
arr.sort((a, b) => a - b); //ascending order
// console.log(arr);
let y = [4, 68, 96, 8, [95, 55, [59, 65, 9, 6], 5], 55, 8];
let z = y.flat(Infinity); //flat will have para as no of level u want to make array flat
// console.log(y);
// console.log(z);

//array in js is not array it's object
console.log(y["1"]);
y.name = "manish";

console.log(y);
