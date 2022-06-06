//parent class...
function Mobile() {
  this.a = 10;
}
//prototyping ...
Mobile.prototype.z = 24;
Mobile.prototype.c = 55;
//child class...
function Samsung() {
  Mobile.call(this);
  this.b = 20;
}
//prototype Inheritance...
Samsung.prototype = Object.create(Mobile.prototype);
//Samsung.prototype = new Mobile();
// //constructor reset...
Samsung.prototype.constructor = Samsung;
//prototype Overriding...
// Samsung.prototype.z = 50;

let s = new Samsung();

console.log(s.b);
console.log(s.a);
console.log(s.z);
