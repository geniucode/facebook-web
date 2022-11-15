import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useHome = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onLoadValidateToken = async (event) => {
    console.log(event);
    const jwtToken = window.localStorage.getItem("jwtToken");
    const response = await axios.post(
      "http://localhost:3001/validate-token",
      {},
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    if (response?.data?.seccuss) {
      setEmail(response.data.user.email);
    } else {
      console.log(response);
      navigate("/login");
    }
  };

  return { email, onLoadValidateToken, };
};

export { useHome };
