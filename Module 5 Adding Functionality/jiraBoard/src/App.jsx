import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import closedIcon from "./assets/image.png";

const App = () => {
  //  after setting we have update the localStorage after delete
  const existingTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(JSON.parse(existingTasks) || []);
  //  for dragging feature created the state
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
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
          setActiveCard={setActiveCard}
        />
        <TaskColumn
          title="Ready for Test"
          status="Ready for Test"
          tasks={tasks}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
        />
        <TaskColumn
          title="Closed"
          icon={closedIcon}
          tasks={tasks}
          status="Closed"
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
        />
      </main>
      <h2>Active Card{activeCard}</h2>
    </div>
  );
};

export default App;
