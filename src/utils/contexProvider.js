import { createContext, useContext } from "react";

export const UserContext = createContext();

export default function useFetchUser(){
     // const [user, setuser] = useState("Danish Belal");

     //Fetch User.
     const user = useContext(UserContext);
     if(user === undefined){
          window.alert("User Not Fount")
     }
     return user;

}


