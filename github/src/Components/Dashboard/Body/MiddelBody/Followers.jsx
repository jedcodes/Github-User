import React from "react";
import { Avatar } from "@material-ui/core";

const Followers = () => {
  return (
    <div className="followers">
      <Avatar>JD</Avatar>
      <div className="followers__info">
        <h2>jedcodes</h2>
        <h2 className="followers__span">jedcodes.com</h2>
      </div>
    </div>
  );
};

export default Followers;
