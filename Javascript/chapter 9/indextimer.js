maketimer = (donemessage, n) => {
  setTimeout(function () {
    console.log(donemessage);
  }, 2000);
  donemessage = "TOUCH";
};
maketimer("my name is akshay..!", 10000);
window.onload = () => {
  const button = document.getElementById("btn");
  let count = 0;
  let message = "you clicked me";
  button.onclick = () => {
    count = count + 1;
    const para = document.getElementById("para");
    para.innerHTML = message + count + " times";
  };
};
upp = (name) => name.toUpperCase();
console.log(upp("My Name is Akshay"));
// let ip = upp("My Name is Akshay");
// console.log(ip);

const location = (name, city) => {
  `hello ${name} ${city}`;
  let op = location("akshay", "dadar");
  console.log(op);
};
