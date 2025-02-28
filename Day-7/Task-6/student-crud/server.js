const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

require("dotenv").config();

const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Student Routes
const studentRoutes = require("./routes/StudentRoutes"); // Check path
app.use("/api", studentRoutes); // Use "/api" prefix

// ✅ Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
