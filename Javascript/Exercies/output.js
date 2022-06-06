recursion = (num) => {
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
    console.log("Difference " + difference);
    num = difference;
    return recursion(num);
  }
};
recursion(1235);
