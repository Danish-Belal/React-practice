import { useReducer } from "react"
import { todoReducer, INITIAL_STATE } from "./reducers/reducers";


function UseReducer() {
     const [todos, dispatch] = useReducer(todoReducer, INITIAL_STATE);

     const handleComplete = (todo) => {
          console.log();
          
       dispatch({ type: 'Add', todo });
     };

     function handleClick(){
          const todo ={
               "id": 1,
               "name" : "Book reading",
               "complete" : true
          }
          handleComplete(todo);
     }
   
     return (
       <>
         <button onClick={handleClick}> Click Me</button>
       </>
     );
}

export default UseReducer