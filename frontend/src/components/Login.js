import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { auth } from "../Firebase";
import { useDataLayerValue } from "../datalayer/DataLayer";

const Login = () => {
  const [{ loggedIn }, dispatch] = useDataLayerValue();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const login = () => {
    signInWithRedirect(auth, provider);
  };
  const getResult = async () => {
    try {
      const result = await getRedirectResult(auth);
      if (result) {
        localStorage.setItem("user", JSON.stringify(result.user));
        dispatch({
          type: "LOGIN",
          loggedIn: true,
        });

        navigate("/intro");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getResult();
  }, []);
  return (
    <div className="login">
      <button className="lgn-btn" onTouchEnd={login} onClick={login}>
        Sign in With Google
      </button>
    </div>
  );
};

export default Login;
