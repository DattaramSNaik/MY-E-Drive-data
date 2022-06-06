const mongoose = require("mongoose");
const config = require("config");
const { Router } = require("express");

mongoose
  .connect(config.get("connection"))
  .then(() => console.log("Connected to test DB."))
  .catch((err) => console.log(err.message));

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 10,
    required: [true, "name is required"],
  },
  author: {
    type: String,
    validate: function (v) {
      return /^A/.test(v);
    },
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  category: {
    type: String,
    enum: {
      values: ["Web", "Mobile"],
      message: "{value} is not supported",
    },
  },
  tags: {
    type: [String],
    required: [true, "tags are required"],
  },
  price: {
    type: Number,
    min: 10,
    max: 500,
    required: {
      validate: function (v) {
        return this.isPublished.test(v);
      },
    },
  },
  isPublished: Boolean,
});
const Course = mongoose.model("courses", courseSchema);
// inside model cources are collection name
//############Save the data###############
//create collection with add data
async function createCollection() {
  try {
    const course = new Course({
      name: "dOCKER",
      author: "pramod",
      tags: ["Vue js", "backend"],
      price: 300,
      category: "Web",
      isPublished: true,
    });
    await course.save();
    console.log(course);
  } catch (err) {
    console.log(err.errors["author"].message);
  }
}

createCollection();
//############get data###############
async function getCourses() {
  const cources = await Course.find({ author: "akshay" });
  console.log("get by author");
  console.log(cources);
}

// async function getProjection() {
//   const cources = await Course.find({ price: { $gte: 150 } });
//   console.log("projection Here");
//   console.log(cources);
// }
// async function getLimit() {
//   const cources = await Course.find({}).limit(2);
//   console.log("limit here");
//   console.log(cources);
// }
// async function getSkip() {
//   const cources = await Course.find({}).skip(1);
//   console.log("skip here");
//   console.log(cources);
// }
// async function getSort() {
//   const cources = await Course.find({}).sort({ price: 1 });
//   console.log("sort here");
//   console.log(cources);
// }

// getCourses();

// getProjection();

// getLimit();

// getSkip();

// getSort();

async function updateCourseonly(id) {
  const result = await Course.updateOne(
    { _id: id },
    { $set: { author: "nick" } }
  );
  console.log(result);
}
// updateCourseonly("62306449c184d7368f03cd69");
//############findByIdAndUpdate###############
async function updateCoursePrint(id) {
  const cources = await Course.findByIdAndUpdate(
    id,
    { $set: { isPublished: true } },
    { new: true }
  );
  console.log(cources);
}
// updateCoursePrint("62306449c184d7368f03cd69");
//############findByIdAndRemove###############
async function removeCoursePrint(id) {
  const cources = await Course.findByIdAndRemove(id);
  console.log(cources);
}
//removeCoursePrint("62306449c184d7368f03cd69");
