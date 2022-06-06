//const logger = require("../fb/logger");
const emitter = require("../emitter");
// const os = require("os");
// const fs = require("fs");
// const a = os.hostname();
// const b = os.freemem();
// const c = os.tmpdir();
// const d = os.networkInterfaces();
// const e = os.totalmem();
// const usedmem = e - b;
// //before console call
// const files = fs.readdirSync(__dirname);
// //after console call
// fs.readdir(__dirname, (err, files) => {
//   if (err) console.log(err.message);
//   else console.log(files);
// });
// console.log(files);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(usedmem);

// console.log(logger.firstname);
// console.log(logger.lastname);
// console.log(logger.hobbies);
// console.log(logger.color);

// const MyEmitter = new emitter();

// MyEmitter.on("event", () => {
//   console.log("an event occurred!");
// });

// MyEmitter.emit("user is added");
const logger = new emitter();

logger.on("dataArrived", () => {
  console.log("handling message log event");
});
logger.log("user is added");
