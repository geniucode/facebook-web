import { useState } from "react";
import { postAxios } from "../../service/axios";
import { FbSnackBar } from "../snackBar/index.js";

const useForgetPassword = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onClickSubmit = async () => {
    const response = await postAxios("user/forgot-password", {
      email,
    });
    console.log(response);
    if (response.success) {
      setMessage("Email sent");
      setOpen(true);
    } else {
      setMessage("Invalid Email");
      setOpen(true);
    }
  };
  return {
    open,
    setOpen,
    message,
    onClickSubmit,
    setEmail,
    FbSnackBar,
  };
};

export { useForgetPassword };
