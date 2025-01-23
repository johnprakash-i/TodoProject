import React, { useState, useEffect } from "react";
import TaskList from "./router/route";
import {
  fetchTasks,
  addTask as addTaskAPI,
  toggleCompleteTask,
  deleteTask as deleteTaskAPI,
} from "./api/apiRequests";
import "./style.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks.");
      }
    };

    getTasks();
  }, []);

  const addTask = async () => {
    if (taskInput.trim() === "") return;

    try {
      const newTask = await addTaskAPI(taskInput);
      setTasks([...tasks, newTask]);
      setTaskInput("");
    } catch (error) {
      console.error("Failed to add task.");
    }
  };

  const toggleComplete = async (id) => {
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (!taskToUpdate) return;

    try {
      const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };
      await toggleCompleteTask(id, updatedTask);
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    } catch (error) {
      console.error("Failed to update task.");
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteTaskAPI(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Failed to delete task.");
    }
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
