import { useEffect } from "react";
import Head from "next/head";
import { useResetPassword } from "./useResetPassword";
import { HeaderLogin } from "../../components/header/index.js";
import { FbSnackBar } from "../../components/snackBar/index.js";
import styles from "../../styles/resetPassword.module.css";
import { useRoutes } from "react-router-dom";

const ResetPassword = () => {
  const {
    hasAccess,
    open,
    message,
    setPassword,
    setOpen,
    onClickSubmit,
    checkAccess,
  } = useResetPassword();
  return (
    <>
      <Head>
        <title>Reset Password</title>
      </Head>
      <div className={styles.forgetPassword}>
        <HeaderLogin />
        <div className={styles.forgetPasswordContainer}>
          {hasAccess ? (
            <div className={styles.forgetPasswordForm}>
              <div className={styles.title}>Change Your Password</div>
              <div className={styles.emailInput}>
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.forgetButton}>
                <button
                  className={styles.showSnackbarBttn}
                  onClick={onClickSubmit}
                >
                  Submit
                </button>
                <FbSnackBar open={open} message={message} setOpen={setOpen} />
              </div>
            </div>
          ) : (
            <div className={styles.title}>Forbidden page</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
