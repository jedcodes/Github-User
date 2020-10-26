import React from "react";

const Forms = ({ type, changeHandle, value, placeholder }) => {
  return (
    <div className="forms">
      <input
        type={type}
        onChange={changeHandle}
        value={value}
        placeholder={placeholder}
        className="form__input"
      />
    </div>
  );
};

export default Forms;
