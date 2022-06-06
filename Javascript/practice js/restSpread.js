// Rest Operator
function addNumber(a, b, c, ...input) {
  console.log(input[0]);
  console.log(input[1]);
  console.log(input[2]);
  console.log(input[3]);
  return a + b + c;
}
let val = addNumber(2, 4, 6, 3, 5, 6, 8, 9, 2, 5, 6);
console.log(val);
// spread operater
let arr = ["akshay", "saket", "peter", "rishab"];
function getNames(a, ...other) {
  console.log(a);
  console.log(other[0]);
}
getNames(...arr);

// object operater

let student = {
  name: "Akshay naik",
  age: 22,
  hobbies: ["cricket", "chess", "danceing"],
};
// let { name } = student;
// let { age } = student;
// let { hobbies } = student;
let { name, age, hobbies } = student;

console.log(name);
console.log(age);
console.log(hobbies[2]);

let obj = {
  naam: "peter",
  age: 12,
  ...student, //another object calles inside object
};

let createPerson = (person) => {
  //print full object
  let { ...input } = person;
  //let { naam } = person;
  //let { age } = person;

  return (input.name = "ketan kadam"); //object override
};
let b = createPerson(obj);
console.log("op  " + b);
//at the time we used object inside the function  used { put input} there
//https://www.youtube.com/watch?v=sOZwwL_-cBA&list=PL_HlKez9XCSM0bs8P7LtCTGh4rghAD2im&index=1

let arr2 = ["akshay", "saket", "peter", "rishab", "Ganesh", "rajan"];

function FuncTwo(a, b, c, ...other) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(...other);
}
let print = FuncTwo(...arr2);

//Object Destucturing

let car = {
  model: "Hyudai",
  year: 2022,
  color: "black",
  headLight: "Yellpw",
  price: "23lakh",
};

let { model, year, ...rest } = car;
console.log("Model is" + model);
console.log("year is" + year);
console.log("Having Colors", rest);
//override values of object
let newCar = {
  ...car,
  model: "toyota",
  color: "grey",
};
console.log(newCar);

//Closure
function Closure(a) {
  console.log("live User :- " + a);
  let c = 4;
  return function (b) {
    return a + b + c;
  };
}
let store = Closure(5);
console.log(store(5));

function add(a, b) {
  return a + b;
}
function total(a, b, c) {
  return c(a, b);
}
let ss = total(9, 2, add);
console.log(ss);

let Mobile = function () {
  this.a = 10;
};
Mobile.prototype.z = 20; //Prototype of Mobile
Mobile.prototype.ram = function () {
  return "6GB";
};
let Samsung = function () {
  Mobile.call(this); //access a inside Samsung
  this.b = 30;
};

Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype = new Mobile();
Samsung.prototype.constructer = Samsung;
Samsung.prototype.ram = function () {
  return "4GB";
};
let s = new Samsung();
console.log(s.a);
console.log(s.z);
console.log(s.b);
console.log(s.ram());
