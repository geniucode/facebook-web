import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../atoms/user";
import { postAxios } from "../src/service/axios";

export default function Home() {
  const router = useRouter();
  const setUser = useSetRecoilState(userState);

  const getData = async () => {
    if (localStorage.getItem("token")) {
      const response = await postAxios("validate-token", {
        jwtToken: localStorage.getItem("token"),
      });
      console.log("response", response);
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
}
