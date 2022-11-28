import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
import { userState } from "../../atoms/user";
import { postAxios } from "../../service/axios.js";

const Auth = ({ children }) => {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);
  const getData = async () => {
    if (localStorage.getItem("token")) {
      const response = await postAxios("validate-token", {
        jwtToken: localStorage.getItem("token"),
      });
      if (response.success) {
        setUser(response.user);
        router.push("/home");
      } else {
        router.push("/login");
      }
    } else {
      router.push("/login");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return children;
};

export { Auth };
