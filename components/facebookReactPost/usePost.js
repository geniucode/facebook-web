import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { postButtonState, urlImageState } from "../../atoms/urlImage";
import { postAxios, postWithImageAxios } from "../../service/axios";

const usePost = () => {
  const [snackMsg, setSnackMsg] = useState(null);
  const [postBody, setPostBody] = useState("");
  const [postImg, setPostImg] = useState("");
  const [file, setFile] = useState("");
  const uploadRef = useRef();
  const [url, setUrl] = useState("");
  const [button, setButton] = useRecoilState(postButtonState);
  const [postField, setPostField] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [feeling, setFeeling] = useState("");

  const onChangeSearchValue = (event) => {
    setSearch(event.target.value);
  };

  const onClickChangeFeeling = (event) => {
    if (event.target.childNodes?.length === 2) {
      setFeeling(event.target.childNodes[1].data);
    } else if (event.target.childNodes?.length === 1) {
      setFeeling(event.target.nextSibling.data);
    } else {
      setFeeling(event.target.parentElement?.nextSibling.data);
    }
  };

  const handleOpen = () => {
    setOpen(true);
    setSearch("");
  };

  const handleClose = () => setOpen(false);

  const handleUploadFile = (event) => {
    setFile(event.target.files[0]);
    handleClose();
    console.log("file", event.target.files[0]);
  };

  const onChangePost = (event) => {
    const value = event.target.value;
    setPostBody(value);
    setPostField(event.target.value);
  };

  const onClickAddPost = async () => {
    let msg = null;

    try {
      let url = "";
      if (file) {
        const response = await postWithImageAxios("upload", {
          file: file,
        });
        url = response.url;
      }
      console.log("inside post ", feeling);
      let res = await postAxios("facebook-post/add-post", {
        postBody: postBody,
        postImg: url,
        feeling,
      });
      console.log("url:", url);
      setFeeling("");
      if (res) {
        msg = "Post Added Successfully";
      }
      setButton(true);
      setPostField("");
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

  useEffect(() => {}, [open, search]);

  useEffect(() => {
    handleClose();
    console.log(feeling);
  }, [feeling]);

  return {
    onChangePost,
    onClickAddPost,
    snackMsg,
    setSnackMsg,
    handleUploadFile,
    uploadRef,
    postField,
    open,
    handleOpen,
    handleClose,
    onClickChangeFeeling,
    search,
    onChangeSearchValue,
  };
};

export { usePost };
