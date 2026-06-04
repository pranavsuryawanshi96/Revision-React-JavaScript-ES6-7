import React, { useState } from "react";

const MyStateComponent = () => {
  const [name, setName] = useState("pranav");
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [names, setNames] = useState([]);
  let a = "pranav";
  function changeName() {
    console.log("clicked");
    // return setName("pranav patil");
    return setFlag(!flag);
  }
  function addNames(e) {
    e.preventDefault();
    // setNames(name.push({ id: name.length, name }));
    setNames([...names, { id: name.length, name }]);
    setName("");
  }

  return (
    <div>
      <h1>Hello, {flag ? name : ""}</h1>
      <button onClick={changeName}>Click me</button>
      <hr />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>
        <h2>{count}</h2>
      </div>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <hr />
      <form onSubmit={addNames}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Submit</button>
        <hr />
        <ul>
          {names.map((name) => (
            <li key={name.id}>{name.name}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default MyStateComponent;
