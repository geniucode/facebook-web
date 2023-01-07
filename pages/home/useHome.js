import { useRecoilState, useRecoilValue } from "recoil";
import { homeIconState } from "../../atoms/home-icon";
import { postsInformationState } from "../../atoms/postsInformation";
import { urlImageState } from "../../atoms/urlImage";
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
      return [
        item.user.name,
        item.postBody,
        timeByMoment(item.createdAt),
        item.postImg,
        item.user.profilePic,
      ];
    });

    setPostsInformation(postsInformationFromDb);
  };
  return {
    setHomeIcon,
    getAxiosGetAllPosts,
  };
};
export { useHome };
