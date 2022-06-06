const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create student schema & model
const StudentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Roll field is required"],
  },
  roll: {
    type: String,
    required: [true, "Roll field is required"],
  },
  present: {
    type: Boolean,
    deafult: true,
  },
});

const Student = mongoose.model("student", StudentSchema);

//mongoose  model is a wrapper on the mongoose schema.
//mongoose schema defines structure of the document.
//default values validator etc whereas mongoose models
//provide an interface to the database used creating ,quering,
//updating, deleting record.

module.exports = Student;
