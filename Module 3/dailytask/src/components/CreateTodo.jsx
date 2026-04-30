import React, { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("patil");
  const task = ["taks1", "task2", "task3", "task4"];
  
  const handleClick = (e) => {
    setCount(count + 1);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h1 style={{ color: "red", fontSize: "45" }} className="btn">
        {count}
      </h1>
      <input type="text" onChange={handleChange} />
      <button value="Add Task button" onClick={handleClick}>
        Add Task
      </button>
      <h2>{input}</h2>
      <ul>
        {task.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default CreateTodo;
