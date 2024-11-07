import React, { useContext } from 'react'
import UserContext from '../utils/contexProvider'

const Footer = () => {
     console.log("Footer");
     
     const user = useContext(UserContext);
     console.log("USER",user);
  return (
     <>
     <div>Footer</div>
     <div>{user}</div>
     </>
    

  )
}

export default Footer