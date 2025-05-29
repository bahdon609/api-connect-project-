import React, { createContext, useEffect, useState } from "react";

export const LoginUser = createContext(null);
export const getAllStudentResult = createContext(null);
export const GetAllStudentIdCartPrint = createContext(null);

export default function ContextProvider({ children }) {
  const [User, setUser] = useState();
  const [getAllResult, setGetAllResult] = useState([]);
  const [getAllStudentDataPrint, setgetAllStudentDataPrint] = useState([]);
  const [Refrash, setRefrash] = useState(false);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  console.log(getAllResult);

  // useEffect(() => {
  //   const Authenticate = !!localStorage.getItem("access_token")?.trim();
  //   const user = localStorage.getItem("access_token")?.trim();
  //   setIsAuthenticate(Authenticate)
  //     if(user){
  //       setUser(JSON.parse(user));
  //     }

  // }, [Refrash]);

  return (
    <LoginUser.Provider value={{ User, setRefrash, isAuthenticate }}>
      <getAllStudentResult.Provider value={{ getAllResult, setGetAllResult }}>
        <GetAllStudentIdCartPrint.Provider
          value={{ getAllStudentDataPrint, setgetAllStudentDataPrint }}
        >
          {children}
        </GetAllStudentIdCartPrint.Provider>
      </getAllStudentResult.Provider>
    </LoginUser.Provider>
  );
}
