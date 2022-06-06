//Apply call bind in js
//In Object this keyword used for self referncing
//call():- function present in one object only and another object can also access that
//first Object can Make function and its used another objects
//########### function inside the object  #########################
// let userone = {
//   name: "akshay",
//   age: 23,
//   hobbies: ["Cricket", "Bike riding", "coomics reading"],
//   printDetails: function () {
//     this.countHobbies = this.hobbies.length;
//     console.log(this);
//   },
// };
// userone.printDetails();
// let usertwo = {
//   name: "peter",
//   age: 28,
//   hobbies: ["basketball", "soccer", "listening songs"],
// };
// let userthree = {
//   name: "rishabh",
//   age: 28,
//   hobbies: ["basketball", "Programming"],
// };
// let userfour = {
//   name: "finney",
//   age: 28,
//   hobbies: ["basketball", "Programming", "soccer", "listening songs"],
// };
// let userfive = {
//   name: "saket",
//   age: 28,
//   hobbies: [
//     "basketball",
//     "Programming",
//     "cricket",
//     "soccer",
//     "listening songs",
//   ],
// };
// // //function borrowing
// userone.printDetails.call(usertwo);
// userone.printDetails.call(userthree);
// userone.printDetails.call(userfour);
// userone.printDetails.call(userfive);
// //########### function outside the object  #########################
let printData = function (state, country) {
  this.countHobbies = this.hobbies.length;
  console.log(this.name + " " + state + " " + country);
  console.log(this.countHobbies);
};
let one = {
  name: "akshay",
  age: 23,
  hobbies: ["Cricket", "Bike riding", "coomics reading"],
};

let two = {
  name: "peter",
  age: 28,
  hobbies: ["basketball", "soccer", "listening songs"],
};
let three = {
  name: "rishabh",
  age: 28,
  hobbies: ["basketball", "Programming"],
};
let four = {
  name: "finney",
  age: 28,
  hobbies: ["basketball", "Programming", "soccer", "listening songs"],
};
let five = {
  name: "saket",
  age: 28,
  hobbies: [
    "basketball",
    "Programming",
    "cricket",
    "soccer",
    "listening songs",
  ],
};
//function borrowing
printData.call(one, "Mumbai", "India");
printData.call(two, "pune", "India");
printData.call(three, "delhi", "India");
printData.call(four, "punjab", "India");
printData.call(five, "jammu", "India");
//Apply used to pass argument as a array format
printData.apply(one, ["Mumbai", "India"]);
printData.apply(two, ["pune", "India"]);
printData.apply(three, ["delhi", "India"]);
printData.apply(four, ["punjab", "India"]);
printData.apply(five, ["jammu", "India"]);
