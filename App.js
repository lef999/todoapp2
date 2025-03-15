import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add or update a task
  const handleSaveTask = (task) => {
    if (taskToEdit) {
      setTasks(tasks.map((t) => (t.id === taskToEdit.id ? { ...task, id: t.id } : t)));
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    }
  };

  // Delete a task
  const handleDeleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== taskId));
    }
  };

  // Mark task as completed
  const handleToggleTask = (taskId) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  // Edit task
  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  // Clear editing state
  const clearEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm onSave={handleSaveTask} taskToEdit={taskToEdit} clearEdit={clearEdit} />
      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onEdit={handleEditTask} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
        ))}
      </div>
    </div>
  );
};

export default App;
