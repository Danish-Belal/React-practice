import React, { useEffect, useRef, useState } from 'react'
// red do not re render the value. it do not call rerender
function UseRef() {
     // const [count, setcount] = useState(0)
     // const ref = useRef(0)

     // function increment(){
     //      // setcount(c => c+1);
     //      ref.current = ref.current +1;

     //      // console.log("Count", count);
     //      console.log("Ref", ref);

     // }

     const inputELemet = useRef(null);

     function handleChange(){
          inputELemet.current.focus();
     }

  return (
    <div>
     {/* <div>{ref.current}</div>
     <button onClick={increment}>CLick Me</button> */}
      <div>
       {/* Text input with a ref attached */}
         <input ref={inputELemet} type="text" placeholder="Name" />

          {/* Button to focus the input when clicked */}
          <button onClick={handleChange}>Focus Input</button>
      </div>
      
    </div>
  )
}

export default UseRef
