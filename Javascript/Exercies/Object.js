// //Exercies 1_5
// var dog = {
//   name: "Fido",
//   weight: 20.2,
//   age: 4,
//   breed: "mixed",
//   activity: "fetch balls",
// };
// var bark;
// if (dog.weight > 20) {
//   bark = "WOOF WOOF";
// } else {
//   bark = "woof woof";
// }
// var speak = bark + " says " + bark + " when he want to Bread " + dog.breed;
// console.log(speak);

//Exercies 2.5

// var superSecretFile = {
//   level: "classified",
//   opened: 0,
//   password: 2,
//   contents: "Dr. Evel's Next Metting is in Detroit.",
// };
// function setSecret(file, secretPassword, secret) {
//   if (secretPassword == superSecretFile.password) {
//     superSecretFile.opened = 0;
//     superSecretFile.contents = secret;
//   }
// }
// function getSecret(file, secretPassword) {
//   superSecretFile.opened = superSecretFile.opened + 1;
//   if (secretPassword == superSecretFile.password) {
//     return superSecretFile.contents;
//   } else {
//     return "Invalid Password ! No Secret for you.";
//   }
// }
// var secret = getSecret(superSecretFile, superSecretFile.password);
// console.log(secret);

// setSecret(
//   superSecretFile,
//   superSecretFile.password,
//   "Dr. Evel's next meeting is in Philadelphis."
// );
// secret = getSecret(superSecretFile, superSecretFile.password);
// console.log(secret);

//Exercies 3.5

// function makeCar() {
//   var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
//   var models = ["cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
//   var years = [1955, 1957, 1948, 1954, 1961];
//   var colours = ["red", "blue", "tan", "yellow", "white"];
//   var convertible = [true, false];

//   var rand1 = Math.floor(Math.random() * makes.length);
//   var rand2 = Math.floor(Math.random() * models.length);
//   var rand3 = Math.floor(Math.random() * years.length);
//   var rand4 = Math.floor(Math.random() * colours.length);
//   var rand5 = Math.floor(Math.random() * 5) + 1;
//   var rand6 = Math.floor(Math.random() * 2);

//   var car = {
//     make: makes[rand1],
//     model: models[rand2],
//     year: years[rand3],
//     colour: colours[rand4],
//     passanger: rand5,
//     convertible: convertible[rand6],
//     mileage: 0,
//   };
//   return car;
// }
// function displayCar(car) {
//   console.log(
//     "Your new car is a " + car.year + " " + car.make + " " + car.model
//   );
// }
// var carToSell = makeCar();
// displayCar(carToSell);

//Exercies 4.5
// var song = {
//   name: "Walk this way",
//   artist: "Rum-D.M.C.",
//   minutes: 4,
//   seconds: 3,
//   genre: "80s",
//   playing: false,
//   Play: function () {
//     if (!this.playing) {
//       this.true;
//       console.log("playing " + this.name + " by " + this.artist);
//     }
//   },
//   Pause: function () {
//     if (this.playing) {
//       this.playing = false;
//       console.log("Please Stop the song");
//     }
//   },
// };
// song.Pause();
// song.Play();
// song.Pause();
//Reverse Number

// function ReverseNum(Number) {
//   let Remainder,
//     ReverseNo = 0;
//   Number = parseInt(Number);
//   while (Number != 0) {
//     Remainder = parseInt(Number % 10);
//     ReverseNo = parseInt(ReverseNo * 10 + Remainder);
//     Number = parseInt(Number / 10);
//   }
//   console.log(ReverseNo);
//   return ReverseNo;
// }

// let Num = 1234;
// let reverseVal = ReverseNum(Num);
function recursion(num) {
  do {
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
    console.log("difference " + difference);
    num = difference;
  } while (num != 6174);
}
recursion(5656);
