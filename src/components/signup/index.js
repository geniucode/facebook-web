import axios from "axios";
import { useEffect, useState } from "react";
import { CountrySelector } from "./countrySelector";
import { DateSelector } from "./dateSelector";
import "./style.css";

const Signup = () => {
  const date = new Date();
  const [currYear, currMonth, currDay] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  ];

  const [email, setEmail] = useState({ value: "", accepted: true });
  const [password, setPassword] = useState({ value: "", accepted: true });
  const [birthDay, setBirthDay] = useState({
    value: `${currYear}-${currMonth}-${currDay}`,
    accepted: true,
  });
  const [gender, setGender] = useState({ value: "", accepted: true });
  const [country, setCountry] = useState({ value: "", accepted: true });

  const onChangeEmail = (event) => {
    setEmail({
      value: event.target.value,
      accepted: event.target.value.length !== 0,
    });
  };
  const onChangePassword = (event) => {
    setPassword({
      value: event.target.value,
      accepted: event.target.value.length !== 0,
    });
  };
  const onClickGender = (event) => {
    if (
      event.target.childNodes.length === 0 &&
      event.target.value !== gender.value
    ) {
      event.target.checked = true;
      setGender({
        value: event.target.value,
        accepted: event.target.value.length !== 0,
      });
    } else if (
      event.target.childNodes.length === 1 &&
      event.target.nextSibling.value !== gender.value
    ) {
      event.target.nextSibling.checked = true;
      setGender({
        value: event.target.nextSibling.value,
        accepted: event.target.nextSibling.value.length !== 0,
      });
    } else if (
      event.target.childNodes.length === 2 &&
      event.target.children[1].value !== gender.value
    ) {
      event.target.children[1].checked = true;
      setGender({
        value: event.target.children[1].value,
        accepted: event.target.children[1].value.length !== 0,
      });
    }
  };
  const onClickBtn = async () => {
    try {
      await axios.post("http://localhost:3001/user/signup", {
        email: email.value,
        gender: gender.value,
        password: password.value,
        birthDay: birthDay.value,
        country: country.value,
      });
    } catch (error) {
      const errors = error.response?.data?.errors?.map((error) => error.param);
      if (errors) {
        console.log(errors);
        if (errors.includes("email")) {
          setEmail({ value: "", accepted: false });
        }
        if (errors.includes("password")) {
          setPassword({ value: "", accepted: false });
        }
        if (errors.includes("birthDay")) {
          setBirthDay({ value: "", accepted: false });
        }
        if (errors.includes("gender")) {
          setGender({ value: "", accepted: false });
        }
        if (errors.includes("country")) {
          setCountry({ value: "", accepted: false });
        }
      }
    }
  };

  useEffect(() => {}, [email, password, birthDay, gender, country]);

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
          <a href="login">Already have an account?</a>
        </div>
      </div>
    </div>
  );
};

export { Signup };
