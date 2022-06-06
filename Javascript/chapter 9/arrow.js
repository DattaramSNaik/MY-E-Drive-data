//Arrow Functions
//Annonymous function
(name) => {
  return name.toUpperCase();
};

let upperFn = (name) => `hello ${name.toUpperCase()}`;

setTimeout(() => {
  console.log("time handler");
}, 2000);

setTimeout(() => console.log("time handler"), 2000);

//Object functions
let getObj = (name, age, gender) => ({
  name,
  age,
  gender,
});
console.log(getObj("Akshay", 28, "F"));

//Objects  can be used as well as the below example

let person = {
  fname: "Akshay",
  gender: "Male",
  city: "Mumbai",
};

const { fname, gender, city } = person;

console.log(fname);
console.log(gender);
console.log(city);
