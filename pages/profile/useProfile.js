import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { homeIconState } from "../../atoms/home-icon";
import { postsInformationState } from "../../atoms/postsInformation";
import { urlImageState } from "../../atoms/urlImage";
import { userState } from "../../atoms/user";
import { getAxios } from "../../service/axios";
import { timeByMoment } from "../../service/timeByMoment";
const useProfile = () => {
  const menuItems = [
    "Post",
    "About",
    "Friends",
    "Photos",
    "Videos",
    "Check-ins",
  ];
  const [user] = useRecoilState(userState);
  const [userFromUrl, setUserFromUrl] = useState();
  const router = useRouter();
  const [menuItemState, setmenuItemState] = useState("Post");
  const getUserByUrlID = async (id) => {
    const response = await getAxios(`user/by-id?id=${id}`);
    if (response?.success) {
      console.log(response.userFound.name);
      setUserFromUrl(response.userFound.name);
    }
  };
  return {
    menuItems,
    user,
    userFromUrl,
    setUserFromUrl,
    router,
    menuItemState,
    setmenuItemState,
    getUserByUrlID,
  };
};

export { useProfile };