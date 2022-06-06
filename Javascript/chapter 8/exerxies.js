//return from function...
//assign variable to a function...
let mynum = function () {
  let final = myFunction(3, 4);
  return final;
};
function myFunction(length, breath) {
  let area = length * breath;
  return area;
}
let value = mynum();
console.log(value);

//passed as an argument function

function home() {
  let b = "I want to go";
  return b;
}
let val = home();
function travel(fun, city) {
  let travel = fun + " " + city;
  return travel;
}
let c = travel(val, "mumbai");
console.log(c);
