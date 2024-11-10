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
               console.log(action.todo);
               console.log("STATE",state);
               
               state.push(action.todo)
               
               break;

          case 'remove':
               window.alert("removed")
               break;
          default:
               window.alert("Kindly Perform an Action")
     }
}