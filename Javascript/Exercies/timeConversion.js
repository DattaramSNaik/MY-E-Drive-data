// let s = "12:05:45AM";

// if (s.charAt(8) == "P") {
//   if (s.charAt(0) == "1" && s.charAt(1) == "2") {
//     let replaceVal = s.slice(0, -2);
//     console.log(replaceVal);
//     return replaceVal;
//   } else {
//     let hour = s.charAt(0) + s.charAt(1);
//     let millitryVal = 12 + parseInt(hour);
//     let changetomilli = s.replace(hour, millitryVal);
//     let replaceVal = changetomilli.slice(0, -2);
//     console.log(replaceVal);
//     return replaceVal;
//   }
// } else {
//   if (s.charAt(0) == "1" && s.charAt(1) == "2") {
//     let beforeVal = s.charAt(0) + s.charAt(1);
//     console.log(beforeVal);
//     let convert = "00";
//     let finalVal = s.replace(beforeVal, convert);
//     let replaceVal = finalVal.slice(0, -2);
//     console.log(replaceVal);
//     return replaceVal;
//   } else {
//     let replaceVal = s.slice(0, -2);
//     console.log(replaceVal);
//     return replaceVal;
//   }
// }

function recursion(num) {
  if (num == 6174) {
    return num;
  } else {
    let arr = [];
    let text = num.toString();
    let numpush = arr.push(text);
    let splitAss = arr[0].split("");
    let sortVal = splitAss.sort();
    let assending = sortVal.join("");
    let splitDes = sortVal.reverse();
    let desending = splitDes.join("");
    console.log("Assending No." + assending);
    console.log("Dessending No." + desending);
    let difference = desending - assending;
    console.log("difference " + difference);
    num = difference;
    return recursion(num);
  }
}
recursion(2435);
