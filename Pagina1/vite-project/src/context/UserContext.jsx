import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [isLogin, setIslogin] = useState(false);

  useEffect(() => {
    localStorage.getItem("login") === "true"
      ? setIslogin(true)
      : setIslogin(false);
  }, []);

  const value = {
    isLogin,
    setIslogin
  }

  return <UserContext.Provider value={value} {...props} />
}