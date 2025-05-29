import React, { createContext, useEffect, useState } from "react";

 export const LoginUser = createContext(null);
export default function ContextProvider({ children }) {
  
  const [User, setUser] = useState();
  const [Refrash, setRefrash] = useState(false);
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  console.log(User);
  console.log(isAuthenticate);

  
  // useEffect(() => {
  //   const Authenticate = !!localStorage.getItem("access_token")?.trim();
  //   const user = localStorage.getItem("access_token")?.trim();
  //   setIsAuthenticate(Authenticate)
  //     if(user){
  //       setUser(JSON.parse(user));
  //     }

  // }, [Refrash]);

  return (
    <LoginUser.Provider value={{ User, setRefrash,isAuthenticate }}>
      {children}
    </LoginUser.Provider>
  );
}
