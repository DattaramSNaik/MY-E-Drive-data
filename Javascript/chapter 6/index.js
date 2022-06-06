// let car = {
//   make: "honda",
//   colour: "black",
//   isConventible: "false",
//   passanger: 5,
//   start: function () {
//     console.log("strarted");
//   },
// };
// for (let prop in car) {
//   if (typeof car[prop] != "function") {
//     console.log(car[prop]);
//   }
// }
// console.log(Infinity - "1");
// console.log("42" + 42);
// console.log(2 + "1 1");
// console.log(99 + 101);

// console.log("result:" + 10 / 2);
// console.log(3 + "bananas" + 2 + "apples");

let city = {
  make: "honda",
  model: "city",
};

function createCar(car) {
  let copy = { ...car };
  console.log(copy);
  console.log(car === city);
  console.log(car === copy);
  console.log(copy === city);
}
createCar(city);
