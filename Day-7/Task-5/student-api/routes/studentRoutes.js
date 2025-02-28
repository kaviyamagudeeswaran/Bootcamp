const express = require("express");
const {
  getAllStudents,
  getStudentById,
  createStudent,
  deleteStudent,
} = require("../controllers/studentController"); // ✅ Ensure this path is correct

const router = express.Router();

router.get("/students", getAllStudents);
router.get("/students/:id", getStudentById);
router.post("/students", createStudent);
router.delete("/students/:id", deleteStudent);

module.exports = router;
