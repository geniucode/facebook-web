import "./style.css";
import { HeaderLogin } from "../header";
import { FbSnackBar } from "../snackBar/index.js";
import { useState } from "react";
import { postAxios } from "../../service/axios";

const ForgetPassword = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onClickSubmit = async () => {
    const response = await postAxios("user/forgot-password", {
      email,
    });
    console.log(response);
    if (response.success) {
      setMessage("Email sent");
      setOpen(true);
    } else {
      setMessage("Invalid Email");
      setOpen(true);
    }
  };
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
