import { useEffect, useRef, useState } from "react";
import { postAxios, postWithImageAxios } from "../../service/axios";

const useCoverPhotoButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const uploadRef = useRef();
  const [file, setFile] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    setFile(event.target.files[0]);
    console.log("hello");
  };
  const uploadCoverImage = async () => {
    try {
      if (file) {
        console.log(file);
        const response = await postWithImageAxios("upload", {
          file: file,
        });
        const url = response.url;
        console.log("url:", url);
        const res = await postAxios("user/update-cover-photo", {
          coverPhoto: url,
        });
      } else {
        console.log("No cover photo");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    uploadCoverImage();
  }, [file]);

  return {
    open,
    anchorEl,
    uploadRef,
    handleClick,
    handleClose,
    handleChange,
  };
};

export { useCoverPhotoButton };
