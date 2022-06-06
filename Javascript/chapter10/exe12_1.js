function widget(partNo, size) {
  this.no = partNo;
  this.breed = size;
}
function FormFactor(material, widget) {
  this.material = material;
  this.widget = widget;
  return this;
}
let widgetA = new widget(100, "large");
console.log(widgetA);

let formFactorA = new FormFactor("plastic", widgetA);
console.log(formFactorA);
let widgetB = new widget(101, "smaill");
console.log(widgetB);
let formFactorB = new FormFactor("metal", widgetB);
console.log(formFactorB);
