import React, { useState, useEffect } from "react";

const TaskForm = ({ onSave, taskToEdit, clearEdit }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
      setTaskDescription(taskToEdit.description);
    } else {
      setTaskName("");
      setTaskDescription("");
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim() || !taskDescription.trim()) {
      alert("Both fields are required!");
      return;
    }
    onSave({ name: taskName, description: taskDescription });
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</button>
      {taskToEdit && <button onClick={clearEdit}>Cancel</button>}
    </form>
  );
};

export default TaskForm;
