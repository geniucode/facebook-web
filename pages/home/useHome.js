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
        username: item.user.name,
        postBody: item.postBody,
        createdAt: timeByMoment(item.createdAt),
        postImg: item.postImg,
        userId: item.user._id,
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
