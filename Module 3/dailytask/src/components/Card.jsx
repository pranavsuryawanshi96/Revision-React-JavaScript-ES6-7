import React from "react";
import CreateTodo from "./CreateTodo.jsx";
import UserCard from "./UserCard.jsx";
function Card() {
  return (
    <>
      <h1>Hello Card Components</h1>
      <CreateTodo />
      <UserCard name="pranav" profession="swe" />
      <UserCard name="patil" profession="sdet" />
    </>
  );
}

export default Card;
