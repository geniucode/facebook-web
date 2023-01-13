import { useRecoilState, useRecoilValue } from "recoil";
import { homeIconState } from "../../atoms/home-icon";
import { postsInformationState } from "../../atoms/postsInformation";
import { userState } from "../../atoms/user";
import { getAxios } from "../../service/axios";
import { timeByMoment } from "../../service/timeByMoment";
const useHome = () => {
  const [homeIcon, setHomeIcon] = useRecoilState(homeIconState);
  const [postsInformation, setPostsInformation] = useRecoilState(
    postsInformationState
  );

  const getAxiosGetAllPosts = async () => {
    const response = await getAxios("facebook-post/get-all-posts", {});
    const postsInformationFromDb = await response?.posts?.map((item) => {
      return {
        createdByName: item?.createdBy?.name,
        postBody: item?.postBody,
        createdAt: timeByMoment(item.createdAt),
        postImg: item?.postImg,
        createdBy: item?.createdBy?._id,
        userName: item?.createdBy?.name,
      };
    });

    setPostsInformation(postsInformationFromDb);
  };
  return {
    setHomeIcon,
    getAxiosGetAllPosts,
  };
};
export { useHome };
