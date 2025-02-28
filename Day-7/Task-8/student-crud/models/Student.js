const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  studentId: { type: String, required: true, unique: true },
  major: { type: String, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Student", StudentSchema);
