const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

const MONGO_URI = "mongodb+srv://balasivam05:bala12345@bala.cr6gc.mongodb.net/?retryWrites=true&w=majority&appName=bala";

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));




// Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    studentId: String,
    image: String
});

const Student = mongoose.model("Student", studentSchema);

// API to get students with pagination
app.get('/students', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 6;
        const skip = (page - 1) * limit;

        const students = await Student.find().skip(skip).limit(limit);
        const totalStudents = await Student.countDocuments();

        res.json({
            students,
            totalPages: Math.ceil(totalStudents / limit),
            currentPage: page
        });
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
