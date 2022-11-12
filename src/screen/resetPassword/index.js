
import { HeaderLogin } from "../../components/header";
import { FbSnackBar } from "../../components/snackBar/index.js";

import "./style.css";
import { useResetPassword } from "./useResetPassword";

const ResetPassword = () => {
  const {
  hasAccess,
  password,
  open,
  message,
  earchParams,
  setPassword,
  setOpen,
  onClickSubmit,
  checkAccess,
}=useResetPassword();

  return (
    <div className="forget-password">
      <HeaderLogin />
      <div className="forget-password-container">
        {!hasAccess ? (
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
