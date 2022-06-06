// // //with variable name
// // let fly = function (num) {
// //   for (let i = 0; i < num; i++) {
// //     console.log("flying");
// //   }
// // };
// // fly(5);
// // //with function name...
// // function flying(num) {
// //   for (let i = 0; i < num; i++) {
// //     console.log("flying");
// //   }
// // }
// // flying(5);
// //first class value
// //assignmnt to a variable...
// //passed as  argument...
//returned from a function...
let object = {
  name: " aksahy Naik",
  age: 21,
  empid: 278,
  comp: "vast",
};

function sayhello(name) {
  return name;
}
console.log(sayhello(object.comp));

// function fun(value) {
//   return value;
// }
// console.log(fun(object.comp));

// // fun(" akshay");
// let fun2 = function (value) {
//   return value;
// };
// console.log(fun2(object));
// //passing as an  argument
// function getRectArea(width, height) {
//   if (width > 0 && height > 0) {
//     return width * height;
//   }
//   return 0;
// }

// console.log(getRectArea(8, 4));

// // console.log(getRectArea(4, 5));
// let fly = function (num) {
//   for (let index = 0; index < num; index++) {
//     console.log(`flying ${index}`);
//   }
// };
// fly(2);

// //passed as aargument to a function...
// function timeHandler() {
//   console.log("i am a title handler...!");
// }
// // setInterval(timeHandler, 2000);

// passing argument to a function

// let myFunction = (Length, breath) => {
//   let AreaOfREC = Length * breath;
//   console.log(AreaOfREC);
// };
// function AREA() {
//   console.log("Area of rectrangle is:");
//   return myFunction(2, 4);
// }
// let x = AREA();

// function myFunction(num) {
//   return num * 10;
// }

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);

// function myFunction(num) {
//   return num * 10;
// }
