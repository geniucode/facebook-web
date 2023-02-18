import { useState } from "react";
import { userState } from "../../atoms/user.js";
import { useRecoilValue } from "recoil";
import { postAxios } from "../../service/axios.js";

const useComment = () => {
  const [snackMsg, setSnackMsg] = useState(null);
  const user = useRecoilValue(userState);
  const [Im, setIm] = useState(user._id);
  const [comment, setComment] = useState("");

  const onChangeComment = (event) => {
    const value = event.target.value;
    setComment(value);
  };

  const onClickAddComment = async (postId) => {
    let msg = null;
    try {
      let res = await postAxios("add-comment", {
        comment: comment,
        postId: postId,
        userId: Im,
      });
      if (res) {
        msg = "Comment added successfully";
      }
      setComment("");
    } catch (error) {
      const errors = error.response?.data?.errors?.map((error) => error.param);
      if (errors) {
        msg = `${errors}`;
        console.log(errors);
        if (errors.includes("comment")) {
          setComment({ value: "", accepted: false });
        }
      }
    }
    setSnackMsg(msg);
  };
  return {
    onChangeComment,
    onClickAddComment,
    setSnackMsg,
    snackMsg,
    comment,
  };
};

export { useComment };
