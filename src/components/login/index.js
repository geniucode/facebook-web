import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import err from "./images/error.png";
import ShowPasswordImg from "./images/show-password.png";
import HidePasswordImg from "./images/hide-password.png";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [showHidePasswordBtn, setShowHidePasswordBtn] = useState(false);

  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    const finalEmail = event.target.value;
    setEmail(finalEmail);
    if (finalEmail.length > 0) {
      setError();
      setEmailIsValid(true);
    }
  };

  const onChangePassword = (event) => {
    const finalPassword = event.target.value;
    setPassword(finalPassword);
    if (finalPassword.length > 0) {
      setError();
      setPasswordIsValid(true);
    } else if (finalPassword.length === 0) {
      setShowHidePasswordBtn(false);
    }
  };
  const displayShowPasswordBtn = () => {
    setShowHidePasswordBtn(false);
  };

  const displayHidePasswordBtn = () => {
    setShowHidePasswordBtn(true);
  };

  const checkLogin = async (event) => {
    try {
      if (email.length === 0) {
        setEmailIsValid(false);
        setError("Please enter a valid email address");
        if (password.length === 0) {
          setPasswordIsValid(false);
          setError("Please enter an email and a password");
          return;
        }
        return;
      }
      if (password.length === 0) {
        setPasswordIsValid(false);
        setError("Please enter a password");
        return;
      }

      const response = await axios.post("http://localhost:3001/user/login", {
        email,
        password,
      });
      if (!response.data.sucess) {
        setError("Invalid Credintials");
      } else if (response.data?.sucess && response.data?.jwtToken) {
        const jwtToken = response.data.jwtToken;
        const isValidToken = await axios.post(
          "http://localhost:3001/validate-token",
          { jwtToken }
        );
        if (isValidToken) {
          navigate("/");
        } else {
          navigate("/login");
        }
      }
      else{
        localStorage.setItem('token', response.data.token);
      }
    } catch (error) {
      const response = error.response;
      if (response.data.errors[0].param === "email") {
        setEmailIsValid(false);
        setError("Please enter a valid email ");
      } else if (response.data.errors[0].param === "password") {
        setPasswordIsValid(false);
        setError("Please enter a valid password ");
        return;
      }
    }
  };

  const onClcikGoToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <div className="headers">
        <div className="header-title">
          <h1>facebook</h1>
        </div>
        <div className="header-content">
          <span>
            Connect with friends and the world
            <br />
            around you on Facebook.
          </span>
        </div>
      </div>
      <div className="outer-box">
        <div className="login-box">
          <div className="email-field">
            <input
              onChange={onChangeEmail}
              className={`${!emailIsValid && "input-error"}`}
              type="email"
              placeholder="Email"
            />
            <span className={`not-active ${!emailIsValid && "active"}`}>
              <img src={err} alt="error" />
            </span>
          </div>
          <div className="password-field">
            <input
              onChange={onChangePassword}
              id="password"
              className={`${!passwordIsValid && "input-error"}`}
              type={showHidePasswordBtn ? "text" : "password"}
              placeholder="Password"
            />
            <span className={`not-active ${!passwordIsValid && "active"}`}>
              <img src={err} alt="error" />
            </span>
            <span
              className={`not-active ${
                password.length > 0 && showHidePasswordBtn ? "active" : ""
              }`}
            >
              <img
                className="clickable"
                onClick={displayShowPasswordBtn}
                src={HidePasswordImg}
                alt="hide-password"
              />
            </span>
            <span
              className={`not-active ${
                password.length > 0 && !showHidePasswordBtn ? "active" : ""
              }`}
            >
              <img
                className="clickable"
                onClick={displayHidePasswordBtn}
                src={ShowPasswordImg}
                alt="hide-password"
              />
            </span>
          </div>
          <button onClick={checkLogin} type="submit" className="loginBtn">
            Log In
          </button>
          <hr />
          {error && <div className="error-message">{error}</div>}
          <div className="signUp">
            <div onClick={onClcikGoToSignUp}>Create new account</div>
          </div>
        </div>
        <div className="page-create">
          <a href="/">Create a Page </a>for a celebrity, brand or business.
        </div>
      </div>
    </div>
  );
};

export { Login };
