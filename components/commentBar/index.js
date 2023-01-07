import styles from "../../styles/commentBar.module.css";
import Image from "next/image";
import profilePic from "./../facebookReactPost/images/profilePic.jpg";
import { userState } from "../../atoms/user.js";
import { useRecoilState } from "recoil";

const CommentBar = () => {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div className={styles.post}>
      <div className={styles.profilePic}>
        <Image src={user.profilePic ?? profilePic} alt="Profile picture" />
      </div>
      <div className={styles.postField}>
        <input
          type="text"
          onChange=""
          placeholder="Write a comment..."
          //   value={postField}
        />
      </div>
      <div className={styles.postButton}>
        <button onClick="">Post</button>
      </div>
    </div>
  );
};

export { CommentBar };
