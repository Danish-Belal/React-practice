import React, { useCallback, useState, memo } from 'react'

const UseCallback = () => {
     const[count, setCount] = useState(0);
     const[todos, setTodoes] = useState(["FIRST STARTE"]);

     const increment = ()=>{
          console.log("INcrement Function");
          setCount((c)=> c+1)
     }

     const addTodo = useCallback(() =>{             // See here evey time increment is running also Todo COmpoenent is rerending
          console.log("Add Todod Function");
          setTodoes((t) => [...t, 'New Todod'])
     }, [todos]);


  return (
    <div>
     {/* <Todo  todos={todos} addTodo={addTodo}/> */}
     <MemoizedTodo todos={todos} addTodo={addTodo} />
     <div>{count}</div>
     <button onClick={increment}>Incremet</button>
    </div>
  )
}

function Todo({todos, addTodo}){
     console.log("TODOES", todos);
     console.log("Rendring Todo Component");
     
     
     return (
          <>
          {todos.map((todo,index)=>{
               return <div key={index}>{todo}</div>
          })}
          </>
     )
     
}

const MemoizedTodo = memo(Todo);

export default UseCallback