//### Mixin OR Composition ###
//used Object.assign

//function for Inheritance
// function extend(child, parent) {
//   child.prototype = Object.create(parent.prototype);
//   child.prototype.constructor = child;
// }
//parent class
// let Human = function () {
//   //human can need Walk(),talk(),eat()
// };
// Mobile.prototype.eat = function () {
//   return "can eat anywhere";
// };
// Mobile.prototype.talk = function () {
//   return "can talk anywhere";
// };
// Mobile.prototype.walk = function () {
//   return "can walk anywhere";
// };
// // child class
// let Animal = function () {
//   //Animal can need Walk(),talk(),eat()
// };
// //sub(child) class animal extending super(parent) human class features
// extend(Animal, Human);

// // child class
// let Robot = function () {
//   //human can need Walk(),talk(),start()
// };
// //sub(child) class animal extending super(parent) human class features
// extend(Robot, Human);

//Mixin Example
let eating = {
  eat: function () {
    return "I can eat";
  },
};
let walking = {
  walk: function () {
    return "I can walk";
  },
};
let Talking = {
  Talk: function () {
    return "I can Talk";
  },
};

let Human = function () {};
let Animal = function () {};
let Robot = function () {};
//Mixins
Object.assign(Human.prototype, walking, Talking, eating);
Object.assign(Animal.prototype, walking, eating);
Object.assign(Robot.prototype, walking, Talking);
//composition
let Rahul = new Human();
console.log(Rahul.walk(), Rahul.Talk(), Rahul.eat());
let ORRA = new Animal();
console.log(ORRA.walk(), ORRA.eat());
let BADY = new Robot();
console.log(BADY.walk(), BADY.Talk());
let AKSHAY = Object.assign({}, walking, Talking, eating);
console.log(AKSHAY.Talk(), AKSHAY.eat(), AKSHAY.walk());
