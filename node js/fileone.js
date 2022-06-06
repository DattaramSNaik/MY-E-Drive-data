// const EventEmit = require("events");
// class myemit extends EventEmit {
//   log(message) {
//     console.log(message);
//   }
// }
// //module.exports = myemit;
// module.exports.log = myemit;
const say = require("say");
function talkToMe(txt) {
  say.speak(
    `Hi ${txt} how are you. I hope you are doing well. Nice to talk to you!`
  );
}
module.exports.talkToMe = talkToMe;
