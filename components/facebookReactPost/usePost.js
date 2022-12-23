import { useState, useEffect } from "react";
import { postAxios, postWithImageAxios } from "../../service/axios";

const usePost = () => {
  const [snackMsg, setSnackMsg] = useState(null);
  const [postBody, setPostBody] = useState("");
  const [postImg, setPostImg] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    console.log(file && `${file.name} - ${file.type}`);
  }, [file]);

  const onChangePost = (event) => {
    setPostBody(event.target.value);
  };
  const onClickAddPost = async () => {
    try {
      let imgUrl = "";
      if (file) {
        let uploadRes = await postWithImageAxios("upload", { file });
        imgUrl = uploadRes?.url ?? "";
      }

      let msg = null;

      let res = await postAxios("facebook-post/add-post", {
        postBody,
        postImg: imgUrl,
      });

      if (res) {
        msg = "Post Added Successfully";
      }
    } catch (error) {
      const errors = error.response?.data?.errors?.map((error) => error.param);
      if (errors) {
        msg = `${errors}`;
        console.log(errors);
        if (errors.includes("postBody")) {
          setPostBody("");
        }
        if (errors.includes("postImg")) {
          setPostImg("");
        }
      }
      setSnackMsg(msg);
    }
  };

  const onChangeHandleFile = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  return {
    onChangePost,
    onClickAddPost,
    snackMsg,
    setSnackMsg,
    postBody,
    onChangeHandleFile,
  };
};

export { usePost };
