import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { postAxios } from "../../service/axios";
const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [showHidePasswordBtn, setShowHidePasswordBtn] = useState(false);

  const navigate = useNavigate();

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

      if (!response.data?.sucess) {
        setError("Invalid Credintials");
      } else if (response.data?.sucess && response.data?.jwtToken) {
        const jwtToken = response.data.jwtToken;
        const isValidToken = await axios.post(
          "http://localhost:3001/validate-token",
          { jwtToken }
        );
        if (isValidToken) {
          navigate("/");
        } else {
          navigate("/login");
        }
      } else {
        localStorage.setItem("token", response.data.token);
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
    navigate("/signup");
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
  };
};

export { useLogin };
