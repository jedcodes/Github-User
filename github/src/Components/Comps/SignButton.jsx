import React from "react";

const SignButton = ({ handleClick }) => {
  return (
    <button className="sign-button" onClick={handleClick}>
      Sign In
    </button>
  );
};

export default SignButton;
