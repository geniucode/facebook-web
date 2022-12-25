import styles from "../../styles/facebookReactPost.module.css";
import Image from "next/image";
import profilePic from "./images/profilePic.jpg";
import { usePost } from "./usePost.js";
import { FbSnackBar } from "../snackBar";
import { style } from "@mui/system";

const FacebookReactPost = () => {
  const { onChangePost, onClickAddPost, snackMsg, setSnackMsg,handleUploadFile,uploadRef,postField } = usePost();
  return (
    <>
    <div className={styles.fbContainer}>
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
              value={postField}
             
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
            <button className={styles.kk} onClick={()=>{uploadRef.current.click()}}>
              <span >Photo/video</span>
              <input className={styles.PhotoInput} type="file" onChange={handleUploadFile} hidden ref={uploadRef}/>
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
      </div>
    </>
  );
};

export { FacebookReactPost };
