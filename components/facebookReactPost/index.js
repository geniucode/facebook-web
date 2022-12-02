import styles from "../../styles/facebookReactPost.module.css";
import Image from "next/image";
import profilePic from "./images/profilePic.jpg";
import liveVideo from "./images/liveVideo.jpg";
import photoVideo from "./images/photoVideo.png";
import feelingActivity from "./images/feelingActivity.png";

const FacebookReactPost = () => {
  return (
    <>
      <div className={styles.fbPost}>
        <div className={styles.post}>
          <div className={styles.profilePic}>
            <Image src={profilePic} alt="Profile picture" />
          </div>
          <div className={styles.postField}>
            <input type="text" placeholder="What's on your mind?" />
          </div>
        </div>
        <div className={styles.reactButtons}>
          <div className={styles.liveVideo}>
            <button>
              <Image src={liveVideo} />
              <span>Live Video</span>
            </button>
          </div>
          <div className={styles.photoVideo}>
            <button>
              <Image src={photoVideo} />
              <span>Photo/video</span>
            </button>
          </div>
          <div className={styles.feelingActivity}>
            <button>
              <Image src={feelingActivity} />
              <span>Feeling/activity</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { FacebookReactPost };
