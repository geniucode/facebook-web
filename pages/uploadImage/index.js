import Head from "next/head";
import { useUploadImage } from "./useUploadImage";
import { Auth } from "../../components/auth";
import { HomePageMneu } from "../../components/homePageMenu";
import styles from "../../styles/upload.module.css";

const UploadImage = () => {
  const { onClickUploadImage, setImageUpload } = useUploadImage();

  return (
    <Auth>
      <Head>
        <title>Upload Image</title>
      </Head>
      <div className={styles.bodyContainer}>
        <HomePageMneu />
        <div className={styles.uploadForm}>
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
