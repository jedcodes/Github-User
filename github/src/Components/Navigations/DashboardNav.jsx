import React from "react";
import { Avatar } from "@material-ui/core";
import Buttons from "../Comps/Buttons";

const DashboardNav = () => {
  return (
    <nav className="dashboard-nav">
      <Avatar>JD</Avatar>
      <h1 className="dashboard-nav__title">
        <span className="dashboard-nav__title--intro">Welcome, </span>
        Jack Delamou
      </h1>
      <Buttons>Logout</Buttons>
    </nav>
  );
};

export default DashboardNav;
