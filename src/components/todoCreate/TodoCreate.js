import React, { useState } from "react";

import "./TodoCreate.scss";

const TodoCreate = (props) => {
  const [getInputTodo, setInputTodo] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getInputTodo,
    };
    props.onCreateTodo(newTodo)
    console.log(newTodo);
  };
  const handleInputTodo=(event)=>{
    setInputTodo(event.target.value)
    console.log(getInputTodo)
  }
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputTodo} />
      <button type="submit">Simpan & Keluar</button>
    </form>
  );
};
export default TodoCreate;
