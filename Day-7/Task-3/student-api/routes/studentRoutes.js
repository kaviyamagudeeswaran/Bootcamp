const express = require("express");
const { getStudentById } = require("../controllers/studentController");

const router = express.Router();

// GET Student by ID
router.get("/students/:id", getStudentById);

module.exports = router;
