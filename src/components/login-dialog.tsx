import React, { useState } from "react";
import { Button, Modal, OutlinedInput } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import "./style.css";

const LoginDialog = (props: any) => {
  const { displayLogin, handleDisplayLogin } = props;
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleToggle = () => {
    setSignup(!signup);
  };

  return (
    <Modal
      open={displayLogin}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="lgModal">
        <div className="title-wrapper">
          <h2>{signup ? "Sign Up" : "Login"}</h2>
          <CancelOutlinedIcon onClick={handleDisplayLogin} />
        </div>
        {signup && (
          <div className="input">
            <label>Name</label>
            <OutlinedInput
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="input">
          <label>Email</label>
          <OutlinedInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <label>Password</label>
          <OutlinedInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="option-password" onClick={handleToggle}>
            {signup
              ? `Already have account? please login`
              : `Don't have account want to Sign up?`}
          </span>
        </div>
        <div className="input">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#a129fe",
            }}
          >
            {signup ? "Sign Up" : "Login"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginDialog;
