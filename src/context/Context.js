import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const getNavIndex = () => {
  const index = localStorage.getItem("navIndex");
  if (index) {
    return JSON.parse(localStorage.getItem("navIndex"));
  } else {
    return null;
  }
};

const AppProvider = ({ children }) => {
  const [navIndex, setNavIndex] = useState(getNavIndex());

  return (
    <AppContext.Provider
      value={{
        setNavIndex,
        navIndex,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { UseGlobalContext, AppProvider, AppContext };
