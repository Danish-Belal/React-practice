import React, { useContext } from 'react'
import useFetchUser  from '../utils/contexProvider'

const Footer = () => {
     console.log("Footer");
     
     // const user = useContext(UserContext);
     const user = useFetchUser();
     // console.log("USER",user);
  return (
     <>
     <div>Footer</div>
     <div>{user}</div>
     </>
    

  )
}

export default Footer