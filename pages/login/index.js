import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useLogin } from "./useLogin";
import err from "./images/error.png";
import ShowPasswordImg from "./images/show-password.png";
import HidePasswordImg from "./images/hide-password.png";
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
    // onClcikGoToSignUp,
  } = useLogin();
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles[`login-container`]}>
        <title>Login</title>
        <div className={styles.headers}>
          <div className={styles[`header-title`]}>
            <h1>facebook</h1>
          </div>
          <div className={styles[`header-content`]}>
            <span>
              Connect with friends and the world
              <br />
              around you on Facebook.
            </span>
          </div>
        </div>
        <div className={styles[`outer-box`]}>
          <div className={styles[`login-box`]}>
            <div className={styles[`email-field`]}>
              <input
                onChange={onChangeEmail}
                className={`${!emailIsValid && styles["input-error"]}`}
                type="email"
                placeholder="Email"
              />
              <span
                className={`${styles["not-active"]} ${
                  !emailIsValid && styles.active
                }
              }`}
              >
                <Image src={err} alt="error" />
              </span>
            </div>
            <div className={styles[`password-field`]}>
              <input
                onChange={onChangePassword}
                id="password"
                className={`${!passwordIsValid && styles["input-error"]}`}
                type={showHidePasswordBtn ? "text" : "password"}
                placeholder="Password"
              />
              <span
                className={`${styles["not-active"]} ${
                  !passwordIsValid && styles["active"]
                }`}
              >
                <Image src={err} alt="error" />
              </span>
              <span
                className={`${styles["not-active"]} ${
                  password.length > 0 && showHidePasswordBtn
                    ? styles["active"]
                    : ""
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
                className={`${styles["not-active"]} ${
                  password.length > 0 && !showHidePasswordBtn
                    ? styles["active"]
                    : ""
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
            <button
              onClick={checkLogin}
              type="submit"
              className={styles.loginBtn}
            >
              Log In
            </button>
            <hr className={styles.line} />
            {error && <div className={styles["error-message"]}>{error}</div>}
            <div className={styles.signUp}>
              {/* <div onClick={onClcikGoToSignUp}>Create new account</div> */}
              <div>
                <Link href="/signup">Create new account</Link>
              </div>
            </div>
          </div>
          <div className={styles["page-create"]}>
            {/* <a href="/">Create a Page </a>for a celebrity, brand or business. */}
            <Link href="/forgetpassword">Forgot Your Password?</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
