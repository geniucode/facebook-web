import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { postAxios } from "../../service/axios";

const useSignup = () => {
  const router = useRouter();
  const date = new Date();
  let [currYear, currMonth, currDay] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  ];
  currMonth = currMonth > 10 ? `${currMonth}` : `0${currMonth}`;
  currDay = currDay > 10 ? `${currDay}` : `0${currDay}`;

  const [firstName, setFirstName] = useState({ value: "", accepted: true });
  const [lastName, setLastName] = useState({ value: "", accepted: true });
  const [email, setEmail] = useState({ value: "", accepted: true });
  const [password, setPassword] = useState({ value: "", accepted: true });
  const [birthDay, setBirthDay] = useState({
    value: `${currYear}-${currMonth}-${currDay}`,
    accepted: true,
  });
  const [gender, setGender] = useState({ value: "", accepted: true });
  const [country, setCountry] = useState({ value: "", accepted: true });

  const onChangeFirstName = (event) => {
    setFirstName({
      value: event.target.value,
      accepted: event.target.value.length !== 0,
    });
  };
  const onChangeLastName = (event) => {
    setLastName({
      value: event.target.value,
      accepted: event.target.value.length !== 0,
    });
  };
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
    const response = await postAxios("user/signup", {
      name: `${firstName.value} ${lastName.value}`,
      email: email.value,
      gender: gender.value,
      password: password.value,
      birthDay: birthDay.value,
      country: country.value,
    });

    const errors = response.errors?.map((error) => error.param);
    if (errors) {
      console.log(errors);
      if (errors.includes("name")) {
        setFirstName({ value: "", accepted: false });
        setLastName({ value: "", accepted: false });
      }
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
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {}, [
    firstName,
    lastName,
    email,
    password,
    birthDay,
    gender,
    country,
  ]);

  return {
    firstName,
    onChangeFirstName,
    lastName,
    onChangeLastName,
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
  };
};

export { useSignup };
