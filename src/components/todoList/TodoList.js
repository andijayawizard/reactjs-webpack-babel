import React from "react";

const TodoList = (props) => {
  console.log(props.dataTodos)
  return (
    <>
      <ul>
        {
          props.dataTodos.map((todo)=>{
            return <li key={todo.id}>{todo.nama} {todo.alamat}</li>;
          })

        }
        {/* <li>budi</li>
        <li>cepot</li> */}
      </ul>
    </>
  );
};
export default TodoList;
