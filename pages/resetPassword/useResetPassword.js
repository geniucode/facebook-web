import { useEffect, useState } from "react";
//import { useSearchParams } from "react-router-dom"; 
import { useSearchParams } from 'next/navigation'
import { getAxios, postAxios } from "../../service/axios";
const useResetPassword = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
 const searchParams = useSearchParams();
 searchParams.get('__firebase_request_key')

  const onClickSubmit = async () => {
    const forgetPasswordToken = searchParams.get("hashcode");
    const response = await postAxios("user/reset-password", {
      forgetPasswordToken,
      password,
    });
    console.log(response);
    if (response.success) {
      setMessage("Password chaging sucessc sent");
      setOpen(true);
    } else {
      setMessage("Invalid Email");
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
