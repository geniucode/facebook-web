
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

  const onClickSubmit = async () => {
    const forgetPasswordToken = searchParams.get("hashcode");
    const response = await postAxios("user/reset-password", {
      forgetPasswordToken,
      password,
    });
    console.log(response);
    if (response.success) {
      setMessage("Password has been successfully changed!");
      setOpen(true);
    } else {
      setMessage(
        "Please have 8 or more characters, have atleast one symbol, one lower case, and one upper case letter."
      );
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
