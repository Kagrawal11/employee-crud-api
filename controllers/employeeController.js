const Employee = require("../models/Employee");
const Counter = require("../models/Counter");

// Create employee
exports.createEmployee = async (req, res) => {
  try {
    let counter = await Counter.findOne({ name: "employee_id" });

    if (!counter) {
      counter = await Counter.create({ name: "employee_id", value: 1 });
    } else {
      counter.value += 1;
      await counter.save();
    }

    // Always override ID -> auto generate
    req.body.id = counter.value;

    const emp = await Employee.create(req.body);
    return res.status(201).json(emp);
  } catch (err) {
    console.log("Error in createEmployee:", err);
    return res.status(500).json({ msg: err.message });
  }
};


// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const emp = await Employee.find();
    return res.json(emp);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// Get employee by id
exports.getEmployeeById = async (req, res) => {
  try {
    const emp = await Employee.findOne({ id: req.params.id });
    if (!emp) return res.status(404).json({ msg: "Employee not found" });
    return res.json(emp);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// Update employee by id
exports.updateEmployee = async (req, res) => {
  try {
    const updated = await Employee.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ msg: "Employee not found" });
    return res.json(updated);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

// Delete employee by id
exports.deleteEmployee = async (req, res) => {
  try {
    const deleted = await Employee.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ msg: "Employee not found" });
    return res.json({ msg: "Employee Deleted Successfully" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
