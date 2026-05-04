import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import closedIcon from "./assets/image.png";
const App = () => {
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px " }}>Jira Board</h1>
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="Ready For Development" />
        <TaskColumn title="In Progress" />
        <TaskColumn title="Ready for Test" />
        <TaskColumn title="Closed" icon={closedIcon} />
      </main>
    </div>
  );
};

export default App;
