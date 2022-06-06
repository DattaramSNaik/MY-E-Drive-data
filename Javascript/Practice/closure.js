// var i = 20;
// function show() {
//   var j = 10;
//   console.log(j);
//   function inner() {
//     var k = 30;
//     console.log(i);
//     console.log(k);
//   }
//   inner();
// }
// show();

function init() {
  let img = document.getElementById("five");
  img.onclick = function () {
    console.dir(this);
    img.setAttribute("src", `${img.id}.jpg`);
  };
}
window.onload = init;
