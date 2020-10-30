import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import { BsBuilding, BsLink45Deg } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import axios from "axios";

import Followers from "./Followers";
import { AppContext } from "../../../../Context/AppContext";

const MiddelBody = () => {
  const [followers, setFollowers] = useState([]);
  const {
    state: { githubUser },
  } = useContext(AppContext);

  const {
    avatar_url,
    bio,
    blog,
    company,
    location,
    name,
    followers_url,
  } = githubUser;

  useEffect(() => {
    const fetchFollowers = async () => {
      const { data } = await axios.get(followers_url);

      try {
        setFollowers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFollowers();
  }, [followers_url]);

  return (
    <div className="middelbody">
      <div className="middelbody__left">
        <h2 className="middelbody__title">User</h2>
        <div className="middelbody__left-header">
          <div className="middelbody__left-user">
            <Avatar src={avatar_url} />
            <div className="middelbody__left-user-title">
              <h2>{name}</h2>
              <h2 className="middelbody__left-user--name">@jedcodes</h2>
            </div>
          </div>
          <button className="buttons middelbody__button">Follow</button>
        </div>
        <div className="middelbody__left-info">
          <h2 className="middelbody__title"> {bio} </h2>
          <ul className="middelbody__left-list">
            <li>
              <BsBuilding className="middelbody__left-icon" />{" "}
              {company ? company : "N/A"}{" "}
            </li>
            <li>
              <GoLocation className="middelbody__left-icon" />
              {location}
            </li>
            <li>
              <BsLink45Deg className="middelbody__left-icon" />
              <span className="middelbody__left-lastItem"> {blog} </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="middelbody__right">
        <h2 className="middelbody__title">Followers</h2>
        <div className="middelbody__right-content">
          {followers.map((follower) => (
            <Followers key={follower.id} follower={follower} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddelBody;
