import styles from "../../styles/commentBar.module.css";
import Image from "next/image";
import profilePic from "./../facebookReactPost/images/profilePic.jpg";
import { userState } from "../../atoms/user.js";
import { useRecoilState } from "recoil";
import { useComment } from "./useComment.js";
import { FbSnackBar } from "../snackBar";

const CommentBar = ({ postId, postData }) => {
  const [user, setUser] = useRecoilState(userState);
  const { onChangeComment, onClickAddComment, setSnackMsg, snackMsg, comment } =
    useComment();

  return (
    <div className={styles.post}>
      <div className={styles.commentPost}>
        <div className={styles.profilePic}>
          <Image
            src={user.profilePic ?? profilePic}
            alt="Profile picture"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.postField}>
          <input
            type="text"
            value={comment}
            onChange={onChangeComment}
            placeholder="Write a comment..."
          />
        </div>
        <div className={styles.postButton}>
          <button onClick={() => onClickAddComment(postId)}>Post</button>
          {snackMsg && (
            <FbSnackBar
              message={snackMsg}
              open={snackMsg && true}
              setOpen={() => setSnackMsg(null)}
              autoHideDuration={5000}
            />
          )}
        </div>
      </div>
      <div className={styles.usersComments}>
        <div className={styles.profilePic}>
          <Image
            src={user.profilePic ?? profilePic}
            alt="Profile picture"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.commentText}></div>
      </div>
    </div>
  );
};

export { CommentBar };
