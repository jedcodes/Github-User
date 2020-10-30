import React, { createContext, useReducer } from "react";
import { appReducer } from "./appReducer";

export const AppContext = createContext();

const initialState = {
  user: null,
  githubUser: null,
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
