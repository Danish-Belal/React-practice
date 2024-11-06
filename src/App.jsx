import { useState } from 'react'
import Todo from './components/Todo';

import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [todoes, setTodoes] = useState([{"id": 1, "name":"Drinking Water"}, {"id": 2,"name":"Eat Good food"}])

  
  
  function increment(){
    let c = count+1;
    setCount(c)
  }

  return (
    <div>
      <Todo todoes={todoes} />
      <div>{count}</div>
      <button onClick={increment}> Click me</button>
    </div>
  )
}

export default App
