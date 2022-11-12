import { CountrySelector } from "../../components/signup/countrySelector.js";
import { DateSelector } from "../../components/signup/dateSelector";
import { useSignup } from "../../components/signup/useSignup";
import "./style.css";

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
    <div className="signup-container">
      <div className="logo-container">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="Facebook"
        />
      </div>
      <div className="form-container">
        <div className="form-heading">
          <div className="form-heading-1">Create a new account</div>
          <div className="form-heading-2">It’s quick and easy.</div>
        </div>
        <div className="form-details">
          <div
            className={`input-container ${
              email.accepted ? "error-hidden" : "error-shown"
            }`}
          >
            <input type="email" placeholder="Email" onChange={onChangeEmail} />
          </div>
          <div
            className={`input-container ${
              password.accepted ? "error-hidden" : "error-shown"
            }`}
          >
            <input
              type="password"
              placeholder="New password"
              onChange={onChangePassword}
            />
          </div>
          <div
            className={`section-container ${
              birthDay.accepted ? "error-hidden" : "error-shown"
            }`}
          >
            <div className="birthday-section">
              <div className="section-title">Birthday</div>
              <DateSelector birthDay={birthDay} setBirthDay={setBirthDay} />
            </div>
          </div>
          <div
            className={`section-container ${
              gender.accepted ? "error-hidden" : "error-shown"
            }`}
          >
            <div className="gender-section">
              <div className="section-title">Gender</div>
              <div className="gender-selectors-container">
                <div className="gender-selector" onClick={onClickGender}>
                  <label>Female</label>
                  <input type="radio" name="gender" value="Female" />
                </div>
                <div className="gender-selector" onClick={onClickGender}>
                  <label>Male</label>
                  <input type="radio" name="gender" value="Male" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`section-container ${
              country.accepted ? "error-hidden" : "error-shown"
            }`}
          >
            <div className="country-section">
              <div className="section-title">Country</div>
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
          <div style={{ cursor: "pointer" }} onClick={onClcikGoToSignIn}>
            Already have an account?
          </div>
        </div>
      </div>
    </div>
  );
};

export { Signup };
