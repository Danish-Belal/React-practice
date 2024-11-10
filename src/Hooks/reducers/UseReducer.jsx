import { useReducer } from "react"
import { todoReducer, INITIAL_STATE } from "./reducers";


function UseReducer() {
     const [todos, dispatch] = useReducer(todoReducer, INITIAL_STATE);

     const handleComplete = (todo) => {
          console.log();
          
       dispatch({ type: 'Add', todo });
     };

     const handleRemove = (todo) =>{
          console.log("TODO TO REMOVE", todo);
          
          dispatch({type: 'remove', todo})
     }

     function handleClick(){
          const todo ={
               "id": todos.length+1,
               "name" : "Book reading",
               "complete" : false
          }
          handleComplete(todo);
     }
   
     return (
       <>
         <button onClick={handleClick}> Click Me</button>

         <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name} - {todo.complete ? "Complete" : "Incomplete"}
            <button onClick={() => handleRemove(todo)}>Remove</button>
          </li>
        ))}
      </ul>
       </>
     );
}

export default UseReducer