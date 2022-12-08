import { useRecoilValue ,useRecoilState} from "recoil";
import { homeIconState } from "../../atoms/home-icon";
import { userState } from "../../atoms/user";
import { Auth } from "../../components/auth";
import { HomePageMneu } from "../../components/homePageMenu";
import { useEffect, useState } from "react";

const Home = () => {
  const user = useRecoilValue(userState);
  const [homeIcon,setHomeIcon]=useRecoilState(homeIconState)
  useEffect(()=>{
    setHomeIcon(true)
  },[])

  return <Auth> </Auth>;
};

export default Home;
