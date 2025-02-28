// models/Student.js
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [100, "Name must be less than 100 characters long"],
  },
  rollNo: {
    type: String,
    required: [true, "Roll Number is required"],
    unique: true,
    minlength: [5, "Roll Number must be at least 5 characters long"],
    maxlength: [15, "Roll Number must be less than 15 characters long"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [1, "Age must be at least 1"],
    max: [100, "Age must be less than or equal to 100"],
  },
});

module.exports = mongoose.model("Student", studentSchema);
