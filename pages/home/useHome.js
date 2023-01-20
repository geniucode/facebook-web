import { useRecoilState, useRecoilValue } from "recoil";
import { homeIconState } from "../../atoms/home-icon";
import { postsInformationState } from "../../atoms/postsInformation";
import { userState } from "../../atoms/user";
import { getAxios } from "../../service/axios";
import { timeByMoment } from "../../service/timeByMoment";
const useHome = () => {
  const user = useRecoilValue(userState);
  const [homeIcon, setHomeIcon] = useRecoilState(homeIconState);
  const [postsInformation, setPostsInformation] = useRecoilState(
    postsInformationState
  );

  const getAxiosGetAllPosts = async () => {
    const response = await getAxios("facebook-post/get-all-posts", {});
    const postsInformationFromDb = await response?.posts?.map((item) => {
      return {
        createdByName: item?.createdBy?.name,
        createdBy: item?.createdBy?._id,
        postBody: item?.postBody,
        postImg: item?.postImg,
        createdAt: timeByMoment(item.createdAt),
        postId: item?._id,

        // userName: item?.createdBy?.name,
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
