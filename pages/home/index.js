import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../atoms/user";
import { postAxios } from "../../src/service/axios";
import HomeHeader from "../../components/homeHeader";

const Home = () => {
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
  const user = useRecoilValue(userState);
  return (
    <>
      <HomeHeader />
    </>
  );
};

export default Home;
