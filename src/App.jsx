import { useContext, useState } from 'react'
import Todo from './components/Todo';
import './App.css'
import {UserContext} from './utils/contexProvider';
import DashBoard from './components/DashBoard';
import UseRef from './Hooks/UseRef';
import UseReducer from './Hooks/UseReducer';

function App() {
  
  // const [count, setCount] = useState(0);
  // const [todoes, setTodoes] = useState([{"id": 1, "name":"Drinking Water"}, {"id": 2,"name":"Eat Good food"}])
  // const [user, setuser] = useState("Danish Belal")
  
  
  
  // function increment(){
  //   let c = count+1;
  //   setCount(c)
  // }

  return (
    <div>
      {/* <Todo todoes={todoes} />
      <div>{count}</div>
      <button onClick={increment}> Click me</button> */}
      {/* <div>{user}</div>
      <UserContext.Provider value={user}>
        <DashBoard />
      </UserContext.Provider> */}

      {/* <UseRef /> */}
      <UseReducer />
    </div>
  )
}

export default App
