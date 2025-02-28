const express = require("express");
const router = express.Router(); // ✅ Initialize the router
const Student = require("../models/Student");

// ✅ Search Student by Roll No or Student ID
router.get("/students/search", async (req, res) => {
  try {
    const query = req.query.q; // Get query from URL
    if (!query)
      return res.status(400).json({ message: "Search query is required" });

    const students = await Student.find({
      $or: [
        { rollNo: { $regex: query, $options: "i" } },
        { studentId: { $regex: query, $options: "i" } },
      ],
    });

    res.json(students.length ? students : { message: "No students found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Create Student
router.post("/students", async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ✅ Get All Students
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Update Student by ID
router.put("/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ✅ Delete Student by ID
router.delete("/students/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; // ✅ Ensure router is exported
