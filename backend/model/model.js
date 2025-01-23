const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../memory/memory.json");


const loadTasks = () => {
  if (fs.existsSync(DATA_FILE)) {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  }
  return [];
};


const saveTasks = (tasks) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2), "utf-8");
};

module.exports = { loadTasks, saveTasks };
