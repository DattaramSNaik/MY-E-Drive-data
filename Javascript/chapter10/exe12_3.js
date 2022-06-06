function Car(CarObj) {
  this.make = CarObj.make;
  this.model = CarObj.model;
  this.year = CarObj.year;
  this.color = CarObj.color;
  this.passengers = CarObj.passengers;
  this.convertible = CarObj.convertible;
  this.mileage = CarObj.mileage;
  this.start = function () {
    console.log(`Start ${CarObj.make} with Nutral...!!!`);
  };
  this.drive = function () {
    console.log(`Drive ${CarObj.make} speed 40km/h`);
  };
  this.stop = function () {
    console.log(`stop ${CarObj.make} with power off`);
  };
}
let CarObj = {
  make: "xuv",
  model: "hundai",
  year: 2008,
  color: "white",
  passengers: 5,
  convertible: false,
  mileage: 30,
};
let makeCar = new Car(CarObj);
makeCar.start(CarObj);
makeCar.drive(CarObj);
makeCar.stop(CarObj);
