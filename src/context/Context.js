import React, { useState, useContext } from "react";

const AppContext = React.createContext();


const AppProvider = ({ children }) => {
  const [navIndex, setNavIndex] = useState(0);

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
