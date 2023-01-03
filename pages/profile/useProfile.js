import { useState } from "react";
import { useRouter } from "next/router";
import { userState } from "../../atoms/user";
import { getAxios } from "../../service/axios";
import { useRecoilState } from "recoil";
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
  const [userIdFromUrl, setIdUserFromUrl] = useState();
  const router = useRouter();
  const [userpostsFromDb, setUserpostsFromDb] = useState([]);
  const [menuItemState, setmenuItemState] = useState("Post");
  const getUserByUrlID = async (id) => {
    const response = await getAxios(`user/by-id?id=${id}`);
    if (response?.success) {
      setUserFromUrl(response.userFound.name);
      setIdUserFromUrl(response.userFound._id);
    }
  };
  const getAxiosAllUserPostsByHisId = async (id) => {
    const responsea = await getAxios(`user/posts/by-id?id=${id}`);
    if (responsea?.success) {
      const userpostsInformationFromDb = await responsea?.userPosts?.map(
        (item) => {
          return [
            userFromUrl,
            item.postBody,
            timeByMoment(item.createdAt),
            item.postImg,
            userIdFromUrl,
          ];
        }
      );
      setUserpostsFromDb(userpostsInformationFromDb);
    }
  };

  return {
    menuItems,
    user,
    userFromUrl,
    userIdFromUrl,
    router,
    menuItemState,
    userpostsFromDb,
    setUserFromUrl,
    setmenuItemState,
    getUserByUrlID,
    getAxiosAllUserPostsByHisId,
  };
};

export { useProfile };
