const Student = require("../models/studentModel");

// GET all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// POST - Create a new student
const createStudent = async (req, res) => {
  try {
    const { name, age, major, rollNo } = req.body;
    if (!name || !age || !major || !rollNo) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newStudent = new Student({ name, age, major, rollNo });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getAllStudents, createStudent };
