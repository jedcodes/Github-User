import React, { useContext } from "react";
import { Avatar } from "@material-ui/core";
import Buttons from "../Comps/Buttons";
import { AppContext } from "../../Context/AppContext";
import { auth } from "../../firebase/firebase";

const DashboardNav = () => {
  const {
    state: { user },
  } = useContext(AppContext);
  return (
    <nav className="dashboard-nav">
      <Avatar src={user.photoURL} />
      <h1 className="dashboard-nav__title">
        <span className="dashboard-nav__title--intro">Welcome, </span>
        {user.displayName}
      </h1>
      <Buttons handleClick={() => auth.signOut()}>Logout</Buttons>
    </nav>
  );
};

export default DashboardNav;
