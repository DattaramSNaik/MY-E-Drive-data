let a = ["Akshay", "Peter", "saket"];
[x, y, z] = a;
console.log(x);
console.log(y);
console.log(z);

var c, b;
[c, b] = [10, 20];
console.log(c);
console.log(b);

var p, k;
[p = 100, k = 20] = [, 10];
console.log(p);
console.log(k);
//nested Arrahy st
let d = ["Akshay", "Peter", "saket", ["tajas", "prathmesh"]];
[u, v, w, [x1, x2]] = d;
console.log(u);
console.log(v);
console.log(w);
console.log(x1);
console.log(x2);

//destructing object
const car = {
  type: "toyota",
  model: "2009",
  color: "black",
};
const { type, model, color } = car;
console.log({ type, model, color });
