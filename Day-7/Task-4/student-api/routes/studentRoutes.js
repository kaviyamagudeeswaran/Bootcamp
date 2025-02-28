const express = require("express");
const {
  getStudentById,
  updateStudentById,
} = require("../controllers/studentController");

const router = express.Router();

router.get("/students/:id", getStudentById);
router.put("/students/:id", updateStudentById);

module.exports = router;
