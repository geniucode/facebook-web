import Head from "next/head.js";
import Link from "next/link";
import CountrySelector from "./countrySelector.js";
import DateSelector from "./dateSelector.js";
import { useSignup } from "./useSignup.js";
import styles from "../../styles/signup.module.css";

const Signup = () => {
  const {
    firstName,
    onChangeFirstName,
    lastName,
    onChangeLastName,
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
    isLoading,
  } = useSignup();
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <div className={styles.signupContainer}>
        <div className={styles.logoContainer}>
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="Facebook"
          />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formHeading}>
            <div className={styles.formHeading1}>Create a new account</div>
            <div className={styles.formHeading2}>It’s quick and easy.</div>
          </div>
          <div className={styles.formDetails}>
            <div className={styles.inputContainer}>
              <div
                className={` ${styles.inputContainer} ${
                  firstName.accepted ? styles.errorHidden : styles.errorShown
                }`}
              >
                <input
                  type="text"
                  placeholder="First name"
                  onChange={onChangeFirstName}
                />
              </div>
              <div
                className={` ${styles.inputContainer} ${
                  lastName.accepted ? styles.errorHidden : styles.errorShown
                }`}
              >
                <input
                  type="text"
                  placeholder="Last name"
                  onChange={onChangeLastName}
                />
              </div>
            </div>
            <div
              className={` ${styles.inputContainer} ${
                email.accepted ? styles.errorHidden : styles.errorShown
              }`}
            >
              <input
                type="email"
                placeholder="Email"
                onChange={onChangeEmail}
              />
            </div>
            <div
              className={` ${styles.inputContainer} ${
                password.accepted ? styles.errorHidden : styles.errorShown
              }`}
            >
              <input
                type="password"
                placeholder="New password"
                onChange={onChangePassword}
              />
            </div>
            <div
              className={` ${styles.sectionContainer} ${
                birthDay.accepted ? styles.errorHidden : styles.errorShown
              }`}
            >
              <div className={styles.birthdaySection}>
                <div className={styles.sectionTitle}>Birthday</div>
                <DateSelector birthDay={birthDay} setBirthDay={setBirthDay} />
              </div>
            </div>
            <div
              className={`${styles.sectionContainer} ${
                gender.accepted ? styles.errorHidden : styles.errorShown
              }`}
            >
              <div className={styles.genderSection}>
                <div className={styles.sectionTitle}>Gender</div>
                <div className={styles.genderSelectorsContainer}>
                  <div
                    className={styles.genderSelector}
                    onClick={onClickGender}
                  >
                    <label>Female</label>
                    <input type="radio" name="gender" value="Female" />
                  </div>
                  <div
                    className={styles.genderSelector}
                    onClick={onClickGender}
                  >
                    <label>Male</label>
                    <input type="radio" name="gender" value="Male" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` ${styles.sectionContainer} ${
                country.accepted ? styles.errorHidden : styles.errorShown
              }`}
            >
              <div className={styles.countrySection}>
                <div className={styles.sectionTitle}>Country</div>
                <CountrySelector country={country} setCountry={setCountry} />
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
            <button onClick={onClickBtn} disabled={isLoading}>
              {isLoading ? (
                <div className={styles.loadingSpinner}></div>
              ) : (
                "Sign Up"
              )}
            </button>
            <Link href="/login">Already have an account?</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
