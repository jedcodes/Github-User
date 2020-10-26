import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import Buttons from "../../Comps/Buttons";

const Header = () => {
  const [input, setInput] = useState("");

  return (
    <div className="header">
      <form action="" className="header__form">
        <BsSearch className="header__form-icon" />
        <input
          type="text"
          className="header__form-input"
          placeholder="Enter Github User"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Buttons type="submit" fill>
          Search
        </Buttons>
      </form>
      <div className="header__info">
        <h1>Requests: 54/60</h1>
      </div>
    </div>
  );
};

export default Header;
