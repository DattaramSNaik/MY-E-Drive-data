const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const morgan = require("morgan");
const employeeroute = require("./public/routes/employee");
const port = process.env.PORT || 3000;
const config = require("config");
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
}
//console.log(config.get("password"));
app.use(express.json());
app.use("/api/employee", employeeroute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
