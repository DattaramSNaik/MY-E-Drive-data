const joi = require("joi");
const userModel = require("../../db/models");
const route = require("express").Router();

route.get("/", async (req, res) => {
  const users = await userModel.find({});
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.get("/:id", async (req, res) => {
  try {
    const users = await userModel.findById(req.params.id);
    console.log(users);
    console.log("searching successfully..!");
    res.json(users);
  } catch (error) {
    res.json({ message: `User not Found ${error}` });
  }
});

route.post("/", async (req, res) => {
  const user = new userModel({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    const saveduser = await user.save();
    console.log("Data Inserted Successfully");
    console.log(saveduser);
    res.send(saveduser);
  } catch (error) {
    res.status(400).send(error);
  }
});

route.put("/:id", async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      age: req.body.age,
    };

    const updatedProduct = await userModel.findByIdAndUpdate(
      { _id: req.params.id },
      user
    );
    res.json(updatedProduct);
    console.log("Data updated successfully");
  } catch (error) {
    res.json({ message: error });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const removeProduct = await userModel.findByIdAndDelete(req.params.id);
    res.json(removeProduct);
    console.log("Data deleted successfully");
  } catch (error) {
    res.json({ message: error });
  }
});

function validateHere(input) {
  let schema = joi.object({
    name: joi.string(5).min().max().required(),
    age: joi.number().required(),
  });
  return schema.validate(input);
}
module.exports = route;
