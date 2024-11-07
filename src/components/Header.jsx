import React, { useContext } from 'react'
import  useFetchUser  from '../utils/contexProvider'

function Header() {
     console.log("Header");
     
     // const user = useContext(UserContext);
     const user = useFetchUser();

     console.log("USER",user);
  return (
     <>
    <div>Header</div>
    <div>{user}</div>
    </>
  )
}

export default Header