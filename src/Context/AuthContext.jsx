import { createContext, useEffect, useState } from "react";
import pic1 from "../assets/pic1.jpeg";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCurrUser({
      id: 1,
      name: "Rize Enf",
      profilePic: { pic1 },
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
