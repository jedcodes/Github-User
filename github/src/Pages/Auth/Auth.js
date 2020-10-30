import React, { useState } from "react";
import { SignIn } from "../../Components";

const Auth = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="auth">
      <div className="auth__body">
        <nav className="auth__body-header">
          <li className="auth__body-list">Sign In</li>
          <li className="auth__body-list">Sign Up</li>
        </nav>
        <SignIn />
      </div>
    </div>
  );
};

export default Auth;
