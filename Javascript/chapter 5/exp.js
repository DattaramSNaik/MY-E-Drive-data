let para = document.createElement("p");
para.innerHTML = " this is a new parA WHICH IS GOING TO INSIDE THE DIV";
const div = document.getElementById("div1");
div.appendChild(para);
let level1 = document.createElement("h1");
level1.innerHTML = "this is original text";

div.replaceChild(level1, para);
div.appendChild(para);
div.removeChild(para);
