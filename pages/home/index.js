import { useEffect } from "react";
import { FacebookPost } from "../../components/facebookPost/index.js";
import { FacebookReactPost } from "../../components/facebookReactPost/index.js";
import { Auth } from "../../components/auth";
import HomeHeader from "../../components/homeHeader";
import { HomePageMneu } from "../../components/homePageMenu";
import { useHome } from "./useHome.js";
import { postsInformationState } from "../../atoms/postsInformation.js";
import { useRecoilState } from "recoil";
import { postButtonState, urlImageState } from "../../atoms/urlImage.js";
import { ShareButtonState } from "../../atoms/shareButton.js";

const Home = () => {
  const { setHomeIcon, getAxiosGetAllPosts } = useHome();
  const [postsInformation, setPostsInformation] = useRecoilState(
    postsInformationState
  );
  const [button, setButton] = useRecoilState(postButtonState);
  const [shareButton, setShareButton] = useRecoilState(ShareButtonState);
  useEffect(() => {
    getAxiosGetAllPosts();
  }, [button, shareButton]);

  useEffect(() => {
    getAxiosGetAllPosts(), setHomeIcon(true);
  }, []);
  // useEffect(() => {
  //   getAxiosGetAllPosts();
  // }, [postsInformation]);
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
            height: "fit-content",
            marginTop: 25,
          }}
        >
          <div
            style={{
              width: "80%",
              height: "fit-content",
              marginBottom: 10,
            }}
          >
            <FacebookReactPost />
          </div>
          <FacebookPost postsInformation={postsInformation} />
        </div>
      </div>
    </Auth>
  );
};

export default Home;
