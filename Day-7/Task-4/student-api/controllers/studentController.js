const Student = require("../models/student");
const mongoose = require("mongoose");

// GET Student by ID
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

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

// UPDATE Student by ID
const updateStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, department, rollNo } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Student ID format" });
    }

    const existingStudent = await Student.findById(id);
    if (!existingStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    if (rollNo && rollNo !== existingStudent.rollNo) {
      const rollNoExists = await Student.findOne({ rollNo });
      if (rollNoExists) {
        return res.status(400).json({ error: "Roll number already exists" });
      }
    }

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { $set: { name, age, department, rollNo } },
      { new: true, runValidators: true }
    );

    res
      .status(200)
      .json({
        message: "Student updated successfully",
        student: updatedStudent,
      });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

module.exports = { getStudentById, updateStudentById };
