function init() {
  const img1 = document.getElementById("one");
  const img2 = document.getElementById("two");
  const img3 = document.getElementById("three");
  const img4 = document.getElementById("four");
  const img5 = document.getElementById("five");

  img1.onclick = handleclick1;
  img2.onclick = handleclick2;
  img3.onclick = handleclick3;
  img4.onclick = handleclick4;
  img5.onclick = handleclick5;
}

function handleclick1(e) {
  const target = e.target;
  target.setAttribute("src", "img/one.jpg");
}
function handleclick2(e) {
  const target = e.target;
  target.setAttribute("src", "img/two.jpg");
}
function handleclick3(e) {
  const target = e.target;
  target.setAttribute("src", "img/three.jpg");
}
function handleclick4(e) {
  const target = e.target;
  target.setAttribute("src", "img/four.jpg");
}
function handleclick5(e) {
  const target = e.target;
  target.setAttribute("src", "img/five.jpg");
}
window.onload = init;

function timehandler() {
  let op1 = document.getElementById("one");
  op1.setAttribute("src", "img/oneblur.jpg");
  let op2 = document.getElementById("two");
  op2.setAttribute("src", "img/twoblur.jpg");
  let op3 = document.getElementById("three");
  op3.setAttribute("src", "img/threeblur.jpg");
  let op4 = document.getElementById("four");
  op4.setAttribute("src", "img/fourblur.jpg");
  let op5 = document.getElementById("five");
  op5.setAttribute("src", "img/fiveblur.jpg");
}
setTimeout(timehandler, 2000);
