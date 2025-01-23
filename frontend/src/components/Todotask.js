import React from "react";
import { FaTrash } from "react-icons/fa";

function TodoTask({ task, toggleComplete, deleteTask }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default TodoTask;
