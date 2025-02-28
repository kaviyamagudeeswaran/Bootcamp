const express = require("express");
const { body, param, query, validationResult } = require("express-validator");
const Student = require("../models/Student");

const router = express.Router();

// ✅ Validation Middleware for Student
const validateStudent = [
  body("name").notEmpty().withMessage("Name is required").trim().isString(),
  body("rollNo")
    .notEmpty()
    .withMessage("Roll Number is required")
    .isString()
    .withMessage("Roll Number must be a string")
    .isLength({ min: 3 })
    .withMessage("Roll Number must be at least 3 characters"),
  body("studentId")
    .notEmpty()
    .withMessage("Student ID is required")
    .isString()
    .withMessage("Student ID must be a string")
    .isLength({ min: 5 })
    .withMessage("Student ID must be at least 5 characters"),
  body("major").notEmpty().withMessage("Major is required").trim().isString(),
  body("year")
    .notEmpty()
    .withMessage("Year is required")
    .isInt({ min: 2000, max: 2100 })
    .withMessage("Year must be between 2000 and 2100"),
];

// ✅ Helper function for handling validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// ✅ POST: Create Student (With Validation)
router.post(
  "/students",
  validateStudent,
  handleValidationErrors,
  async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).json(student);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// ✅ GET: Fetch All Students
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ GET: Search Students (With Validation)
router.get(
  "/students/search",
  query("q").notEmpty().withMessage("Query parameter 'q' is required"),
  handleValidationErrors,
  async (req, res) => {
    try {
      const searchQuery = req.query.q;
      const students = await Student.find({
        rollNo: new RegExp(searchQuery, "i"),
      });
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// ✅ PUT: Update Student (With Validation)
router.put(
  "/students/:id",
  [
    param("id").isMongoId().withMessage("Invalid Student ID"),
    ...validateStudent, // Reusing validation rules
  ],
  handleValidationErrors,
  async (req, res) => {
    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedStudent)
        return res.status(404).json({ message: "Student not found" });
      res.status(200).json(updatedStudent);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// ✅ DELETE: Remove Student (With Validation)
router.delete(
  "/students/:id",
  param("id").isMongoId().withMessage("Invalid Student ID"),
  handleValidationErrors,
  async (req, res) => {
    try {
      const deletedStudent = await Student.findByIdAndDelete(req.params.id);
      if (!deletedStudent)
        return res.status(404).json({ message: "Student not found" });
      res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

module.exports = router;
