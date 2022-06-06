// function myfun(name, weight) {
//   if (weight > 20) {
//     console.log(`${name}`);
//   } else {
//     console.log(`${name} not eligible`);
//   }
// }
// myfun("akshay", 22);

// const Friends = [
//   "Rishab",
//   "Finney",
//   "Indira",
//   "Peter",
//   "Saurabh",
//   "Saket",
//   "Rajeshree",
//   "Pradnya",
//   "Akshay",
//   "Diksha",
//   "Aditya",
//   "Prashant",
//   "Kumudi",
// ];
// let message = "Happy Birthday To You";
// for (let i = 0; i < Friends.length; i++) {
//   for (let j = 1; j < 5; j++) {
//     if (j != 3) {
//       console.log(message);
//     } else {
//       console.log(`Happy birthday Dear ${Friends[i]} `);
//     }
//   }
//   console.log("====================");
//}
//pass by value are called
// let age = 7;
// function addOne(x) {
//   x = x + 1;
//   console.log(x);
// }
// addOne(age);
// console.log("age", age);

// function makeTea(cups, tea) {
//   console.log(`"browing ${cups} serving${tea}`);
// }
// makeTea(3);

// function makeTea(cups, tea) {
//   console.log(`"browing ${cups} serving ${tea}`);
// }
// makeTea(3, "errl gray", "hey ma", 42);

// function make() {
//   console.log(`"browing sarving`);
// }
// make();

// function addnum(a, b) {
//   return a * b;
// }
// const mul = addnum(3, 5);
// console.log(mul);
//Example 1
function whatShallIWear(temp) {
  if (temp < 70) {
    console.log("Wear a Sweater");
  } else if (temp < 60) {
    console.log("wear a jacket");
  } else {
    console.log("wear t-shirt");
  }
  return temp;
}
const wear = whatShallIWear(60);
console.log(wear);
const wear2 = whatShallIWear(70);
console.log(wear2);
const wear3 = whatShallIWear(30);
console.log(wear3);
//Example 2
function dogYear(dogName, age) {
  var Years = age + 7;
  console.log(dogName + " is " + Years + " year old");
}
var mydog = "fido";
dogYear(mydog, 4);
//example 3
function makeTea(cups, tea) {
  console.log(`"browing ${cups} serving ${tea}`);
}
var guest = 3;
makeTea(guest, "customer");
//4.3
function clunk(times) {
  var num = times;
  while (num > 0) {
    display("clunk");
    num = num - 1;
  }
}
