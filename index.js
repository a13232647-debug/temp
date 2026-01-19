const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Route 1: Home
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my Node.js backend!",
    status: "Running",
  });
});

// Route 2: Info
app.get("/info", (req, res) => {
  res.json({
    appName: "Simple Backend",
    version: "1.0.0",
    author: "Your Name",
    year: 2026,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
