handletime = () => {
  console.log("time is over");
};
setTimeout(handletime, 2000);
let migrating = true;

let fly = (num) => {
  for (let i = 0; i < num; i++) {
    console.log("Flying!");
  }
};

quack = (num) => {
  let sound = "quack";
  quaker = () => {
    console.log(sound);
  };
  for (let i = 0; i < num; i++) {
    quaker();
  }
};
if (migrating) {
  quack(4);
  fly(4);
}

mynum = () => {
  console.log("My NAME IS AKSHAY");
};
let justAVar = "oh,dont you worry about it ";
whereAreyou = () => {
  let justAVar = "just an every day";
  inner = () => {
    return justAVar;
  };
  return inner;
};
let pass = whereAreyou();
let result = pass();
console.log(result);

makecounter = () => {
  let count = 0;
  let counter = () => {
    count = count + 1;
    return count;
  };
  return counter;
};
let counterfun = makecounter();
console.log(counterfun());
console.log(counterfun());
console.log(counterfun());
console.log(counterfun());
