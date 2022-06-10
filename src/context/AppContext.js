import { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({ isFirstLoad: true });

  const setIsFirstLoad = (val) => {
    setState((prevState) => ({ ...prevState, isFirstLoad: val }));
  };

  return (
    <AppContext.Provider value={{ ...state, setIsFirstLoad }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
