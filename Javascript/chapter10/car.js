function Car(obj) {
  this.make = obj.make;
  this.model = obj.model;
  this.year = obj.year;
  this.color = obj.color;
  this.passengers = obj.passengers;
  this.convertible = obj.convertible;
  this.mileage = obj.mileage;
  this.started = false;
  this.start = function () {
    this.started = true;
    console.log(
      `Model Name ${obj.make} make by ${obj.model} lunch in ${obj.year} giving mileage ${obj.mileage} comfortably seat ${obj.passengers}.`
    );
  };
}
let obj = {
  make: "xuv",
  model: "hundai",
  year: 2008,
  color: "white",
  passengers: 5,
  convertible: false,
  mileage: 30,
};
let makeCar = new Car(obj);
makeCar.start(obj);
