import { useEffect } from "react";
import { FacebookPost } from "../../components/facebookPost/index.js";
import { FacebookReactPost } from "../../components/facebookReactPost/index.js";
import { Auth } from "../../components/auth";
import HomeHeader from "../../components/homeHeader";
import { HomePageMneu } from "../../components/homePageMenu";
import {  useHome } from "./useHome.js";
import { postsInformationState } from "../../atoms/postsInformation.js";
import { useRecoilState } from "recoil";

const Home = () => {
  const {  setHomeIcon,getAxiosGetAllPosts} = useHome();
  const [postsInformation,setPostsInformation]=useRecoilState(postsInformationState)
  useEffect(() => {
    getAxiosGetAllPosts(),
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
