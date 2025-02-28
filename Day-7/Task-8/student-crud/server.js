const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Connect to Database first
connectDB();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Import Routes
const studentRoutes = require("./routes/StudentRoutes"); // Ensure correct path
app.use("/api", studentRoutes);

// ✅ Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
