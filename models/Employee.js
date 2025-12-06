const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  empname: { type: String, required: true },
  empSalary: { type: Number, required: true },
  departmentid: { type: Number, required: true }
});

module.exports = mongoose.model("Employee", employeeSchema);
