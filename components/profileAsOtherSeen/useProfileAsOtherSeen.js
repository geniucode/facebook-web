import { useState } from "react";
import { useRouter } from "next/router";
import { userState } from "../../atoms/user";
import { getAxios } from "../../service/axios";
import { useRecoilState } from "recoil";
import { timeByMoment } from "../../service/timeByMoment";

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
  const [userpostsFromDb, setUserpostsFromDb] = useState([]);
  const [userFromUrl, setUserFromUrl] = useState();
  const [, setIdUserFromUrl] = useState();
  const router = useRouter();
  const [menuItemState, setmenuItemState] = useState("Post");
  const getUserByUrlID = async (id) => {
    const response = await getAxios(`user/by-id?id=${id}`);
    if (response?.success) {
      setUserFromUrl(response.userFound.name);
      setIdUserFromUrl(response.userFound._id);
    }
  };
  const getAxiosAllUserPostsByHisId = async (id) => {
    const response = await getAxios(`user/posts/by-id?id=${id}`);
    if (response?.success) {
      const userpostsInformationFromDb = await response?.userPosts?.map(
        (item) => {
          return {
            createdByName: item?.createdBy?.name,
            createdBy: item?.createdBy?._id,
            postBody: item?.postBody,
            postImg: item?.postImg,
            createdAt: timeByMoment(item.createdAt),
            postId: item?._id,
          };
        }
      );
      setUserpostsFromDb(userpostsInformationFromDb);
    }
  };
  return {
    user,
    menuItems,
    userFromUrl,
    router,
    menuItemState,
    userpostsFromDb,
    setmenuItemState,
    getUserByUrlID,
    getAxiosAllUserPostsByHisId,
  };
};

export { useProfileAsOtherSeen };
