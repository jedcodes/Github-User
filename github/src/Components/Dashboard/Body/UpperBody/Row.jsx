import React from "react";
import { BsPeople, BsBraces } from "react-icons/bs";
import { HiOutlineUserAdd } from "react-icons/hi";
import { BiBookAlt } from "react-icons/bi";

const Row = ({ title, userInfo }) => {
  let icon = null;

  switch (title) {
    case "Repos":
      icon = <BiBookAlt className="row__icon row__icon--repos" />;
      break;
    case "Followers":
      icon = <BsPeople className="row__icon row__icon--followers" />;
      break;
    case "Following":
      icon = <HiOutlineUserAdd className="row__icon row__icon--following" />;
      break;
    case "Gists":
      icon = <BsBraces className="row__icon row__icon--gists" />;
      break;
    default:
      return;
  }

  return (
    <div className="row">
      {icon}
      <div className="row__info">
        <h1>{userInfo}</h1>
        <h1 className="row__info-title">{title}</h1>
      </div>
    </div>
  );
};

export default Row;
