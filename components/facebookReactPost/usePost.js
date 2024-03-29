import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { postsInformationState } from "../../atoms/postsInformation";
import { postButtonState } from "../../atoms/urlImage";
import { userState } from "../../atoms/user";
import { postAxios, postWithImageAxios } from "../../service/axios";

const usePost = () => {
  const [snackMsg, setSnackMsg] = useState(null);
  const [postBody, setPostBody] = useState("");
  const [postImg, setPostImg] = useState("");
  const [postsInformation, setPostsInformation] = useRecoilState(
    postsInformationState
  );
  const [file, setFile] = useState("");
  const uploadRef = useRef();
  const [button, setButton] = useRecoilState(postButtonState);
  const [postField, setPostField] = useState("");
  const user = useRecoilValue(userState);
  const [userIdFromurl, setUserIdFromurl] = useState(user._id);
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [feeling, setFeeling] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isPendingUser = useRecoilValue(userState).pending;

  const router = useRouter();
  useEffect(() => {
    let id = router.query["id"];
    if (id) {
      setUserIdFromurl(id);
    }
  }, [router]);

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

  const onClickRemoveFeeling = (event) => {
    setFeeling("");
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
    setButton(false);
    try {
      setIsLoading(true);
      let url = "";
      if (file) {
        const response = await postWithImageAxios("upload", {
          file: file,
        });
        url = response.url;
      }

      if (url != "" || postBody != "") {
        let res = await postAxios("facebook-post/add-post", {
          createdBy: user._id,
          sharedBy: user._id,
          user: userIdFromurl,
          postBody: postBody,
          postImg: url,
          feeling,
        });
        setFeeling("");
        msg = res?.message;
        setIsLoading(false);
        setButton(true);
        setPostField("");
        setPostBody("");
        setFile("");
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

  useEffect(() => {}, [open, search]);

  useEffect(() => {
    handleClose();
  }, [feeling]);

  return {
    snackMsg,
    uploadRef,
    postField,
    open,
    feeling,
    search,
    isLoading,
    isPendingUser,
    onChangePost,
    onClickAddPost,
    setSnackMsg,
    handleUploadFile,
    handleOpen,
    handleClose,
    onClickChangeFeeling,
    onClickRemoveFeeling,
    onChangeSearchValue,
  };
};

export { usePost };
