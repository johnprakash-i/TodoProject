const express = require("express");
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} = require("../controller/controller");

const router = express.Router();

// Routes
router.get("/get_task", getTasks);
router.post("/add_task", addTask);
router.patch("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
