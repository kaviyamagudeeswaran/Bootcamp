const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    rollNo: { type: String, required: true, unique: true, uppercase: true },
    studentId: { type: String, required: true, unique: true, uppercase: true },
    major: { type: String, required: true, trim: true },
    year: { type: Number, required: true, min: 2000, max: 2100 },
  },
  { timestamps: true } // ✅ Automatically adds createdAt & updatedAt fields
);

module.exports = mongoose.model("Student", StudentSchema);
