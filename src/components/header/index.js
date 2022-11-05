import "./style.css";
import { useState } from "react";
import axios from "axios";
import facebook from "./images/Facebook-Logo.png";

const HeaderLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const onChangeEmail = (event) => {
    const finalEmail = event.target.vlue;
    setEmailIsValid(true);
    setEmail(finalEmail);
  };

  const onChangePassword = (event) => {
    const finalPassword = event.target.value;
    setPasswordIsValid(true);
    setPassword(finalPassword);
  };

  const checkLogin = async (event) => {
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        email,
        password,
      });
      if (!response.data.sucess) {
        setError("Invalid Credintials");
      }
    } catch (error) {
      const response = error.response;
      if (response.data.errors[0].param === "email") {
        setEmailIsValid(false);
        setError("Please enter a valid email ");
      } else if (response.data.errors[0].param === "password") {
        setPasswordIsValid(false);
        setError("Please enter a valid password ");
      }
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={facebook} alt="Facebook" />
      </div>
      <div className="signin-inputs">
        <input
          className={`${!emailIsValid && "input-error"}`}
          type="email"
          placeholder="Email or phone"
          onChange={onChangeEmail}
        />
        <input
          className={`${!passwordIsValid && "input-error"}`}
          type="password"
          placeholder="Password"
          onChange={onChangePassword}
        />
        <button onClick={checkLogin}>Log in</button>
        {error && <div className="error-message">{error}</div>}
        <a href="/forget-password">Forgotten account?</a>
      </div>
    </div>
  );
};

export { HeaderLogin };
