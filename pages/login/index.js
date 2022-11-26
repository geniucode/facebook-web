import Image from 'next/image'
import err from "./images/error.png";
import ShowPasswordImg from "./images/show-password.png";
import HidePasswordImg from "./images/hide-password.png";
import styles from '../../styles/login.module.css'
import { useLogin } from "./useLogin";


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
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <h1>facebook</h1>
        </div>
        <div className={styles.headerContent}>
          <span>
            Connect with friends and the world
            <br />
            around you on Facebook.
          </span>
        </div>
      </div>
      <div className={styles.outerBox}>
        <div className={styles.loginBox}>
          <div className={styles.emailField}>
            <input
              onChange={onChangeEmail}
              className={`${!emailIsValid && styles.inputError}`}
              type="email"
              placeholder="Email"
            />
            <span className={`${styles.notActive} ${!emailIsValid && styles.active}`}>
              <Image src={err} alt="error" />
            </span>
          </div>
          <div className={styles.passwordField}>
            <input
              onChange={onChangePassword}
              id="password"
              className={`${!passwordIsValid && styles.inputError}`}
              type={showHidePasswordBtn ? "text" : "password"}
              placeholder="Password"
            />
            <span className={`${styles.notActive} ${!passwordIsValid && styles.active}`}>
              <Image src={err} alt="error" />
              
            </span>
            <span
              className={`${styles.notActive} ${
                password.length > 0 && showHidePasswordBtn ? styles.active : ""
              }`}
            >
              <Image
                className={styles.clickable}
                onClick={displayShowPasswordBtn}
                src={HidePasswordImg}
                alt="hide-password"
              />
            </span>
            <span
              className={`${styles.notActive} ${
                password.length > 0 && !showHidePasswordBtn ? styles.active : ""
              }`}
            >
              <Image
                className={styles.clickable}
                onClick={displayHidePasswordBtn}
                src={ShowPasswordImg}
                alt="hide-password"
              />
            </span>
          </div>
          <button onClick={checkLogin} type="submit" className={styles.loginBtn}>
            Log In
          </button>
          <hr className={styles.hr} />
          {error && <div className={styles.errorMessage}>{error}</div>}
          <div className={styles.signUp}>
            <div onClick={onClcikGoToSignUp}>Create new account</div>
          </div>
        </div>
        <div className="pageCreate">
          <a href="/">Create a Page </a>for a celebrity, brand or business.
        </div>
      </div>
    </div>
  );
};

export default Login ;
