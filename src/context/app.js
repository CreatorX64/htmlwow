import { useContext, createContext, useState } from "react";

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

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext() must be called inside AppContextProvider");
  }

  return context;
};
