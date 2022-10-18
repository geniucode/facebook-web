import axios from "axios";
import { useState } from "react";
import { CountrySelector } from "./countrySelector";
import { DateSelector } from "./dateSelector";
import "./style.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDay, setBirthDay] = useState(new Date());
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeGender = (event) => {
    setGender(event.target.value);
  };
  
  const onClickBtn = async () => {
    const res = await axios.post("http://localhost:3001/user/signup", {
        email,
        password,
        birthDay,
        gender,
        country,
      });
  };

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
          <input type="email" placeholder="Email" onChange={onChangeEmail}/>
          <input type="password" placeholder="New password" onChange={onChangePassword}/>
          <div className="birthday-section">
            <div className="section-title">Birthday</div>
            <DateSelector setBirthDay={setBirthDay}/>
          </div>
          <div className="gender-section">
            <div className="section-title">Gender</div>
            <div className="gender-selectors-container">
              <div className="gender-selector">
                <label>Female</label>
                <input type="radio" name="gender" value="Female" onChange={onChangeGender}/>
              </div>
              <div className="gender-selector">
                <label>Male</label>
                <input type="radio" name="gender" value="Male" onChange={onChangeGender}/>
              </div>
            </div>
          </div>
          <div className="country-section">
            <div className="section-title">Country</div>
            <CountrySelector setCountry={setCountry}/>
          </div>
          <p>
            People who use our service may have uploaded your contact
            information to Facebook.
            <a href="https://www.facebook.com/campaign/help/637205020878504">
              Learn more
            </a>
            .
          </p>
          <p>
            By clicking Sign Up, you agree to our
            <a href="https://www.facebook.com/legal/terms/update">Terms</a>,
            <a href="https://www.facebook.com/about/privacy/update">
              Privacy Policy
            </a>
            and
            <a href="https://www.facebook.com/policies/cookies/">
              Cookies Policy
            </a>
            . You may receive SMS Notifications from us and can opt out any
            time.
          </p>
          <button onClick={onClickBtn}>Sign Up</button>
          <a href="/user/login">Already have an account?</a>
        </div>
      </div>
    </div>
  );
};

export { Signup };
