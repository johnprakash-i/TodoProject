import axios from "axios";

const API_URL = "http://localhost:3001/todo_tasks";

export const fetchTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/get_task`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const addTask = async (taskInput) => {
  try {
    const newTask = { text: taskInput, completed: false };
    const response = await axios.post(`${API_URL}/add_task`, newTask);
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};

export const toggleCompleteTask = async (id, updatedTask) => {
  try {
    await axios.patch(`${API_URL}/update/${id}`, updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
