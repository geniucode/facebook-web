import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useState } from "react";

import { timeByMoment } from "../../service/timeByMoment";
import { userState } from "../../atoms/user";
import { getAxios } from "../../service/axios";

const useProfile = () => {
  const menuItems = [
    "Posts",
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
  const [userpostsFromDb, setUserpostsFromDb] = useState();
  const [snackMsg, setSnackMsg] = useState(null);
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
            createdById: item?.createdBy?._id,
            postUserName: item?.user?.name,
            postUserId: item?.user?._id,
            sharedByName: item?.sharedBy?.name,
            sharedById: item.sharedBy?._id,
            postBody: item?.postBody,
            postImg: item?.postImg,
            createdAt: timeByMoment(item.createdAt),
            postId: item?._id,
            shareNumber: item?.shareNumber,
            isCopy: item?.isCopy,
          };
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
    snackMsg,
    setSnackMsg,
    setUserFromUrl,
    setmenuItemState,
    getUserByUrlID,
    getAxiosAllUserPostsByHisId,
  };
};

export { useProfile };
