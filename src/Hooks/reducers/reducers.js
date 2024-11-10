import Todo from "../../components/Todo";

export const INITIAL_STATE = [
     {
          "id":1,
          "name" : "Drinking Water",
          "complete" : true 
     }
]

        
     

export const  Todos = [];
export const todoReducer = (state,action) =>{
     switch(action.type){
          case 'Add':
               return [...state, action.todo]

          case 'remove':
              
               
               return state.filter((todo)=> {
                    // console.log("Action Id", action.id);
                    // console.log("Todo", todo.id);
                    console.log("Action Id",action.todo.id);
                    return todo.id != action.todo.id
               }
               )
          default:
               // window.alert("Kindly Perform an Action")
               return state;
     }
}