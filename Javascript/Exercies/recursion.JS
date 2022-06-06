// function recursion(Num) {
//     for (; ;) {

//     if (Num != 6174) break;
//   }
// }
// recursion(Num)

let arr = [];
let num = 5471;
let text = num.toString();
let numpush = arr.push(text);
let splitAss = arr[0].split("");
//Assending Order
let sortVal = splitAss.sort();
let assending = sortVal.join("");
//dessending array
let splitDes = sortVal.reverse();
let desending = splitDes.join("");
console.log(assending);
console.log(desending);
let difference = desending - assending;
console.log(difference);

// function recursion(num) {
//   if (num <= 0) {
//     console.log("PLEASE ENTER 4 DIGIT NO.");
//   } else {
//   }
// }
// recursion(5471);
var int_number = 254;
var int_length = ("" + int_number).length;
console.log(int_length);
