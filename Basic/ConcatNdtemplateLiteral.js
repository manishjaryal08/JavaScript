// Concatenation and
// Template Literal -> readability nd works well with multiple line

let userName = "Manish Jaryal";
let age = 24;
let message1 = userName + " is " + age + " years old"; //concatination
let message2 = `${userName} is ${age} years old`; //Template Literal
// console.log(message2);
// console.log(message1);

// concat()
let message3 = userName.concat("is ", age, " years old");
// console.log(message3);

// join()

let greeting = ["good morning", userName, "your password is", 123456789];
// console.log(greeting.join(" "));
// console.log(greeting.join());
