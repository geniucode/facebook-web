import { useState } from "react";
import { useRecoilValue } from "recoil";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";
import { userState } from "../../atoms/user";
import { postAxios, postWithImageAxios } from "../../service/axios";
import styles from "../../styles/uploadPage.module.css";
import { Auth } from "../../components/auth";

const Upload = () => {
  const [progressPercent, setProgressPercent] = useState(0);
  const user = useRecoilValue(userState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("username:", user.name);
    const file = e.target[0]?.files[0];

    if (!file) return null;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgressPercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        e.target[0].value = "";
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            const response = await postAxios("facebook-post/add-image", {
              user: user._id,
              postBody: "example",
              postImg: downloadURL,
            });
            //3- Retreive promise result (response)
            console.log(response);
          } catch (err) {
            console.log("err", err);
            console.log("response", response?.message);
          }
        });
      }
    );
  };
  return (
    <Auth>
      <div className={styles.upload} name="upload_file" onSubmit={handleSubmit}>
        <form className={styles.uploadForm}>
          <input type="file" />
          <button type="submit">Upload</button>
        </form>
        <progress value={progressPercent} max="100" />
      </div>
    </Auth>
  );
};

export default Upload;
