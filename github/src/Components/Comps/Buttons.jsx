import React from "react";

const Buttons = ({ children, fill }) => {
  return (
    <button className={`buttons ${fill && "buttons--fill"}`}>{children}</button>
  );
};

export default Buttons;
