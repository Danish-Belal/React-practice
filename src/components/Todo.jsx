import { memo } from "react";

function Todo({ todoes }) {
  console.log("Todos in TODO", todoes);

  return (
    <>
      {todoes.map((todo) => (
        <div key={todo.id}>{todo.name}</div>
      ))}
    </>
  );
}

export default memo(Todo);    // Memo to recover a component from reloading. 
