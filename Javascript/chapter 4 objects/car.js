//object literal syntax
//"use strict";
let car = {
  make: "honda",
  model: "city",
  colour: "black",
  milage: "20",
  passengerSeat: 5,
  isConversible: false,
  started: false,
  start: function () {
    started = true;
  },
  stop: function () {
    started = false;
  },
  drive: function () {
    if (this.started == true) {
      console.log("zoom zoom");
    } else {
      console.log("please start engine");
    }
  },
};

car.start();
console.log(`started ${started}`);
car.drive();
car.stop();
console.log(`started ${started}`);
for (let prop in car) {
  console.log(`${prop} - ${car[prop]}`);
}
