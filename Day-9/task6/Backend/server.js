const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Student Model
const Student = mongoose.model("Student", new mongoose.Schema({ name: String, age: Number, course: String }));

// GET Students API with Error Handling
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ message: "Failed to fetch students. Please try again later." });
  }
});

// POST API with Error Handling
app.post("/api/students", async (req, res) => {
  try {
    const { name, age, course } = req.body;
    if (!name || !age || !course) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newStudent = new Student({ name, age, course });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).json({ message: "Failed to add student. Please try again later." });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
