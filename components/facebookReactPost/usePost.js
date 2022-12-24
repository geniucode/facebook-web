import { useEffect, useState } from "react";
import { postWithImageAxios, postAxios } from "../../service/axios";

const usePost = () => {
  const [snackMsg, setSnackMsg] = useState(null);
  const [postBody, setPostBody] = useState("");
  const [postImg, setPostImg] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [isFileSelected, setisFileSelected] = useState(false);

  useEffect(() => {
    console.log("file is changing: ", selectedFile);
  }, [selectedFile]);

  const onInputFile = async (e) => {
    setSelectedFile(e.target.files[0]);
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
          file: selectedFile,
        });
        console.log(response);
        setSelectedFile();
        setisFileSelected(false);
        let res = await postAxios("facebook-post/add-post", {
          postBody: postBody,
          postImg: response.url,
        });
      } else {
        let res = await postAxios("facebook-post/add-post", {
          postBody: postBody,
          postImg: "",
        });

        if (res) {
          msg = "Post Added Successfully";
        }
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
    selectedFile,
    onChangePost,
    onClickAddPost,
    onInputFile,
    snackMsg,
    setSnackMsg,
  };
};

export { usePost };
