import React, { useContext, createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalContexts = (props) => {
  const [user, setUser] = useState({
    user_firstname: null,
    user_lastname: null,
    user_email: null,
    user_urole: null,
  });

  const [apiUrl, setApiUrl] = useState("http://localhost/tamraidee-api");

  return (
    <GlobalContext.Provider value={{ user, setUser, apiUrl, setApiUrl }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const AuthContext = () => useContext(GlobalContext);

export default GlobalContexts;
