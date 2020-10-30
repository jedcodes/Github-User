import React from "react";

const Buttons = ({ children, fill, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`buttons ${fill && "buttons--fill"}`}
    >
      {children}
    </button>
  );
};

export default Buttons;
