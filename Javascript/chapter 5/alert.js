function init() {
  let ReadAttVal = document.getElementById("redplanet").getAttribute("id");
  document.getElementById("redpl").innerHTML = ReadAttVal;

  console.log(ReadAttVal);

  function myFun() {
    document.getElementById("chg").setAttribute("class", "demo");
  }
  function myFunRemoveAttr() {
    document.getElementById("chg").removeAttribute("class");
  }

  function handleClick() {
    alert("clicked");
  }
  const button = document.getElementById("btn1");
  button.onclick = handleClick;
}
window.onload = init;
// function myFun() {
//   document.getElementById("chg").setAttribute("class", "demo");
// }
// function myFunRemoveAttr() {
//   document.getElementById("chg").removeAttribute("class", "demo");
// }
