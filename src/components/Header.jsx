import React, { useContext } from 'react'
import UserContext from '../utils/contexProvider'

function Header() {
     console.log("Header");
     
     const user = useContext(UserContext);
     
     console.log("USER",user);
  return (
     <>
    <div>Header</div>
    <div>{user}</div>
    </>
  )
}

export default Header