const dotenv = require("dotenv");
const express = require("express");
const errorFunction = require("./errorFunction");
const userValidation = require("./joiValidation");
const securePassword = require("./securedPassword");
const User = require("./db/model");
require("./db/conn");
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
//allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true)
app.use(express.urlencoded({ extended: true }));

app.get("/api/product", (req, res) => {
  try {
    const allUsers = await User.find();
    if (allUsers) {
      res.status(201);
      return res.json(errorFunction(false, "Sending all users", allUsers));
    } else {
      res.status(403);
      return res.json(errorFunction(true, "Error getting Users"));
    }
  } catch (error) {
    res.status(400);
    return res.json(errorFunction(true, "Error getting user"));
  }
});

app.post("/api/product", (req, res) => {
  try {
    const existingUser = await User.findOne({
      email: req.body.email,
    }).lean(true);
    if (existingUser) {
      res.status(403);
      return res.json(errorFunction(true, "User Already Exists"));
    } else {
      const hashedPassword = await securePassword(req.body.password);
      const newUser = await User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword,
        mobileNumber: req.body.mobileNumber,
        birthYear: req.body.birthYear,
        skillSet: req.body.skillSet,
        is_active: req.body.is_active,
      });
      if (newUser) {
        res.status(201);
        return res.json(errorFunction(false, "User Created", newUser));
      } else {
        res.status(403);
        return res.json(errorFunction(true, "Error Creating User"));
      }
    }
  } catch (error) {
    res.status(400);
    console.log(error);
    return res.json(errorFunction(true, "Error Adding user"));
  }
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
