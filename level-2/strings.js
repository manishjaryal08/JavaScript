const str = "  hello Js developers ....!!   ";
/*
 */

//String
//creation
let user_name1 = "Manish";
let user_name2 = " ";
let deviceType = new String("Mobile");
let greeting = `hey dev!!
how's coding going`; //change in line work only with ``
console.log(greeting, user_name1, user_name2);

//length of string

console.log(str.length);

//accessing elements in string
console.log(str[6]);
console.log(str.charAt(6));

//function of string
let uprstr = str.toUpperCase();
let lowstr = str.toLocaleLowerCase();
// console.log(str, uprstr, lowstr);

let index = str.indexOf("el");
let lastindex = str.lastIndexOf("el");
// console.log(index, lastindex);
let flag = str.includes("dev");
// console.log(flag);

let substr = str.slice(str.indexOf("e"), str.lastIndexOf("e") + 1);
// console.log(substr);

console.log(str.slice(-10, -1)); //ulte se index count krna start krta hai

console.log(str.substring(0, 6)); //can't have -ve args
let x = "kya haal chal";
console.log(str.concat(x));
console.log(str.replace("e", "E"));
console.log(str.replaceAll("e", "E"));
console.log(str);

console.log(str.trim());
console.log(str);
const str1 = "Mansih,Harman,Ishant";
console.log(str1.split(",")); //return array
