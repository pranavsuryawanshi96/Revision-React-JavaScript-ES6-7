import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import closedIcon from "./assets/image.png";
const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((tasks, taskIndex) => taskIndex !== taskIndex);
    setTasks(newTask);
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px " }}>Jira Board</h1>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          title="Ready For Development"
          status="Ready For Development"
          tasks={tasks}
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="In Progress"
          tasks={tasks}
          status="In Progress"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Ready for Test"
          status="Ready for Test"
          tasks={tasks}
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Closed"
          icon={closedIcon}
          tasks={tasks}
          status="Closed"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
