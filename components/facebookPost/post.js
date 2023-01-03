import Image from "next/image";
import styles from "../../styles/facebookPosts.module.css";
import Public from "../facebookPost/svg/public.js";
import ReactsPopup from "./ReactsPopup";
import profilePicture from "../facebookPost/images/tempImages/profilePic.png";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useGoToProfilePage } from "../../generalHooks/goToProfilePage";
import { useRouter } from "next/router";
import SaveEditDeleteMenu from "../saveEditDeleteMenu/index.tsx";
import { userState } from "../../atoms/user";

const FacebookPostComp = ({ postData }) => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);
  //   const myLoader = ({ src, width, quality }) => {
  //     return `${src}?w=${0}&q=${100}`;
  //   };
  const username = postData[0];
  const postBody = postData[1];
  const creadtedAt = postData[2];
  const postImg = postData[3];
  const userId = postData[4];

  const url = postImg;
  let srcURL = url.split("/");
  const src = "images-from-nodejs-server" + "/" + srcURL.at(-1);
  const onClickToGoToProfilePage = useGoToProfilePage(userId);

  return (
    <>
      <div className={styles.postsBlock}>
        <div className={styles.posts}>
          <div className={styles.post}>
            <div className={styles.postHeader}>
              <div
                className={styles.postHeaderLeft}
                onClick={
                  () => {
                    router.push({
                      pathname: "/profile",
                      query: { id: userId },
                    });
                  }
                  // onClickToGoToProfilePage(userId)
                }
              >
                <Image src={profilePicture} alt="profilePic" />
                <div className={styles.header_col}>
                  <div className={styles.postProfileName}>
                    {`${username}`}
                    <div className={styles.updatedP}></div>
                  </div>
                  <div className={styles.postProfilePrivacyDate}>
                    {`${creadtedAt}`}
                    <span style={{ marginLeft: "5px" }}></span>
                    <Public color="#828387" />
                  </div>
                </div>
              </div>
              <div className={styles.dotHover}>
                <SaveEditDeleteMenu userId={userId} postUserId={user._id} />
              </div>
            </div>
            <div className={styles.postText}>{postBody}</div>

            {src != "" && ( //if src not empty return image
              <div className={styles.postImage}>
                <Image
                  //   loader={myLoader}
                  src={`https://storage.googleapis.com/${src}`}
                  fill
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
    </>
  );
};
export { FacebookPostComp };
