import React, { useState } from "react";
import TodoList from "../todoList/TodoList";
import TodoCreate from "../todoCreate/TodoCreate";
// export default function Todo() {
//   return <div>test aja dong</div>;
// }
const Todo = () => {
  // const [setTodos, getTodos] = useState([
  //   { id: 1, nama: "anton", alamat: "ciganjur" },
  //   { id: 2, nama: "budi", alamat: "bogor" },
  //   { id: 3, nama: "cepot", alamat: "tangerang" },
  // ]);
  const todos=[
    { id: 1, nama: "anton", alamat: "ciganjur" },
    { id: 2, nama: "budi", alamat: "bogor" },
    { id: 3, nama: "cepot", alamat: "tangerang" },

  ]
  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
    console.log(todos);
  };
  return (
    <>
      <div>Todo</div>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={todos} />
    </>
  );
};
export default Todo;
