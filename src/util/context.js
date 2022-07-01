import React, { useContext, createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalContexts = (props) => {
  const [user, setUser] = useState({});

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export const AuthContext = () => useContext(GlobalContext);

export default GlobalContexts;
