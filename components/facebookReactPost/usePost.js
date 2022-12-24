import { useEffect, useState } from "react";
import { postAxios } from "../../service/axios";

const usePost = () => {
  const [snackMsg, setSnackMsg] = useState(null);
  const [postBody, setPostBody] = useState("");
  const [postImg, setPostImg] = useState("");
  const [file, setFile] = useState([]);
  const [isFileSelected, setisFileSelected] = useState(false);

  const onChangeInputFile = async (e) => {
    setFile([e.target.files[0]]);
    setisFileSelected(true);
  };

  const onChangePost = (event) => {
    setPostBody(event.target.value);
  };
  const onClickAddPost = async () => {
    let msg = null;
    try {
      // let srcURL = url.split("/");
      // src = "mern-facebook-bucket" + "/" + srcURL.at(-1);
      if (isFileSelected) {
        const response = await postWithImageAxios("upload", {
          file: file,
        });
        console.log(response);
        // setUrl(response.url);
        console.log("file is: ", file);
        setFile();
        setisFileSelected(false);
      }

      let res = await postAxios("facebook-post/add-post", {
        postBody: postBody,
        postImg: postImg,
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
          setPostBody({ value: "", accepted: false });
        }
        if (errors.includes("postImg")) {
          setPostImg({ value: "", accepted: false });
        }
      }
    }
    setSnackMsg(msg);
  };
  return {
    file,
    onChangePost,
    onClickAddPost,
    onChangeInputFile,
    snackMsg,
    setSnackMsg,
  };
};

export { usePost };
