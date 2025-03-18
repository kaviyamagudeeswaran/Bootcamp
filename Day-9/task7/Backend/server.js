const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const MONGO_URI = "mongodb+srv://balasivam05:bala12345@bala.cr6gc.mongodb.net/?retryWrites=true&w=majority&appName=bala"
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Connection Error:", err));

// Define Student Schema
const studentSchema = new mongoose.Schema({
    name: String,
    studentId: String,
    image: String  // Optional field for profile picture
});

const Student = mongoose.model('Student', studentSchema);

// API to get all students or filter by name/ID
app.get('/students', async (req, res) => {
    try {
        const { query } = req.query;
        let students;
        if (query) {
            students = await Student.find({
                $or: [
                    { name: { $regex: query, $options: 'i' } },  // Case-insensitive name search
                    { studentId: { $regex: query, $options: 'i' } } // Case-insensitive ID search
                ]
            });
        } else {
            students = await Student.find();
        }
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
