import React, { useContext } from "react";
import { Avatar } from "@material-ui/core";
import Buttons from "../Comps/Buttons";
import { userContext } from "../../Context/userContext";
import { auth } from "../../firebase/firebase";

const DashboardNav = () => {
  const {
    state: { currentUser },
  } = useContext(userContext);
  return (
    <nav className="dashboard-nav">
      <Avatar src={currentUser.photoURL} />
      <h1 className="dashboard-nav__title">
        <span className="dashboard-nav__title--intro">Welcome, </span>
        {currentUser.displayName}
      </h1>
      <Buttons handleClick={() => auth.signOut()}>Logout</Buttons>
    </nav>
  );
};

export default DashboardNav;
