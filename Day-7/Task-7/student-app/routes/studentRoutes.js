// routes/studentRoutes.js
const express = require("express");
const Student = require("../models/Student");

const router = express.Router();

// GET: Retrieve students with pagination
router.get("/", async (req, res) => {
  try {
    // Extract the page and limit query parameters from the request
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit) || 10; // Default to 10 students per page

    // Calculate the skip value based on the page number
    const skip = (page - 1) * limit;

    // Get the total number of students (for pagination metadata)
    const totalStudents = await Student.countDocuments();

    // Query the students with skip and limit to implement pagination
    const students = await Student.find().skip(skip).limit(limit);

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalStudents / limit);

    // Send the paginated response
    return res.status(200).json({
      students,
      currentPage: page,
      totalPages,
      totalStudents,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
