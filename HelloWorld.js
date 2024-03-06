// console.log("Starting...");
// alert("Welcome to HelloWorld page!");
// console.log("I am learning JavaScript programming");

//                        Variables.js

// fullName = "Bhavit jain";
// age = 20;
// price =  99.99;
// r = 14;
// x = null;
// y = undefined;
// isFollow = true;

// fullName = 25;

// full_name =  "Bhavit Jain";
// Full_Name = "Tony Stark";

// console.log(full_name);
// console.log(Full_Name);

// a = 10;
// b = 10;
// let sum = a + b;
// console.log(sum);

// console.log(10 + 2 - 4);

// let full_name = "Bhavit Jain";
// console.log(full_name);

// This is not the correct way to declaired any variables in javascript after 2015, we get two new standard variables like let and const.
// var age = 20;

// var age = 40;

// var age = 50;

// console.log(age);

// const PI = 3.14;
// console.log(PI);

//                         Block code

// first block
// {
//   let a = 10;
//   console.log(a);
// };
// second block
// {
//   let a = 15;
//   console.log(a);
// };
// third block
// {
//   let a = 10;
//   let A = a + 10;
//   console.log(A);
// };

// let age = 10;

// let x;

// let x = null;

// let num = BigInt(123456789);

// let sign = Symbol("Hello!");

//                        Object Creation

// const Student = {
//     fullName: "Bhavit Jain",   // key :value
//     age: 20,
//     cgpa: 8,
//     isPass: true,
// };
// // Method to get value from a key
// console.log("Name of student: " + Student.fullName); // first method to get value
// console.log("Old age: " + Student["age"]); // second method to get value

// // Adding the new value to the Student object(current value)
// Student["age"] = Student["age"] + 1;

// console.log("New age: " + Student.age);

//              Example of creating a new Product object

// const Product = {
//     title: "Ball pen",
//     rating: "4.1",
//     deal_of_the_day: "true",
//     price: "270",
//     offer: "5% OFF",
// };

//              Example of creating a new Profile object.

// const Profile = {
//     isFollow: true,
//     followers: 123,
//     followings: 123,
//     username: "@BhavitJain",
// };

// // method of checking datatype of value in object
// console.log(typeof Profile.isFollow);

//                              Operators

//                  Arithmetic operators (+,-,*,/).

// let a = 2;
// let b= 30;

// let sum = a + b;
// let sub = a - b;
// let mul = a * b;
// let div = a / b;

// a++; // Increment operator
// b--; // Decrement operator

// // console.log(sum, sub, mul, div);
// console.log(a, b);

// let a = 5;
// a **= 4;
// console.log("a = " + a);

//                  Comparison operator
// let a = 5;
// let b = 2;
// let c = 3;
// let d = "3";
// console.log("5 == 2", a == b);
// console.log("3 == 3", c == d);

//                          Logical operators

// let a = 5;
// let b = 5;
// let cond1 = a >= b;
// let cond2 = a === b;

// console.log("cond1 && cond2: " + cond1 && cond2);

//                  vote age checking program.
// let age = 20;

// if (age >= 18) {
//     console.log("You can vote");
// }else if(age < 18) {
//     console.log("You can't vote");
// }else{
//     null;
// }

//               background color checking program.
// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "light") {
//   color = "white";
// } else {
//   null;
// }

// console.log(color);

//                    odd or even checking program.
let num = "11";

if (num % 2 === 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}


