//object->store in form of key value pair

//creation
const user = {
  name: "Manish Jaryal",
  age: 24,
  "mail Id": "mansihjaryal51@gmail.com",
  phoneNo: "7814446415",
  address: {
    city: "Mukerian",
  },
};
/*

//inseting value in object
user.adharId = 1234;
//acessing value form object
console.log(user.age);
console.log(user["mail Id"]);

//delete from object
delete user.age;
// console.log(user);

//object are copy by reference
const user2 = user;
user2.age = 21;
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

for (let x in user) {
  console.log(user[x]);
}

//destructusing of object

// const {key:renamed var,.....}=obj

const { name, age, "mail Id": id } = user;
// console.log(name, age, id);

//setting default value if property don't exist inside the object
const { power = -1, name: naam } = user;
// console.log(naam, power);

// console.log(user);

const drinks = {
  tea: { ice: "lemon ice tea", classical: "masala tea", genz: "boba tea" },
  coffee: { cold: "hezal nutt cold coffee", hot: "black coffee" },
};

const {
  tea: { ice: iceTea },
  coffee: { cold: coldcoffee },
} = drinks;
console.log(iceTea);
console.log(coldcoffee);
//array destructure
const arr = ["manish", "harman", "ishant", "mandeep"];
const [one, , , two] = arr;
console.log(one, two);
  
//for of loop on objects -- can't be applied directly but can use key or value function which return array
for (let elt of Object.values(user)) {
  console.log(elt);
}
  
//other way
for (let elt of Object.keys(user)) {
  console.log(user[elt]);
}

// entries fucntion of Object
for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}


//this keyword -> refers to the current object
// why it is requried ---
const user1 = {
  user_name: "Manish Jaryal",
  id: 121,
  greeting: function () {
    return `Hey ${this.user_name}`;
  },
};
//while passing the function from user1 to user2 if we don't user this keyword that will print the name of user1 in both the log but this keyword referes to the current object

const user2 = {
  user_name: "Harman",
  id: 122,
};
user2.greeting = user1.greeting;

console.log(user1.greeting());
console.log(user2.greeting());


//creating the copy of the object
const user3 = user; //this will not create copy but reffer to the same object
user3.id = 1;
// console.log(user);
// shallow copy
let user4 = { ...user };
user4.id = 2;
user4.address.city = "bhanagala"; //spread operator work only on 1 level for  nested object it contain the same reference
console.log(user);
console.log(user4);


//deepcopy

const user6 = structuredClone(user); //this will create the diffrent copy of the object
user6.address.city = "bhangala";
console.log(user, user6);

const user7 = {
  greeting: function () {
    return `heelo`;
  },
};
// const user8 = structuredClone(user7);//limitation of structuredClone() is can parse function
*/

// we can also use symbol as key in object

const sym = Symbol("id");
const mobile = {
  [sym]: 123,
  brand: "samsung",
};
console.log(mobile[sym]);
console.log(Object.keys(mobile)); //symbol are not shown in key function
//symbol as key are also hidden from for in loop
for (let x in mobile) {
  console.log(x);
}
