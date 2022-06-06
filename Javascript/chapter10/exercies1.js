function Robot(name, year, owner) {
  this.name = name;
  this.year = year;
  this.owner = owner;
}
Robot.prototype.maker = "Making";

Robot.prototype.speak = "Robot Speak";

Robot.prototype.makeCoffee = "Robot makeCoffee";

Robot.prototype.blinkLights = function () {
  console.log("Robot Blink light");
};
let robby = new Robot("robby", 1956, "Dr.Morbius");

var rosie = new Robot("rosie", 1962, "Dr.Morbius");

robby.onOffSwitch = function () {
  console.log("Robby Please On/off Switch");
};
robby.makeCoffee = function () {
  console.log("Robby Please Make Coffee");
};
rosie.cleanHouse = function () {
  console.log("Rosie Please clean house");
};
console.log(
  robby.name +
    " was made by " +
    robby.maker +
    " in " +
    robby.year +
    " and is owned by " +
    robby.owner
);
robby.makeCoffee();
robby.blinkLights();
console.log(
  rosie.name +
    " was made by " +
    rosie.maker +
    " in " +
    rosie.year +
    " and is owned by " +
    rosie.owner
);
rosie.cleanHouse();
