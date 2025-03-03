import { createContext, useState } from "react";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  let localuserData = null;
  if (localStorage.getItem("seller_Data") !== null) {
    localuserData = JSON.parse(localStorage.getItem("seller_Data"));
  }

  const [sidebar,setSidebar] = useState(false)
  const [user, setUser] = useState(localuserData);
  return (
    <UserContext.Provider value={{ user, setUser,sidebar,setSidebar }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
