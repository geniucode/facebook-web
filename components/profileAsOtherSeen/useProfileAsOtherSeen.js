import { useState } from "react";
import { useRouter } from "next/router";
import { userState } from "../../atoms/user";
import { getAxios } from "../../service/axios";
import { useRecoilState } from "recoil";

const useProfileAsOtherSeen = () => {
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
  const [userIdFromUrl, setIdUserFromUrl] = useState();
  const router = useRouter();
  const [menuItemState, setmenuItemState] = useState("Post");
  const getUserByUrlID = async (id) => {
    const response = await getAxios(`user/by-id?id=${id}`);
    if (response?.success) {
      console.log(response.userFound.name);
      setUserFromUrl(response.userFound.name);
      setIdUserFromUrl(response.userFound._id);
    }
  };
  return {
    menuItems,
    user,
    userFromUrl,
    userIdFromUrl,
    setUserFromUrl,
    router,
    menuItemState,
    setmenuItemState,
    getUserByUrlID,
  };
};

export { useProfileAsOtherSeen };
