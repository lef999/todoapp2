// Load tasks from localStorage
const loadTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };
  
  // Save tasks to localStorage
  const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  
  export { loadTasks, saveTasks };
  