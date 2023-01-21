import { useRecoilState } from "recoil";
import { postAxios } from "../../service/axios";
import { userState } from "../../atoms/user";
import { useState } from "react";

const usePost = (postData) => {
  const [user, setUser] = useRecoilState(userState);
  const [snackMsg, setSnackMsg] = useState(null);
  const onClickShare = async () => {
    let postImg = "";
    postData?.url != null ? (postImg = postData?.url) : (postImg = "");
    await postAxios("facebook-post/add-post", {
      //   createdBy: postData?.createdBy,
      createdBy: postData.createdById,
      sharedBy: user._id,
      user: user._id,
      postBody: postData?.postBody,
      postImg: postData.postImg,
      isCopy: true,
    });
    await postAxios("facebook-post/update-post-by-id", {
      _id: postData.postId,
      shareNumber: postData.shareNumber + 1,
    });
    setSnackMsg("Shared successfully");
  };

  return {
    snackMsg,
    setSnackMsg,
    onClickShare,
  };
};

export { usePost };
