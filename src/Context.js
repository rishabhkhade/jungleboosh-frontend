import { createContext, useState } from "react";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  let localuserData = null;
  if (localStorage.getItem("seller_Data") !== null) {
    localuserData = JSON.parse(localStorage.getItem("seller_Data"));
  }

  const [user, setUser] = useState(localuserData);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
