const { loadTasks, saveTasks } = require("../model/model");

const getTasks = (req, res) => {
  const tasks = loadTasks();
  res.json(tasks);
};

const addTask = (req, res) => {
    const taskName = req.body.text;
    if (!taskName || taskName.trim() === "") {
      return res.status(400).json({ error: "Task name is required." });
    }
  
    const tasks = loadTasks();
    const newTask = { id: Date.now(), text: taskName.trim(), completed: false };
    tasks.push(newTask);
    saveTasks(tasks);
  
    res.status(201).json(newTask);
  };


const updateTask = (req, res) => {
    const { id } = req.params; 
  
  
    if (!id) {
      return res.status(400).json({ error: "Task ID is required." });
    }
  
    const tasks = loadTasks();
    const task = tasks.find((task) => task.id === parseInt(id));
  
    if (task) {
      task.completed = !task.completed; 
      saveTasks(tasks); 
  
      res.status(200).json({
        message: "Task updated successfully.",
        task: task 
      });
    } else {
      res.status(404).json({ error: "Task not found." });
    }
  };
  
  const deleteTask = (req, res) => {
    const { id } = req.params; 
  
    /
    if (!id) {
      return res.status(400).json({ error: "Task ID is required." });
    }
  
    let tasks = loadTasks();
    const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  
    if (taskIndex !== -1) {
      tasks.splice(taskIndex, 1); 
      saveTasks(tasks); 
  
      res.status(200).json({
        message: "Task deleted successfully."
      });
    } else {
      res.status(404).json({ error: "Task not found." });
    }
  };
  

module.exports = { getTasks, addTask, updateTask, deleteTask };
