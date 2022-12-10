import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../atoms/user";
import { FacebookPost } from "../../components/facebookPost/index";
import { FacebookReactPost } from "../../components/facebookReactPost/index.js";

import { Auth } from "../../components/auth";
import { homeIconState } from "../../atoms/home-icon";
import HomeHeader from "../../components/homeHeader";
import { HomePageMneu } from "../../components/homePageMenu";

const Home = () => {
  const user = useRecoilValue(userState);
  const [homeIcon, setHomeIcon] = useRecoilState(homeIconState);
  useEffect(() => {
    setHomeIcon(true);
  }, []);
  return (
    <Auth>
      <HomeHeader />
      <div
        style={{
          display: "flex",
        }}
      >
        <HomePageMneu />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <div
            style={{
              width: "80%",
              marginBottom: 50,
            }}
          >
            <FacebookReactPost />
          </div>
          <FacebookPost />
        </div>
      </div>
    </Auth>
  );
};

export default Home;
