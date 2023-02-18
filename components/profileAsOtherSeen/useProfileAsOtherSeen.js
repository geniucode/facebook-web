import { useState } from "react";
import { useRouter } from "next/router";
import { getAxios } from "../../service/axios";
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
  const [userpostsFromDb, setUserpostsFromDb] = useState([]);
  const [userFromUrl, setUserFromUrl] = useState();
  const [userIdFromUrl, setIdUserFromUrl] = useState();
  const router = useRouter();
  const [menuItemState, setmenuItemState] = useState("Post");


  const [snackMsg, setSnackMsg] = useState(null);
  const getUserByUrlID = async (id) => {
    const response = await getAxios(`user/by-id?id=${id}`);
    if (response?.success) {
      console.log(response.userFound.name);
      console.log(response.userFound._id);
      setUserFromUrl(response.userFound.name);
      setIdUserFromUrl(response.userFound._id);
    }
  };

  const getAxiosAllUserPostsByHisId = async (id) => {
    const responsea = await getAxios(`user/posts/by-id?id=${id}`);
    if (responsea?.success) {
      const userpostsInformationFromDb = await responsea?.userPosts?.map(
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

            // userName: item?.createdBy?.name,
          };
        }
      );
      setUserpostsFromDb(userpostsInformationFromDb);
    }
  };
  return {
    menuItems,
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

export { useProfileAsOtherSeen };
