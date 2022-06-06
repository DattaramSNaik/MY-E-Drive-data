function Coffee(roast, ounces) {
  this.roast = roast;
  this.ounces = ounces;
  this.getSize = function () {
    if (ounces >= 8 && ounces <= 11) {
      //   console.log(`you've ordered small ${roast}`);
      return `you've ordered small size ${roast}`;
    } else if (ounces >= 12 && ounces <= 15) {
      //   console.log(`you've ordered medium ${roast}`);
      return `you've ordered medium size ${roast}`;
    } else if (ounces > 15) {
      //   console.log(`you've ordered large ${roast}`);
      return `you've ordered large size ${roast}`;
    }
  };
}

var houseBlend = new Coffee("House Blend", 12);
// console.log(houseBlend.toString());
console.log(houseBlend.getSize());
var darkRoast = new Coffee("Dark Roast", 16);
// console.log(darkRoast.toString());
console.log(darkRoast.getSize());
