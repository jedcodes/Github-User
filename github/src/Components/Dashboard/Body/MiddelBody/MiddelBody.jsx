import React from "react";
import { Avatar } from "@material-ui/core";
import { BsBuilding, BsLink45Deg } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import Buttons from "../../../Comps/Buttons";
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
          <Buttons fill>Follow</Buttons>
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
              jedcodes.com
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
