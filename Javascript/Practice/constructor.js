//Constructor Without Parameter
function Mobile() {
  this.model = "3310";
  this.price = function () {
    console.log(this.model + "500");
  };
}
var i = new Mobile();
i.price();
//Constructor With Parameter
function Car(model, color, year) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.start = () => {
    console.log(`${this.model} color ${this.color} making year ${this.year}`);
  };
}
let toyota = new Car("toyota", "black", "2009");
let bmw = new Car("bmw", "blue", "2022");
toyota.start();
bmw.start();
console.log(toyota instanceof Car);
