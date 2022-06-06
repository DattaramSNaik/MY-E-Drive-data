// function random() {
//   let arr1 = ["Akshay", "Peter", "Finney", "saket"];
//   let arr2 = ["naik", "khalko", "devdan", "sharma"];
//   let arr3 = ["100", "200", "300", "400"];
//   console.log(`${arr1[Math.floor(Math.random() * arr1.length)]}
//   ${arr2[Math.floor(Math.random() * arr2.length)]}
//   ${arr3[Math.floor(Math.random() * arr3.length)]}`);
// }
// random();

// function printAndGetHighestScore(args) {
//   let temp = args;
//   for (let i = 0; i < args.length; i++) {
//     //solution pace and no place
//     console.log(`solution ${i} Score ${args[i]}`);
//   }
//   //total no of element

//   let sortArr = args.sort();
//   let highestScr = args[args.length - 1];
//   console.log(highestScr);
//   let position = args.length - 1;
//   console.log(position);
// }
// const scores = [
//   60, 50, 60, 58, 75, 80, 54, 54, 80, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52,
//   44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51,
//   44, 70,
// ];
// console.log(`Total No Of Element ${scores.length + 1}`);

// printAndGetHighestScore(scores);
// //4. find out indices where we have highest score
// //5. find out cost effective solution
// console.log("Normal aRRAY", scores);
// console.log("Sprad Array", ...scores);
// let highestscore = Math.max(...scores);

// console.log(highestscore);
// let mulArr = [];
// let counter = 0;
// let index = [];
// scores.forEach((x) => {
//   if (highestscore === x) {
//     index.push(counter);
//     console.log(`Highest Score At the position ${counter} and its ${x}.`);
//   }
//   counter++;
// });
// console.log(index);

// let costs = [
//   0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22, 0.31,
//   0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.2, 0.25,
//   0.3, 0.25, 0.24, 0.25, 0.25, 0.25, 0.27, 0.25, 0.26, 0.29,
// ];
// index.forEach((element) => {
//   mulArr.push(scores[element] * costs[element]);
// });
// console.log(mulArr);
// if (mulArr[0] < mulArr[1]) {
//   console.log(`cost effective solution is ${mulArr[0]}`);
// } else {
//   console.log(`cost effective solution is ${mulArr[1]}`);
// }
// let smallestVar = 0;
// mulArr.forEach((oneElement) => {
//   mulArr.forEach((allElement) => {
//     if (oneElement < allElement) {
//       smallestVar = oneElement;
//     }
//   });
// });
// console.log(smallestVar);
