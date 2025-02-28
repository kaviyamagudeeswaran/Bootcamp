const Student = require("../models/Student"); // Adjust path if your model file is named differently
const mongoose = require("mongoose");

// GET Student by ID
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Student ID format" });
    }

    const student = await Student.findById(id);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

module.exports = { getStudentById };
