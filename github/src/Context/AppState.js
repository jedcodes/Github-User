import React from "react";
import { useReducer } from "react";
import { appContext } from "./appContext";
import { appReducer } from "./appReducer";

const AppState = ({ children }) => {
  // Setting App Initial State
  const initialState = {
    isAuth: false,
    userData: [],
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  return <appContext.Provider>{children}</appContext.Provider>;
};

export default AppState;
