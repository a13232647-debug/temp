const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // fallback added

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

// Route 3: Test (env ke bina bhi chale)
app.get("/test", (req, res) => {
  const mode = process.env.MODE || "local"; // env ho to use, warna default

  res.json({
    route: "test",
    modeUsed: mode,
    envAvailable: !!process.env.MODE,
    message: "Ye route env ke bina bhi kaam karega",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
