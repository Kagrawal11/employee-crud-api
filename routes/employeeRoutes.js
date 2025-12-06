const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");

// correct mapping
router.post("/create", employeeController.createEmployee);
router.get("/all", employeeController.getAllEmployees);
router.get("/:id", employeeController.getEmployeeById);
router.put("/update/:id", employeeController.updateEmployee);
router.delete("/delete/:id", employeeController.deleteEmployee);

module.exports = router;
