import Image from "next/image";
import styles from "../../styles/facebookPosts.module.css";
import Public from "../facebookPost/svg/public.js";
import Dots from "../facebookPost/svg/Dots.js";
import ReactsPopup from "./ReactsPopup";
import profilePicture from "../facebookPost/images/tempImages/profilePic.png";
import { useState } from "react";
import { postsInformationState } from "../../atoms/postsInformation";
import { useRecoilState } from "recoil";

const FacebookPost = () => {
  const [visible, setVisible] = useState(false);
  const [postsInformation, setPostsInformation] = useRecoilState(
    postsInformationState
  );

  return (
    <>
      {postsInformation?.map((item) => {
        return (
          <div className={styles.postsBlock}>
            <div className={styles.posts}>
              <div className={styles.post}>
                <div className={styles.postHeader}>
                  <div className={styles.postHeaderLeft}>
                    <Image src={profilePicture} alt="profilePic" />
                    <div className={styles.header_col}>
                      <div className={styles.postProfileName}>
                        {`${item[0].userName}`}
                        <div className={styles.updatedP}></div>
                      </div>
                      <div className={styles.postProfilePrivacyDate}>
                        {`${item[2].timeByMoment} . `}
                        <Public color="#828387" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.dotHover}>
                    <Dots color="#828387" />
                  </div>
                </div>
                <div className={styles.postText}>{`${item[1].postBody}`}</div>
                {item[3].src != "" && (
                  <div className={styles.postImage}>
                    {console.log(split["/"].item[3].src.at(-1))}
                    <Image
                      src={`https://storage.googleapis.com/mern-facebook-bucket/imagekit.PNG`}
                      width="2000"
                      height="2000"
                      responsive
                      contain
                      alt="profilePic"
                    />
                  </div>
                )}
                <div className={styles.post_infos}>
                  <div className={styles.reacts_count}>
                    <div className={styles.reacts_count_imgs}></div>
                    <div className={styles.reacts_count_num}></div>
                  </div>
                  <div className={styles.to_right}>
                    <div className={styles.comments_count}>65 comments</div>
                    <div className={styles.share_count}>37 share</div>
                  </div>
                </div>
                <div className={styles.post_actions}>
                  <ReactsPopup visible={visible} setVisible={setVisible} />
                  <div
                    className={styles.post_action}
                    onMouseOver={() => {
                      setTimeout(() => {
                        setVisible(true);
                      }, 500);
                    }}
                    onMouseLeave={() => {
                      setTimeout(() => {
                        setVisible(false);
                      }, 500);
                    }}
                  >
                    <i className={styles.like_icon}></i>
                    <span>Like</span>
                  </div>
                  <div className={styles.post_action}>
                    <i className={styles.comment_icon}></i>
                    <span>Comment</span>
                  </div>
                  <div className={styles.post_action}>
                    <i className={styles.share_icon}></i>
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export { FacebookPost };
