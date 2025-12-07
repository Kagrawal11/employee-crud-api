require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// register routes
app.use("/employee", require("./routes/employeeRoutes"));

// root test route
app.get("/", (req, res) => {
  res.send("Employee API running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
