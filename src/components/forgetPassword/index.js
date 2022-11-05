import "./style.css";
import { HeaderLogin } from "../header";
import { FbSnackBar } from "../snackBar/index.js";

const ForgetPassword = () => {
  return (
    <div className="forget-password">
      <HeaderLogin />
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
            <button className="showSnackbarBttn" onClick={FbSnackBar}>
              Submit
            </button>
            <FbSnackBar message="Email has been sent!" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ForgetPassword };
