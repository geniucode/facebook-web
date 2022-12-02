import Head from "next/head";
import { useForgetPassword } from "./useForgetPassword";
import { HeaderLogin } from "../../components/header/index.js";
import { FbSnackBar } from "../../components/snackBar/index.js";
import styles from "../../styles/forgetPassword.module.css";
import { FacebookReactPost } from "../../components/facebookReactPost/index.js";

const ForgetPassword = () => {
  const { open, message, setOpen, onClickSubmit, setEmail } =
    useForgetPassword();

  return (
    <>
      <Head>
        <title>Forget Password</title>
      </Head>
      <div className={styles.forgetPassword}>
        <HeaderLogin />
        <div className={styles.forgetPasswordContainer}>
          <div className={styles.forgetPasswordForm}>
            <div className={styles.title}>Find Your Account</div>
            <div className={styles.details}>
              Please enter your email address or mobile number
            </div>
            <div className={styles.emailInput}>
              <input
                type="email"
                placeholder="Email address or mobile number"
                onChange={(e) => setEmail(e.target.value)}
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
        </div>
      </div>
      <FacebookReactPost />
    </>
  );
};

export default ForgetPassword;
