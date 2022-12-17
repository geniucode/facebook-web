import { useState } from "react";
import { useRecoilValue } from "recoil";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { userState } from "../../atoms/user";
import { storage } from "../../service/firebase";
import { postAxios } from "../../service/axios";
// import { postWithImageAxios } from "../../service/axios";

const useUploadImage = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const user = useRecoilValue(userState);
  const onClickUploadImage = () => {
    if (imageUpload == null) return;
    const path = `images/${v4()}`;
    const imageRef = ref(storage, path);
    uploadBytes(imageRef, imageUpload).then(() => {
      setImageUpload(null);
      getDownloadURL(imageRef).then(async (url) => {
        try {
          // const response = await postWithImageAxios(
          const response = await postAxios(
            "facebook-post/add-post-with-image",
            {
              user: user._id,
              postBody: "test",
              postImg: url,
            }
          );
          if (!response.success) {
            console.log("response", response);
          } else {
            console.log("response", response);
          }
        } catch (error) {
          console.log(error);
        }
      });
    });
  };
  return {
    setImageUpload,
    onClickUploadImage,
  };
};

export { useUploadImage };
