import React from "react";
import { deleteTask, updateTask } from "../services/taskService";

const TaskItem = ({ task, refreshTasks }) => {
  const handleComplete = async () => {
    await updateTask(task._id, { status: "Completed" });
    refreshTasks();
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>Status: {task.status}</p>
      <button onClick={handleComplete}>Complete</button>
      <button onClick={() => deleteTask(task._id).then(refreshTasks)}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
