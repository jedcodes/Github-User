import React from "react";
import { Avatar } from "@material-ui/core";
import { BsBuilding, BsLink45Deg } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import Followers from "./Followers";

const MiddelBody = () => {
  return (
    <div className="middelbody">
      <div className="middelbody__left">
        <h2 className="middelbody__title">User</h2>
        <div className="middelbody__left-header">
          <div className="middelbody__left-user">
            <Avatar>JD</Avatar>
            <div className="middelbody__left-user-title">
              <h2>Jack Delamou</h2>
              <h2 className="middelbody__left-user--name">@jedcodes</h2>
            </div>
          </div>
          <button className="buttons middelbody__button">Follow</button>
        </div>
        <div className="middelbody__left-info">
          <h2 className="middelbody__title">Udemy Coder</h2>
          <ul className="middelbody__left-list">
            <li>
              <BsBuilding className="middelbody__left-icon" /> Coding
            </li>
            <li>
              <GoLocation className="middelbody__left-icon" />
              Oslo
            </li>
            <li>
              <BsLink45Deg className="middelbody__left-icon" />
              <span className="middelbody__left-lastItem">jedcodes.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="middelbody__right">
        <h2 className="middelbody__title">Followers</h2>
        <div className="middelbody__right-content">
          <Followers />
          <Followers />
          <Followers />
          <Followers />
          <Followers />
          <Followers />
        </div>
      </div>
    </div>
  );
};

export default MiddelBody;
