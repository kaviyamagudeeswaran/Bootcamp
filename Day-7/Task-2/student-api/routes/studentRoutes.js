const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  createStudent,
} = require("../controllers/studentController");

// GET all students
router.get("/students", getAllStudents);

// POST - Create a new student
router.post("/students", createStudent);

module.exports = router;
