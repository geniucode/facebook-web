import "./style.css";
import facebook from "./images/Facebook-Logo.png";
import { useLogin } from "../login/useLogin";

const HeaderLogin = () => {
  const {
    error,
    emailIsValid,
    passwordIsValid,
    onChangeEmail,
    onChangePassword,
    checkLogin,
    onClickGoToForgetPassword,
  } = useLogin();

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
        <div onClick={onClickGoToForgetPassword}>Forgotten account?</div>
      </div>
    </div>
  );
};

export { HeaderLogin };
