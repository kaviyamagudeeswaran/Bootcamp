const express = require("express");

const app = express();
app.use(express.json());

/** 📌 Route to Simulate a 500 Internal Server Error */
app.get("/error", (req, res, next) => {
  next(new Error("This is a forced internal server error!")); // Force an error
});

/** 📌 Global Error Handling Middleware */
app.use((err, req, res, next) => {
  console.error("🚨 Error:", err.stack); // Log error for debugging

  res.status(500).json({
    error: "Internal Server Error",
    message: "Something went wrong. Please try again later.",
  });
});

/** 📌 Start the Server */
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
