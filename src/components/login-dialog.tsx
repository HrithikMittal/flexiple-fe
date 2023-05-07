import React, { useState } from "react";
import { Button, Modal, OutlinedInput, Alert } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import "./style.css";
import axios from "axios";

const LoginDialog = (props: any) => {
  const { displayLogin, handleDisplayLogin, authCheck } = props;
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleToggle = () => {
    setSignup(!signup);
  };

  const handleLogin = () => {
    setError("");
    let body: {
      email: string;
      password: string;
      name?: string;
    } = {
      email,
      password,
    };
    if (signup) {
      body = {
        ...body,
        name,
      };
    }

    // call api to login or signup
    axios
      .post(
        process.env.REACT_APP_BASE_URL +
          "/user" +
          (signup ? "/signup" : "/login"),
        body
      )
      .then((res) => {
        if (res.data.success) {
          if (signup) {
            handleToggle();
          } else {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            handleDisplayLogin();
            authCheck();
          }
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong");
      });
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
        {error && (
          <div>
            <Alert severity="error">{error}</Alert>
          </div>
        )}
        <div className="input">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#a129fe",
            }}
            onClick={handleLogin}
          >
            {signup ? "Sign Up" : "Login"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginDialog;
