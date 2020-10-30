import React, { useState, useEffect, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

import Buttons from "../../Comps/Buttons";
import { AppContext } from "../../../Context/AppContext";
import { ACTIONS } from "../../../Context/appReducer";

const Header = () => {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(
        "https://api.github.com/users/ZhangMYihua"
      );

      try {
        dispatch({
          type: ACTIONS.GET_GITHUB_USER,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [dispatch]);

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
