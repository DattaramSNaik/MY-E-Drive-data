function Dog(name, breed, weight) {
  this.name = name;
  this.weight = weight;
  this.breed = breed;
}
Dog.prototype.bark = function () {
  if (this.weight > 25) console.log("Woof Woof");
  else console.log("woof woof");
};
Dog.prototype.species = "canine";
Dog.prototype.sitting = false;
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

function ShowDog(name, breed, weight, handler) {
  Dog.call(this, name, breed, weight);
  this.handler = handler;
}
ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;
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
  console.log("groom");
};
let scotty = new ShowDog("scotty", "mixed", 35, "james");
scotty.run();
scotty.gait();

console.log(scotty.constructor);
