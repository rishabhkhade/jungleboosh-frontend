import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { adminApi } from "./utils/Api";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const getLocalUserData = () => {
    const data = localStorage.getItem("seller_Data");
    return data ? JSON.parse(data) : null;
  };

  const [user, setUser] = useState(getLocalUserData());
  const [sidebar, setSidebar] = useState(false);
  // country fetching

  const [countries, setCountries] = useState([]);
  const [state,setStates] = useState([]);


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

  // country fetching

  const countryFetch = async () => {
    try {
      const response = await adminApi.get("/api/countryList");
     
      setCountries(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };




  useEffect(() => {
    countryFetch();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, sidebar, setSidebar,countries,setCountries}}>
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
