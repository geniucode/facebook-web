import "./style.css";
import { HeaderLogin } from "../../components/header";
import { FbSnackBar } from "../../components/snackBar/index.js";
import { useEffect, useState } from "react";
import { getAxios, postAxios } from "../../service/axios";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get("__firebase_request_key");

  const onClickSubmit = async () => {
    const forgetPasswordToken = searchParams.get("hashcode");
    const response = await postAxios("user/reset-password", {
      forgetPasswordToken,
      password,
    });
    console.log(response);
    if (response.success) {
      setMessage("Password chaging sucessc sent");
      setOpen(true);
    } else {
      setMessage("Invalid Email");
      setOpen(true);
    }
  };
  const checkAccess = async () => {
    const forgetPasswordToken = searchParams.get("hashcode");
    console.log(forgetPasswordToken);
    const response = await getAxios("user/reset-password", {
      forgetPasswordToken,
    });
    console.log(response);
    if (response.success) {
      setHasAccess(true);
    }
  };
  useEffect(() => {
    checkAccess();
  }, []);
  return (
    <div className="forget-password">
      <HeaderLogin />
      <div className="forget-password-container">
        {hasAccess ? (
          <div className="forget-password-form">
            <div className="title">Change Your Password</div>
            <div className="email-input">
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="forget-button">
              <button className="showSnackbarBttn" onClick={onClickSubmit}>
                Submit
              </button>
              <FbSnackBar open={open} message={message} setOpen={setOpen} />
            </div>
          </div>
        ) : (
          <div className="title">Forbidden page</div>
        )}
      </div>
    </div>
  );
};

export { ResetPassword };
