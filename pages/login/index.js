import err from "./images/error.png";
import ShowPasswordImg from "./images/show-password.png";
import HidePasswordImg from "./images/hide-password.png";
// import "./style.css";
import { useLogin } from "./useLogin";

import styles from "../../styles/login.module.css";
const Login = () => {
  const {
    password,
    error,
    emailIsValid,
    passwordIsValid,
    showHidePasswordBtn,
    onChangeEmail,
    onChangePassword,
    displayShowPasswordBtn,
    displayHidePasswordBtn,
    checkLogin,
    onClcikGoToSignUp,
  } = useLogin();
  return (
    <div className={styles.loginContainer}>
      <div className={styles.headers}>
        <div className={styles.headerTitle}>
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

export default Login;
