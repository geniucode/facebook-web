import Image from 'next/image'
import styles from '../../styles/header.module.css'
import facebook from "./images/Facebook-Logo.png";
import { useLogin } from "../../pages/login/useLogin";

const HeaderLogin = () => {
  const {
    error,
    emailIsValid,
    passwordIsValid,
    onChangeEmail,
    onChangePassword,
    checkLogin,
    onClickGoToForgetPassword,
  } = useLogin();

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image src={facebook} alt="Facebook" />
      </div>
      <div className={styles.signinInputs}>
        <input
          className={`${!emailIsValid && styles.inputError}`}
          type="email"
          placeholder="Email or phone"
          onChange={onChangeEmail}
        />
        <input
          className={`${!passwordIsValid && styles.inputError}`}
          type="password"
          placeholder="Password"
          onChange={onChangePassword}
        />
        <button onClick={checkLogin}>Log in</button>
        {error && <div className={styles.errorMessage}>{error}</div>}
        <div onClick={onClickGoToForgetPassword}>Forgotten account?</div>
      </div>
    </div>
  );
};

export { HeaderLogin };
