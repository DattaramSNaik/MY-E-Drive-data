//parent class
function Dog(name, breed, weight) {
  this.name = name;
  this.weight = weight;
  this.breed = breed;
}
//parent class prototype function
Dog.prototype.bark = function () {
  if (this.weight > 25) console.log("Woof Woof");
  else console.log("woof woof");
};
//parent class prototype
Dog.prototype.species = "canine";
//parent class prototype
Dog.prototype.sitting = false;
//parent class prototype function
Dog.prototype.sit = function () {
  if (this.sitting) console.log(this.name + " is already sitting");
  else {
    this.sitting = true;
    console.log(this.name + " is now sitting");
  }
};
Dog.prototype.run = function () {
  console.log("running");
};
Dog.prototype.wag = function () {
  console.log("wag the tail");
};
//child class object
function ShowDog(name, breed, weight, handler) {
  Dog.call(this, name, breed, weight); //used all parent class variable
  this.handler = handler;
}
//child class showdag try to access parent values as well as prototyppe
ShowDog.prototype = new Dog();

ShowDog.prototype.constructor = ShowDog;
console.log((ShowDog.prototype.constructor = ShowDog));
ShowDog.prototype.league = "webville";
ShowDog.prototype.stack = function () {
  console.log("stack");
};
ShowDog.prototype.bait = function () {
  console.log("bait");
};
ShowDog.prototype.gait = function () {
  console.log("gait");
};
ShowDog.prototype.groom = function () {
  console.log(this.league);
  console.log("groom");
};
let scotty = new ShowDog("scotty", "mixed", 35, "james");
scotty.run();
scotty.gait();
scotty.sit();
scotty.groom();

console.log(scotty.constructor);
console.log(scotty.league);
// function extend(child, parent) {
//   child.prototype = new parent();
//   child.prototype.constructor = child;
// }
function dispOp(total) {
  console.log(total);
}
function sumoftwoNumber(a, b, CallBack) {
  let sum = a + b;
  return CallBack(sum);
}
sumoftwoNumber(5, 5, dispOp);
