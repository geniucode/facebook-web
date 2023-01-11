import styles from "../../styles/facebookReactPost.module.css";
import Image from "next/image";
import profilePic from "./images/profilePic.jpg";
import { usePost } from "./usePost.js";
import { FbSnackBar } from "../snackBar";
import FeelingActivityModal from "./feelingActivityModal.js";

const FacebookReactPost = () => {
  const {
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
  } = usePost();
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
            <div className={styles.photoVideo}>
              <button
                onClick={() => {
                  uploadRef.current.click();
                }}
              >
                <div className={styles.photoVideoIcon}></div>
                <span>Photo/video</span>
                <input
                  className={styles.PhotoInput}
                  type="file"
                  onChange={handleUploadFile}
                  hidden
                  ref={uploadRef}
                />
              </button>
            </div>
            <div className={styles.feelingActivity}>
              <button onClick={handleOpen}>
                <div className={styles.feelingActivityIcon}></div>
                <span>Feeling/activity</span>
              </button>
            </div>
          </div>
        </div>
        <FeelingActivityModal
          open={open}
          handleClose={handleClose}
          onClickChangeFeeling={onClickChangeFeeling}
          search={search}
          onChangeSearchValue={onChangeSearchValue}
        />
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
