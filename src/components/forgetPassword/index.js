import "./style.css";
import facebook from "./images/Facebook-Logo.png";

const ForgetPassword = () => {
  return (
    <div className="forget-password">
      <div className="header">
        <div className="logo">
          <img src={facebook} alt="Facebook" />
        </div>
        <div className="signin-inputs">
          <input type="email" placeholder="Email or phone" onChange="" />
          <input type="password" placeholder="Password" onChange="" />
          <button onClick="">Log in</button>
          <a href="/forget-password">Forgotten account?</a>
        </div>
      </div>
      <div className="forget-password-container">
        <div className="forget-password-form">
          <div className="title">Find Your Account</div>
          <div className="details">
            Please enter your email address or mobile number
          </div>
          <div className="email-input">
            <input
              type="email"
              placeholder="Email address or mobile number"
              onChange=""
            />
          </div>
          <div className="forget-button">
            <button onClick="">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ForgetPassword };
