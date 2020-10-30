import React, { useState } from "react";
import Forms from "../Comps/Forms";
import SignButton from "../Comps/SignButton";
import { signInWithGoogle } from "../../firebase/firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="sign-in">
      <button onClick={signInWithGoogle} className="sign-in__button">
        Sign In With Google
      </button>
      <span className="sign-in__span">or</span>

      <form action="" className="sign-in__form">
        <Forms
          type="text"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <Forms
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <SignButton />
      </form>
      <p className="sing-in__paragraph"></p>
    </div>
  );
};

export default SignIn;
