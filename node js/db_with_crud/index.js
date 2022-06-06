const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/student");
// set up our express app
const app = express();
const port = 3000;
// connect to mongodb
mongoose.connect("mongodb://localhost/ourdata");
//If we want to use mongoose in different position inside the codes it must be seen as global mode, that's why we need to set mongoose as :
mongoose.Promise = global.Promise;
//gives a static path
app.use(express.static("public"));
app.use(express.json());

// initialize routes
app.use("/api", require("./public/routes/api"));

// error handling middleware
app.use(function (err, req, res, next) {
  //console.log(err);
  res.status(422).send({ error: err.message });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
