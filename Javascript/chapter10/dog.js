function Dog(name, weight, breed) {
  this.name = name;
  this.weight = weight;
  this.breed = breed;
}
Dog.prototype.sitting = false;
Dog.prototype.bark = function () {
  console.log("barking");
};
Dog.prototype.run = function () {
  console.log(`${this.name} is running`);
};
Dog.prototype.sit = function () {
  if (this.sitting) {
    console.log(this.name + " is already sitting");
  } else {
    this.sitting = true;
    console.log(this.name + " is now sitting");
  }
};
let spotty = new Dog("Spotty", 23, "mixed");
spotty.bark = function () {
  console.log("spotty is barking");
};
let spike = new Dog("Spike", 12, "mixed");

spotty.bark();
spike.bark();

spotty.run();

// console.log(spotty.hasOwnProperty("bark"));
// console.log(spike.hasOwnProperty("bark"));

console.log(Object.keys(spotty));

// for (let prop in spotty) {
//   console.log(Object.keys(prop));
// }

//console.log(spotty.hasOwnProperty("sitting"));
spotty.sit();
//console.log(spotty.hasOwnProperty("sitting"));
spotty.sit();
console.log("Object of spotty");
console.log(Object.keys(spotty));
//console.log(spike.hasOwnProperty("sitting"));
console.log("Object of spike");
console.log(Object.keys(spike));
