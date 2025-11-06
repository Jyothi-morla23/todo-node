require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000; // Use port from .env or default to 3000

app.use(cors());
app.use(express.json());

const todoRoutes = require("./routes/todos");

app.use("/api/todos", todoRoutes); // Changed route prefix to /api/todos for better API structure

const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CONNECTION_STRING) // Use DB_CONNECTION_STRING from .env
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
