// var today = new Date();
// var date =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
// var time =
//   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date + " " + time;
// console.log(` ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
let interval = setInterval(startTime, 1000);

function startTime() {
  var today = new Date();
  var h = today.getHours();
  h = h > 12 ? h - 12 : h;
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  //   var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
function stopInterval() {
  clearInterval(interval);
}
function startInterval() {
  setInterval(startTime, 1000);
}
