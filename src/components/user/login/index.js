import { useState } from "react";
import axios from "axios";
import facebook from "./images/facebook.png";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    const finalEmail = event.target.value;
    setEmail(finalEmail);
  };

  const onChangePassword = (event) => {
    const finalPassword = event.target.value;
    setPassword(finalPassword);
  };

  const checkLogin = async (event) => {
    const response = await axios.post("http://localhost:3001/user/login", {
      email,
      password,
    });

    console.log(response.data);
  };

  return (
    <div className="login-container">
      <div className="page-create">
        <a href="#">Create a Page </a>for a celebrity, brand or business.
      </div>
      <div className="header">
        <div className="header-title">
          <img src={facebook} />
        </div>
        <p className="header-content">
          Connect with friends and the world around you on Facebook.
        </p>
      </div>
      <form>
        <div className="login-box">
          <input onChange={onChangeEmail} type="email" placeholder="Email" />
          <input
            onChange={onChangePassword}
            type="password"
            placeholder="Password"
          />
          <button onClick={checkLogin} type="submit" className="loginBtn">
            Log In
          </button>
          <hr />
          <button type="submit" className="signupBtn">
            <a href="../signup">Create new account</a>
          </button>
        </div>
      </form>
    </div>
  );
};

export { Login };
