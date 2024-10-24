import React, { useState } from "react";
import Usercontext from "./usercontext";

const UsercontextProvider  = ({children})=>{
    const [user, setuser] = useState(null)
    return (
        <Usercontext.Provider value={{user, setuser}}>
          {children}
        </Usercontext.Provider>
    )
}
export default UsercontextProvider