const express = require("express");
const router = express.Router();
const Student = require("../../models/student");

// get a list of students from the database
router.get("/students", function (req, res, next) {
  Student.find({})
    .then(function (students) {
      res.send(students);
    })
    .catch(next);
});

// add a new student to database
router.post("/students", function (req, res, next) {
  Student.create(req.body)
    .then(function (student) {
      res.send(student);
    })
    .catch(next);
});

// update a student in the database
router.put("/students/:id", function (req, res, next) {
  Student.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (
    student
  ) {
    Student.findOne({ _id: req.params.id }).then(function (student) {
      res.send(student);
    });
  });
});

// delete a student in the database
router.delete("/students/:id", function (req, res, next) {
  Student.findOneAndDelete({ _id: req.params.id }).then(function (student) {
    res.send(student);
  });
});
//search api
router.get("/students/:name", function (req, res, next) {
  let regEx = new RegExp(req.params.name, "i");
  Student.find({ name: regEx }).then((result) => {
    res.status(200).json(result);
  });
});
//search by roll no
router.get("/students/data/:roll", function (req, res, next) {
  let regEx = new RegExp(req.params.roll);
  Student.find({ roll: regEx }).then((result) => {
    res.status(200).json(result);
  });
});

module.exports = router;
//PUT is a method of modifying resource where the client sends data that updates the entire resource .
//PATCH is a method of modifying resources where the client sends partial data that is to be updated without modifying the entire data.
