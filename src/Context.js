import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const getLocalUserData = () => {
    const data = localStorage.getItem("seller_Data");
    return data ? JSON.parse(data) : null;
  };

  const [user, setUser] = useState(getLocalUserData());
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedUser = getLocalUserData();
      setUser(updatedUser);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, sidebar, setSidebar }}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
