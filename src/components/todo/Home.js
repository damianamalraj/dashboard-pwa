import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import style from "./home.module.css";
import NewToDo from "./NewToDo";
import Todos from "./Todos";

function Home() {
  const [todos, setTodos] = useState([]);

  const handleToDo = (todo) => {
    setTodos((prevToDos) => {
      return [...prevToDos, { id: uuidv4(), todo }];
    });
  };
  const handleRemoveToDo = (id) => {
    setTodos((prevToDos) => {
      const filterToDos = prevToDos.filter((todo) => todo.id !== id);
      return filterToDos;
    });
  };
  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>To Do App </h1>
      <NewToDo addTodo={handleToDo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveToDo} />
    </div>
  );
}

export default Home;
