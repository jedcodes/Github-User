import React, { useContext, useEffect } from "react";
import Auth from "./Pages/Auth/Auth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { auth } from "./firebase/firebase";
import { AppContext } from "./Context/AppContext";
import { ACTIONS } from "./Context/appReducer";

const App = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL } = user;
        dispatch({
          type: ACTIONS.SET_CURRENT_USER,
          payload: { displayName, photoURL },
        });
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className={state.user ? "app" : "app__auth"}>
      {state.user ? <Dashboard /> : <Auth />}
    </div>
  );
};

export default App;
