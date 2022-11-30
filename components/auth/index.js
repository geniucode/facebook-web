import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
import { userState } from "../../atoms/user";
import { postAxios } from "../../service/axios.js";

const Auth = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const setUser = useSetRecoilState(userState);
  const getData = async () => {
    if (localStorage.getItem("token")) {
      const response = await postAxios("validate-token", {
        jwtToken: localStorage.getItem("token"),
      });
      if (response.success) {
        setUser(response.user);
        setIsLoading(true);
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

  return isLoading && children;
};

export { Auth };
