// const EventEmitter = require("events");

// // class MyEmitter extends EventEmitter { }

// // const myEmitter = new EventEmitter();
// // myEmitter.on("event", () => {
// //   console.log("an event occurred!");
// // });
// // myEmitter.emit("event");

// class MyEmitter extends EventEmitter {
//   log(message) {
//     console.log(message);
//     this.emit("message lagging");
//   }
// }
// module.exports = MyEmitter;

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("messageLogged");
  }
}
module.exports = Logger;
