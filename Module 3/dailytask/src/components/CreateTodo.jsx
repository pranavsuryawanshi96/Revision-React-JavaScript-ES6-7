import React, { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    setCount(count + 1);
  };

  return (
    <>
      <h1 style={{ color: "red", fontSize: "45" }} className="btn">
        {count}
      </h1>
      <button value="Add Task button" onClick={handleClick}>
        Add Task
      </button>
    </>
  );
};

export default CreateTodo;
