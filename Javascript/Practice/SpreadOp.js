const cities = ["Mumbai", "Pune", "Delhi"];
console.log(...cities);

const std = {
  name: "ketan",
  age: 22,
  hobbies: "singing",
};
let blog = `Hello I am ${std.name}.i am ${std.age} year old and my hobbie ${std.hobbies}..!`;
console.log(blog);

function greet(name = "Fellow", greeting = "Welcome") {
  return `${greeting} ${name}`;
}
console.log(greet()); // Welcome Fellow
console.log(greet("Kagga")); // Welcome Kagga
console.log(greet("Mike", "Hi")); // Hi Mike
