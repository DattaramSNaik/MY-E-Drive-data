//Sum of array elements
// let arr = [5, 4, 3, 2, 1];
// function simpleArraySum(ar) {
//   // Write your code here
//   let ar_sum = 0;
//   for (let i = 0; i < ar.length; i++) {
//     ar_sum += ar[i];
//   }
//   console.log(ar_sum);
//   return ar_sum;
// }
// simpleArraySum(arr);

//Compare the Triplets:-

// let a = [1, 2, 6, 4, 5];
// let b = [3, 5, 6, 8, 2];
// function compareTriplets(a, b) {
//   // Write your code here
//   let alice = 0,
//     bob = 0;
//   let array = [];
//   for (let i = 0; i < 5; i++) {
//     if (a[i] > b[i]) {
//       alice++;
//     } else if (a[i] < b[i]) {
//       bob++;
//     } else {
//       console.log();
//     }
//   }
//   array = [alice, bob];
//   console.log(array);
//   return array;
// }
// compareTriplets(a, b);

// // A very Big Sum...
// let array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

// function aVeryBigSum(ar) {
//   let sum = 0;
//   for (let i = 0; i < ar.length; i++) {
//     sum += ar[i];
//   }
//   console.log(sum);
//   return sum;
// }
// aVeryBigSum(array);

// Dignonal difference.....
// let arr1 = [11, 5, -12];
// let arr2 = [4, 5, 10];
// let sum1 = 0;
// for (let i = 0; i < arr1.length; i++) {
//   sum1 += arr1[i];
// }
// console.log(sum1);
// let sum2 = 0;
// for (let j = 0; j < arr2.length; j++) {
//   sum2 += arr2[j];
// }
// console.log(sum2);
// let difference = sum1 - sum2;
// console.log(Math.abs(difference));

// let arr = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ];
// let aValue, bValue, cValue;
// aValue = arr[0];
// bValue = arr[1];
// cValue = arr[2];
// sum1 = aValue[0] + bValue[1] + cValue[2];
// console.log(sum1);
// sum2 = aValue[2] + bValue[1] + cValue[0];
// console.log(sum2);
// let difference = sum1 - sum2;
// console.log(Math.abs(difference));
//peter code
// const length = arr.length;

// let dignonal1 = 0,
//   dignonal2 = 0;
// for (let i = 0; i < length; i++) {
//   dignonal1 = dignonal1 + arr[i][i];
//   dignonal2 = dignonal2 + arr[length - 1 - i][i];
// }
// let difference = dignonal1 - dignonal2;
// console.log(Math.abs(difference));

//plusMinus

// function plusMinus(arr) {
//   let positive = 0;
//   let negative = 0;
//   let zero = 0;
//   const length = arr.length;
//   arr.forEach((element) => {
//     if (element > 0) {
//       positive++;
//     } else if (element < 0) {
//       negative++;
//     } else {
//       zero++;
//     }
//   });
//   let ap = positive / length;
//   let np = negative / length;
//   let zp = zero / length;
//   console.log(np.toFixed(6));
//   console.log(ap.toFixed(6));
//   console.log(zp.toFixed(6));
// }
// console.log(plusMinus([-4, -5, -1, 0, 2, 4]));

// //staircase

// let n = 5;
// let hash = 0;
// for (let i = 0; i < n; i++) {
//   hash = " ".repeat(n - 1 - i) + "#".repeat(i + 1);
//   console.log(hash);
// }
//min max sum
let arr1 = [1, 2, 3, 4, 5];
// let max = arr[0];
// let min = arr[0];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
//   if (min > arr[i]) {
//     min = arr[i];
//   }
//   sum += arr[i];
// }
// console.log(max);
// console.log(min);
// console.log(sum);
// let minimum = sum - max;
// let maximum = sum - min;
// console.log(minimum);
// console.log(maximum);
// function minmaxSum(arr) {
//   let max = arr[0];
//   let min = arr[0];
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//     sum += arr[i];
//   }
//   let minimum = sum - max;
//   let maximum = sum - min;
//   console.log(minimum + " " + maximum);
//   return minimum + " " + maximum;
// }
// minmaxSum(arr1);
//Birthday candles
// let arr = [3, 3, 3, 3, 3, 1, 2];
// let max = Math.max(...arr);
// console.log(max);
// let counter = 0;
// arr.forEach((element) => {
//   if (element == max) {
//     counter++;
//   }
// });
// console.log(counter);
// let Num = 0;
// let num1 = ("" + Num).length;
// console.log(num1);
// if (Num <= 0 || num1 != 4) {
//   console.log("negative");
// } else {
//   console.log("poitive");
// }
recursion = (num) => {
  let num1 = ("" + num).length; // find how many digit of number entered by user
  if (num <= 0 || num1 != 4) {
    let val = `Please Enter Four Digit correct number`;
    console.log("Please Enter Four Digit correct number");
    return val;
  } else if (num == 6174) {
    console.log("Final Value:-" + num);
    return num;
  } else {
    let arr = []; // Make an Array
    let convertToStr = num.toString(); // Number Convert to String Format
    let pushEleArr = arr.push(convertToStr); //Push element inside the arr
    let splitArr = arr[0].split(""); // split array element ['3','2','3','4']
    let sortVal = splitArr.sort(); // Sort an array in assending order ['2','3','3','4']
    let assending = sortVal.join(""); // join assending value 2334
    let splitValDes = sortVal.reverse(); // Sort an array in dessending order using reverse function ['4','3','3','2']
    let desending = splitValDes.join(""); // join dessending value 4332
    console.log("Assending No." + assending);
    console.log("Dessending No." + desending);
    let difference = desending - assending; //take difference between both
    console.log("Difference " + difference);
    num = difference; //put ther difference in num
    return recursion(num);
  }
};
recursion(3234);
