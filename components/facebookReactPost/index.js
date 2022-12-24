import { useRef } from "react";
import Image from "next/image";
import { usePost } from "./usePost.js";
import profilePic from "./images/profilePic.jpg";
import { FbSnackBar } from "../snackBar";
import styles from "../../styles/facebookReactPost.module.css";

const FacebookReactPost = () => {
  const {
    selectedfile,
    onChangePost,
    onInputFile,
    onClickAddPost,
    snackMsg,
    setSnackMsg,
  } = usePost();

  const uploadImageRef = useRef();

  return (
    <>
      <div className={styles.fbPost}>
        <div className={styles.post}>
          <div className={styles.profilePic}>
            <Image src={profilePic} alt="Profile picture" />
          </div>
          <div className={styles.postField}>
            <input
              type="text"
              onChange={onChangePost}
              placeholder="What's on your mind?"
            />
          </div>
          <div className={styles.postButton}>
            <button onClick={onClickAddPost}>Post</button>
          </div>
        </div>
        <div className={styles.reactButtons}>
          <div className={styles.liveVideo}>
            <button>
              <span>Live Video</span>
            </button>
          </div>
          <div className={styles.photoVideo}>
            <button
              onClick={() => {
                uploadImageRef.current.click();
              }}
            >
              <span>Photo/video</span>
              <input
                type="file"
                hidden
                ref={uploadImageRef}
                onInput={onInputFile}
              />
            </button>
          </div>
          <div className={styles.feelingActivity}>
            <button>
              <span>Feeling/activity</span>
            </button>
          </div>
        </div>
      </div>
      {snackMsg && (
        <FbSnackBar
          message={snackMsg}
          open={snackMsg && true}
          setOpen={() => setSnackMsg(null)}
        />
      )}
    </>
  );
};

export { FacebookReactPost };
