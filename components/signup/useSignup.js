import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import axios from "axios";

const useSignup = () => {
  const date = new Date();
  let [currYear, currMonth, currDay] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  ];
  currMonth = currMonth > 10 ? `${currMonth}` : `0${currMonth}`;
  currDay = currDay > 10 ? `${currDay}` : `0${currDay}`;

  const [email, setEmail] = useState({ value: "", accepted: true });
  const [password, setPassword] = useState({ value: "", accepted: true });
  const [birthDay, setBirthDay] = useState({
    value: `${currYear}-${currMonth}-${currDay}`,
    accepted: true,
  });
  const [gender, setGender] = useState({ value: "", accepted: true });
  const [country, setCountry] = useState({ value: "", accepted: true });

  const onChangeEmail = (event) => {
    setEmail({
      value: event.target.value,
      accepted: event.target.value.length !== 0,
    });
  };
  const onChangePassword = (event) => {
    setPassword({
      value: event.target.value,
      accepted: event.target.value.length !== 0,
    });
  };
  const onClickGender = (event) => {
    if (
      event.target.childNodes.length === 0 &&
      event.target.value !== gender.value
    ) {
      event.target.checked = true;
      setGender({
        value: event.target.value,
        accepted: event.target.value.length !== 0,
      });
    } else if (
      event.target.childNodes.length === 1 &&
      event.target.nextSibling.value !== gender.value
    ) {
      event.target.nextSibling.checked = true;
      setGender({
        value: event.target.nextSibling.value,
        accepted: event.target.nextSibling.value.length !== 0,
      });
    } else if (
      event.target.childNodes.length === 2 &&
      event.target.children[1].value !== gender.value
    ) {
      event.target.children[1].checked = true;
      setGender({
        value: event.target.children[1].value,
        accepted: event.target.children[1].value.length !== 0,
      });
    }
  };
  const onClickBtn = async () => {
    try {
      await axios.post("http://localhost:3001/user/signup", {
        email: email.value,
        gender: gender.value,
        password: password.value,
        birthDay: birthDay.value,
        country: country.value,
      });
    } catch (error) {
      const errors = error.response?.data?.errors?.map((error) => error.param);
      if (errors) {
        console.log(errors);
        if (errors.includes("email")) {
          setEmail({ value: "", accepted: false });
        }
        if (errors.includes("password")) {
          setPassword({ value: "", accepted: false });
        }
        if (errors.includes("birthDay")) {
          setBirthDay({ value: "", accepted: false });
        }
        if (errors.includes("gender")) {
          setGender({ value: "", accepted: false });
        }
        if (errors.includes("country")) {
          setCountry({ value: "", accepted: false });
        }
      }
    }
  };

  useEffect(() => {}, [email, password, birthDay, gender, country]);

  //const navigate = useNavigate();

  const onClcikGoToSignIn = () => {
    //navigate("/login");
  };

  return {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    birthDay,
    setBirthDay,
    gender,
    onClickGender,
    country,
    setCountry,
    onClickBtn,
    onClcikGoToSignIn,
  };
};

export { useSignup };
