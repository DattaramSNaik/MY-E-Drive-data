//recursion by do while
// function recursion(num) {
//   do {
//     let arr = [];
//     let text = num.toString();
//     let numpush = arr.push(text);
//     let splitAss = arr[0].split("");
//     //Assending Order
//     let sortVal = splitAss.sort();
//     let assending = sortVal.join("");
//     //dessending array
//     let splitDes = sortVal.reverse();
//     let desending = splitDes.join("");
//     console.log(assending);
//     console.log(desending);
//     let difference = desending - assending;
//     console.log(difference);
//     num = difference;
//   } while (num != 6174);
// }
// recursion(5471);

//recursion by function
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
