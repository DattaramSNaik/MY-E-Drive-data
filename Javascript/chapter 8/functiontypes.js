//Asasign  to a function variable...

let assignVariable = (UserAge) => {
  console.log("Please Insert the age...");
  if (UserAge > 18) {
    let age = `User age is ${UserAge} so user is adult...`;
    return age;
  } else {
    let age = `User age is ${UserAge} so user is not adult...`;
    return age;
  }
};
let data = assignVariable(12);
console.log(data);

functionone = (value1, value2) => {
  return value1 + value2;
};
functiontwo = (a, b, c) => {
  return c(a, b);
};
functiontwo(8, 9, functionone);
console.log(functiontwo(8, 9, functionone));

//example 2
let mynumber = () => {
  console.log("Area of trangle:-");
  return (base, height) => {
    let area = 0.5 * base * height;
    return area;
  };
};

let pick = mynumber()(10, 4);
console.log(pick);
//Reverse Number
let myfun = function () {
  console.log("Reverse a Number...");
  return function (val) {
    let Remainder,
      ReverseNo = 0;
    Number = parseInt(val);
    while (Number != 0) {
      Remainder = parseInt(Number % 10);
      ReverseNo = parseInt(ReverseNo * 10 + Remainder);
      Number = parseInt(Number / 10);
    }
    console.log(ReverseNo);
    return ReverseNo;
  };
};
myfun()(1234567);
console.log(myfun()(1234567));
