const Student = require("../models/studentModel");
const mongoose = require("mongoose");

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// Get student by ID
const getStudentById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid Student ID format" });
  }

  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// Create a new student
const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// Delete a student
const deleteStudent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid Student ID format" });
  }

  try {
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};

// ✅ Ensure all functions are exported
module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  deleteStudent,
};
