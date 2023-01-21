import { useRecoilState } from "recoil";
import { postAxios } from "../../service/axios";
import { userState } from "../../atoms/user";
import { useState } from "react";
import { ShareButtonState } from "../../atoms/shareButton";

const usePost = (postData) => {
  const [user, setUser] = useRecoilState(userState);
  const [shareButton, setShareButton] = useRecoilState(ShareButtonState);
  const [snackMsg, setSnackMsg] = useState(null);
  const onClickShare = async () => {
    postData?.url != null ? (postImg = postData?.url) : (postImg = "");
    setShareButton(false);
    await postAxios("facebook-post/add-post", {
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
    setShareButton(true);
  };

  return {
    snackMsg,
    setSnackMsg,
    onClickShare,
  };
};

export { usePost };
