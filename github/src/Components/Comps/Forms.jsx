import React from "react";

const Forms = ({ type, handleChange, value, placeholder }) => {
  return (
    <div className="forms">
      <input
        type={type}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        className="forms__input"
      />
    </div>
  );
};

export default Forms;
