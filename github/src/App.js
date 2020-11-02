import React, { useContext, useEffect } from "react";
import Auth from "./Pages/Auth/Auth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { auth } from "./firebase/firebase";
import { userContext } from "./Context/userContext";

const App = () => {
  const { state, dispatch } = useContext(userContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL } = user;
        dispatch({
          type: "SET_CURRENT_USER",
          payload: { displayName, photoURL },
        });
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className={state.currentUser ? "app" : "app__auth"}>
      {state.currentUser ? <Dashboard /> : <Auth />}
    </div>
  );
};

export default App;
