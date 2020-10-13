import React from "react";
import { db, auth, provider } from "../../firebase";
import "./Login.css";
import { Button } from "@material-ui/core";
import { useStateValue } from "../../ContextApi/StateProvider";
import { actionTypes } from "../../ContextApi/reducer";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt=""
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
          alt=""
        />
      </div>
      <Button onClick={signIn} type="submit">
        Sign In
      </Button>
    </div>
  );
};

export default Login;
