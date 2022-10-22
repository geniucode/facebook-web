import { useState } from "react";
import axios from "axios";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const onChangeEmail = (event) => {
    const finalEmail = event.target.value;
    setEmailIsValid(true);
    setEmail(finalEmail);
  };

  const onChangePassword = (event) => {
    const finalPassword = event.target.value;
    setPasswordIsValid(true);
    setPassword(finalPassword);
  };

  const checkLogin = async (event) => {
    const response = await axios
      .post("http://localhost:3001/user/login", {
        email,
        password,
      })
      .then(function (response) {
        if (!response.data.sucess) {
          setError("Invalid Credintials");
          return;
        }
        setError("");
      })
      .catch(function (error) {
        if (error.response.data.errors[0].param === "email") {
          setEmailIsValid(false);
          setError("Please enter a valid email ");
          return;
        } else if (error.response.data.errors[0].param === "password") {
          setPasswordIsValid(false);
          setError("Please enter a valid password ");
          return;
        }
      });
  };

  return (
    <div className="login-container">
      <div className="header">
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
          <input
            onChange={onChangeEmail}
            className={`${!emailIsValid && "input-error"}`}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={onChangePassword}
            className={`${!passwordIsValid && "input-error"}`}
            type="password"
            placeholder="Password"
          />
          <button onClick={checkLogin} type="submit" className="loginBtn">
            Log In
          </button>
          <hr />
          {error && <div className="error-message">{error}</div>}
          <div className="signUp">
            <a href="../signup">Create new account</a>
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
