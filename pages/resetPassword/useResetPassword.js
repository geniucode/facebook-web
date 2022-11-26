import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getAxios, postAxios } from "../../service/axios";

const useResetPassword = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("hashCode")) {
      checkAccess();
    }
  }, [searchParams]);
  console.log(searchParams?.get("hashCode"));
  // const getParam = async () => {
  //   await searchParams.get("__firebase_request_key");

  // };
  searchParams.get("__firebase_request_key");

  const onClickSubmit = async () => {
    const forgetPasswordToken = searchParams.get("hashcode");
    console.log("forgetPasswordToken", forgetPasswordToken);
    const response = await getAxios("user/reset-password", {
      forgetPasswordToken,
      password,
    });
    // console.log(response);
    if (response.success) {
      setMessage("Password chaging sucessc sent");
      setOpen(true);
    } else {
      setMessage("Invalid Email");
      setOpen(true);
    }
  };
  const checkAccess = async () => {
    const forgetPasswordToken = await searchParams.get("hashCode");
    // if (forgetPasswordToken === null) {
    //   console.log("forgetPasswordTokens", forgetPasswordToken);
    //   return setHasAccess(false);
    // }
    const response = await getAxios("user/reset-password", {
      forgetPasswordToken,
    });
    if (response.success) {
      setHasAccess(true);
    }
  };

  return {
    hasAccess,
    password,
    open,
    message,
    searchParams,
    setPassword,
    setOpen,
    onClickSubmit,
    checkAccess,
  };
};
export { useResetPassword };
