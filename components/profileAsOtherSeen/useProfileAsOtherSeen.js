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
  const getAxiosAllUserPostsByHisId = async (id) => {
    const responsea = await getAxios(`user/posts/by-id?id=${id}`);
    if (responsea?.success) {
      const userpostsInformationFromDb = await responsea?.userPosts?.map(
        (item) => {
          return {
            createdByName: item?.createdBy?.name,
            createdBy: item?.createdBy?._id,
            postBody: item?.postBody,
            postImg: item?.postImg,
            createdAt: timeByMoment(item.createdAt),
            postId: item?._id,

            // userName: item?.createdBy?.name,
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
    setUserFromUrl,
    setmenuItemState,
    getUserByUrlID,
    getAxiosAllUserPostsByHisId,
  };
};

export { useProfileAsOtherSeen };
