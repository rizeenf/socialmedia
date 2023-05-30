import { createContext, useEffect, useState } from "react";
import pic1 from "../assets/pic1.jpeg";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCurrUser({
      id: 1001,
      name: "Rize Enf",
      profilePic:
        "https://images.pexels.com/photos/16903397/pexels-photo-16903397/free-photo-of-la-soltera-dominante.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currUser));
    return () => {};
  }, [currUser]);

  return (
    <AuthContext.Provider value={{ currUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
