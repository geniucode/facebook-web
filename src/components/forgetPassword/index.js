import "./style.css";
import { HeaderLogin } from "../header";
import { FbSnackBar } from "../snackBar/index.js";
import { useForgetPassword } from "./useForgetPassword";

const ForgetPassword = () => {
  const { open, setOpen, message, onClickSubmit, setEmail, FbSnackBar } =
    useForgetPassword();

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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="forget-button">
            <button className="showSnackbarBttn" onClick={onClickSubmit}>
              Submit
            </button>
            <FbSnackBar open={open} message={message} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { ForgetPassword };
