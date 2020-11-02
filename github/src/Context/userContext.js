import React, { createContext, useReducer } from "react";
import { userReducer } from "./userReducer";

export const userContext = createContext();

const initialState = {
  currentUser: null,
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};
