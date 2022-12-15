import Head from "next/head";
import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../service/firebase";
import { v4 } from "uuid";
import { HomePageMneu } from "../../components/homePageMenu";
import { Auth } from "../../components/auth";
// import styles from "../../styles/upload.module.css";

const UploadImage = () => {
  const [imageUpload, setImageUpload] = useState(null);
  //I will add a hook with the functions and states and returns later on
  //I will add the styles in a seperate page later on

  const onClickUploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      setImageUpload(null);
      console.log(imageRef.fullPath);
    });
  };

  return (
    <Auth>
      <Head>
        <title>Upload Image</title>
      </Head>
      <div style={{ display: "flex" }}>
        <HomePageMneu />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "15px",
            gap: "10px",
          }}
        >
          <input
            type="file"
            onChange={(e) => {
              setImageUpload(e.target.files[0]);
            }}
          />
          <button onClick={onClickUploadImage}>Upload Image</button>
        </div>
      </div>
    </Auth>
  );
};

export default UploadImage;
