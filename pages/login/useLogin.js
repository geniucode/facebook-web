import { useState } from "react";
import { useRouter } from "next/navigation";
import { postAxios } from "../../service/axios";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [showHidePasswordBtn, setShowHidePasswordBtn] = useState(false);
  const router = useRouter();
  const onChangeEmail = (event) => {
    const finalEmail = event.target.value;
    setEmail(finalEmail);
    if (finalEmail.length > 0) {
      setError();
      setEmailIsValid(true);
    }
  };

  const onChangePassword = (event) => {
    const finalPassword = event.target.value;
    setPassword(finalPassword);
    if (finalPassword.length > 0) {
      setError();
      setPasswordIsValid(true);
    } else if (finalPassword.length === 0) {
      setShowHidePasswordBtn(false);
    }
  };
  const displayShowPasswordBtn = () => {
    setShowHidePasswordBtn(false);
  };

  const displayHidePasswordBtn = () => {
    setShowHidePasswordBtn(true);
  };

  const checkLogin = async (event) => {
    try {
      if (email.length === 0) {
        setEmailIsValid(false);
        setError("Please enter a valid email address");
        if (password.length === 0) {
          setPasswordIsValid(false);
          setError("Please enter an email and a password");
          return;
        }
        return;
      }
      if (password.length === 0) {
        setPasswordIsValid(false);
        setError("Please enter a password");
        return;
      }
      const response = await postAxios("user/login", {
        email,
        password,
      });
      console.log("response", response);
      if (!response.success) {
        setError("Invalid Credintials");
      } else {
        const jwtToken = response.jwtToken;
        localStorage.setItem("token", jwtToken);
        router.push("/home");
      }
    } catch (error) {
      const response = error.response;
      if (response.data.errors[0].param === "email") {
        setEmailIsValid(false);
        setError("Please enter a valid email ");
      } else if (response.data.errors[0].param === "password") {
        setPasswordIsValid(false);
        setError("Please enter a valid password ");
        return;
      }
    }
  };

  const onClcikGoToSignUp = () => {
    router.push("/signup");
  };

  const onClickGoToForgetPassword = () => {
    router.push("/forgetpassword");
  };

  return {
    password,
    error,
    emailIsValid,
    passwordIsValid,
    showHidePasswordBtn,
    onChangeEmail,
    onChangePassword,
    displayShowPasswordBtn,
    displayHidePasswordBtn,
    checkLogin,
    onClcikGoToSignUp,
    onClickGoToForgetPassword,
  };
};

export { useLogin };
