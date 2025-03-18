const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Student Schema & Model
const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    course: String,
    avatar: String
});
const Student = mongoose.model("Student", StudentSchema);

// API Routes
app.get("/students", async (req, res) => {
    const { page = 1, limit = 6 } = req.query; // Pagination
    try {
        const students = await Student.find()
            .limit(limit * 1)
            .skip((page - 1) * limit);
        const total = await Student.countDocuments();
        res.json({ students, total, page: Number(page), limit: Number(limit) });
    } catch (error) {
        res.status(500).json({ message: "Error fetching students" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
