import Head from "next/head.js";
import Link from "next/link";
import { CountrySelector } from "./countrySelector.js";
import { DateSelector } from "./dateSelector.js";
import { useSignup } from "./useSignup.js";
import styles from "../../styles/signup.module.css";

const Signup = () => {
  const {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    birthDay,
    setBirthDay,
    gender,
    onClickGender,
    country,
    setCountry,
    onClickBtn,
    onClcikGoToSignIn,
  } = useSignup();
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <div className={styles["signup-container"]}>
        <div className={styles["logo-container"]}>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="Facebook"
          />
        </div>
        <div className={styles["form-container"]}>
          <div className={styles["form-heading"]}>
            <div className={styles["form-heading-1"]}>Create a new account</div>
            <div className={styles["form-heading-2"]}>It’s quick and easy.</div>
          </div>
          <div className={styles["form-details"]}>
            <div
              className={` ${styles["input-container"]} ${
                email.accepted ? styles["error-hidden"] : styles["error-shown"]
              }`}
            >
              <input
                type="email"
                placeholder="Email"
                onChange={onChangeEmail}
              />
            </div>
            <div
              className={` ${styles["input-container"]} ${
                password.accepted
                  ? styles["error-hidden"]
                  : styles["error-shown"]
              }`}
            >
              <input
                type="password"
                placeholder="New password"
                onChange={onChangePassword}
              />
            </div>
            <div
              className={` ${styles["section-container"]} ${
                birthDay.accepted
                  ? styles["error-hidden"]
                  : styles["error-shown"]
              }`}
            >
              <div className={styles["birthday-section"]}>
                <div className={styles["section-title"]}>Birthday</div>
                <DateSelector birthDay={birthDay} setBirthDay={setBirthDay} />
              </div>
            </div>
            <div
              className={`${styles["section-container"]} ${
                gender.accepted ? styles["error-hidden"] : styles["error-shown"]
              }`}
            >
              <div className={styles["gender-section"]}>
                <div className={styles["section-title"]}>Gender</div>
                <div className={styles["gender-selectors-container"]}>
                  <div
                    className={styles["gender-selector"]}
                    onClick={onClickGender}
                  >
                    <label>Female</label>
                    <input type="radio" name="gender" value="Female" />
                  </div>
                  <div
                    className={styles["gender-selector"]}
                    onClick={onClickGender}
                  >
                    <label>Male</label>
                    <input type="radio" name="gender" value="Male" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` ${styles["section-container"]} ${
                country.accepted
                  ? styles["error-hidden"]
                  : styles["error-shown"]
              }`}
            >
              <div className={styles["country-section"]}>
                <div className={styles["section-title"]}>Country</div>
                <CountrySelector setCountry={setCountry} />
              </div>
            </div>
            <p>
              People who use our service may have uploaded your contact
              information to Facebook.{" "}
              <a href="https://www.facebook.com/campaign/help/637205020878504">
                Learn more
              </a>
              .
            </p>
            <p>
              By clicking Sign Up, you agree to our{" "}
              <a href="https://www.facebook.com/legal/terms/update">Terms</a>,{" "}
              <a href="https://www.facebook.com/about/privacy/update">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="https://www.facebook.com/policies/cookies/">
                Cookies Policy
              </a>
              . You may receive SMS Notifications from us and can opt out any
              time.
            </p>
            <button onClick={onClickBtn}>Sign Up</button>
            {/* <div style={{ cursor: "pointer" }} onClick={onClcikGoToSignIn}> */}
            <div>
              <Link href="/login">Already have an account?</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
