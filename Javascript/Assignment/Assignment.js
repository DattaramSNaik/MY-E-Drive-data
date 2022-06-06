// //Reverse Number
// // function ReverseNum(Number) {
// //   let Remainder,
// //     ReverseNo = 0;
// //   Number = parseInt(Number);
// //   while (Number != 0) {
// //     Remainder = parseInt(Number % 10);
// //     ReverseNo = parseInt(ReverseNo * 10 + Remainder);
// //     Number = parseInt(Number / 10);
// //   }
// //   return ReverseNo;
// // }
// // const X = ReverseNum(12345);
// // console.log(X);

// //Check Numberr Are Paliendrome or not
// // function Checkpalindrome(Number) {
// //   let Remainder,
// //     ReverseNo = 0;
// //   let temp = Number;
// //   Number = parseInt(Number);
// //   for (; Number != 0; ) {
// //     Remainder = parseInt(Number % 10);
// //     ReverseNo = parseInt(ReverseNo * 10 + Remainder);
// //     Number = parseInt(Number / 10);
// //   }
// //   if (ReverseNo == temp) {
// //     console.log(`${temp} are Paliendrome...!!!`);
// //   } else {
// //     console.log(`${temp} are Not Paliendrome...!!!`);
// //   }
// //   return 0;
// // }
// // const a = Checkpalindrome(222234);

// // Make First Letter Caps
// // function convertFirstLetterCaps(args) {
// //   let arr = args.toLowerCase().split(" ");
// //   let arrEle = arr.map(function (ElementSort) {
// //     return ElementSort.replace(
// //       ElementSort.charAt(0),
// //       ElementSort.charAt(0).toUpperCase()
// //     );
// //   });
// //   console.log(arrEle);
// //   return arrEle.join(" ");
// // }
// // const b = convertFirstLetterCaps("mY nAmE iS aksHay");
// // console.log(b);

// //Check the string are paliendrome or not
// // function checkStrPaliendrome(str) {
// //   let temp = str;
// //   let arr = str.split("").reverse();
// //   let arrjoin = arr.join("");
// //   if (temp == arrjoin) {
// //     console.log(`${temp} are Paliendrome`);
// //   } else {
// //     console.log(`${temp} are  not Paliendrome`);
// //   }
// // }
// // checkStrPaliendrome("bcb");

// // check larrgest no of string letter
// // function checkLargestNoOfString(str) {
// //   let arr = str.split(" ");
// //   console.log(arr);
// //   let count = [];
// //   let temp = [];
// //   let wordPosition = 0;
// //   let largestWord = [];
// //   arr.forEach((element) => {
// //     count.push(element.length);
// //     // console.log(element.length);
// //   });
// //   console.log(count);
// //   for (let i = 0; i < arr.length; i++) {
// //     if (count[i] > temp) {
// //       temp = count[i];
// //       wordPosition = i;
// //     }
// //   }
// //   console.log(`${temp} is size and the word is ${arr[wordPosition]}`);
// // }
// // checkLargestNoOfString("My Name Is Akshay  Dattaram...!");

// //check no. of occurence of word  in string
// // function checkStringOccurence(str) {
// //   let array = str.toLowerCase().split(" ");
// //   let RemoveSpace = array.join("");
// //   let arr = Array.from(RemoveSpace);
// //   console.log(arr);
// //   // for (let a = 0; a <= arr.length; a++) {
// //   //   var temp = arr[a];
// //   //   var counter = 0;
// //   //   for (let b = 0; b <= arr.length; b++) {
// //   //     if (temp === arr[b]) {
// //   //       counter++;
// //   //     }
// //   //   }
// //   //   console.log(`the ${arr[a]} is counted for ${counter}`);
// //   // }

// //   arr.forEach((element) => {
// //     var temp = element;
// //     var count = 0;
// //     arr.forEach((ele) => {
// //       if (temp === ele) {
// //         count++;
// //       }
// //     });
// //     console.log(`the ${element} is counted for ${count}`);
// //   });
// // }
// // checkStringOccurence("hELLO akshay");
// let arr = [40, 100, 1, 5, 10];
// // array.forEach((element) => {
// //   array.forEach((ele) => {
// //     if (element > ele) {
// //       let value = element;
// //       element = ele;
// //       ele = value;
// //     }
// //     console.log(array);
// //   });
// // });
// arr.forEach(function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//       let value = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = value;
//     }
//   }
//   console.log(arr);
// });
// // let arr = [1, 40, 100, 25, 3];

// // arr.forEach(function (item, index, arr) {
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > arr[i + 1]) {
// //       let value = arr[i];
// //       arr[i] = arr[i + 1];
// //       arr[i + 1] = value;
// //     }
// //     console.log(arr);
// //   }
// // });

// let arr = [40, 60, 24, 33];
// let smallest = arr[0];
// let temp = [];
// arr.forEach((element1) => {
//   arr.forEach((element2) => {
//     if (element1 < element2) {
//       if (smallest < element1) {
//         smallest = element1;
//       }
//     } else if (element1 > element2) {
//       if (smallest < element2) {
//         smallest = element2;
//       }
//       smallest = element2;
//     } else {
//       smallest = element2;
//     }
//   });
//   temp.push(smallest);
// });
// console.log(temp);
