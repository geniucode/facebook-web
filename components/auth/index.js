import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useRouter } from 'next/router'
import { postAxios } from "../../service/axios.js";

const Auth = ({ children }) => {
  const [loading, setLoading] = useState(false);
  //const navigate = useNavigate();
  const router = useRouter()
  const getData = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (typeof token !== null) {
      const isValidToken = await postAxios("validate-token", {
        jwtToken: token,
      });
      if (isValidToken.seccuss) {
        setLoading(true);
      } else {
        //navigate("/login");
        router.push('login')
      }
    } else {
      setLoading(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return loading && children;
};

export { Auth };

// HOC
