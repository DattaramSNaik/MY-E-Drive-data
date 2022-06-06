function init() {
  const p9 = document.getElementById("code9");
  console.log(p9.getAttribute("id"));

  p9.setAttribute("class", "red");
  setTimeout(() => {
    p9.setAttribute("class", "blue");
  }, 5000);
  setTimeout(() => {
    p9.removeAttribute("class");
  }, 10000);
}
window.onload = init;
// const p9 = document.getElementById("code9");
// console.log(p9.getAttribute("id"));

// p9.setAttribute("class", "red");
// setTimeout(() => {
//   p9.setAttribute("class", "blue");
// }, 5000);
// setTimeout(() => {
//   p9.removeAttribute("class");
// }, 10000);
