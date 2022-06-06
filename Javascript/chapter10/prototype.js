function Dog(name, weight, breed) {
  this.name = name;
  this.weight = weight;
  this.breed = breed;
}
Dog.prototype.bark = function () {
  console.log("barking");
};
Dog.prototype.run = function () {
  console.log(`${this.name} is running`);
};
Dog.prototype.sitting = false;
Dog.prototype.sit = function () {
  if (this.sitting) console.log(`${this.name}is already sitting`);
  else {
    this.sitting = true;
    console.log(`${this.name}is now sitting`);
  }
};
function ShowDog(name, breed, weight, handler) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.handler = handler;
}
ShowDog.prototype = new Dog();
const bruno = new ShowDog("bruno", "mixed", 23, "jack");
bruno.run();
ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function () {
  console.log("Stack");
};
bruno.stack();
ShowDog.prototype.bait = function () {
  console.log("Bait");
};
bruno.bait();
ShowDog.prototype.gait = function (kind) {
  console.log(kind + "ing");
};
bruno.gait();
ShowDog.prototype.groom = function () {
  console.log("Groom");
};
bruno.groom();
