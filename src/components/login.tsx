import React, { useState } from "react";
import "./style.css";

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div
      className={`login-container ${showLogin ? "sidenav" : "sidenavClosed"}`}
    >
      {showLogin ? (
        <div className="login-wrapper">
          <div>
            <h1>Login</h1>
            <button onClick={toggleLogin}>Close</button>
          </div>

          <div className="input">
            <label>Email</label>
            <input className="input-field" type="email" />
          </div>
          <div className="input">
            <label>Password</label>
            <input className="input-field" type="email" />
          </div>
          <div className="input bottom">
            <button className="button">Login</button>
          </div>
        </div>
      ) : (
        <button onClick={toggleLogin}>Click Me</button>
      )}
    </div>
  );
};
export default Login;
