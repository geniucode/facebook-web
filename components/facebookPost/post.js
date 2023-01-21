import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import ReactsPopup from "./ReactsPopup";
import { useGoToProfilePage } from "../../generalHooks/goToProfilePage";
import SaveEditDeleteMenu from "../saveEditDeleteMenu/index.tsx";
import styles from "../../styles/facebookPosts.module.css";
import Public from "../facebookPost/svg/public.js";
import { userState } from "../../atoms/user";
import defaultProfilePic from "./../facebookReactPost/images/profilePic.jpg";
import { useRecoilState } from "recoil";
import { feelings } from "../facebookReactPost/feelings.js";
import { CommentBar } from "./../commentBar/index.js";
import { usePost } from "./usePost";
import { SharedPostComp } from "./sharedPost";
import { FbSnackBar } from "../snackBar";

const FacebookPostComp = ({ postData }) => {
  const { snackMsg, setSnackMsg, onClickShare } = usePost(postData);
  const { onClickToGoToProfilePage } = useGoToProfilePage();
  const [visible, setVisible] = useState(false);
  const [user] = useRecoilState(userState);
  const url = postData.postImg;
  const feeling = postData.feeling;

  const feelingImage =
    feeling?.length > 0 &&
    feelings.find((elem) => elem.feeling === feeling)?.image;
  const profilePic = postData?.user?.profilePic ?? defaultProfilePic;

  return (
    <>
      {postData?.isCopy == false ? (
        <div className={styles.postsBlock}>
          <div className={styles.posts}>
            <div className={styles.post}>
              <div className={styles.postHeader}>
                <div
                  className={styles.postHeaderLeft}
                  onClick={() => onClickToGoToProfilePage(postData.createdById)}
                >
                  <Image
                    src={profilePic}
                    alt="profilePic"
                    width={200}
                    height={200}
                  />
                  <div className={styles.header_col}>
                    <div className={styles.postProfileName}>
                      {`${postData.createdByName}`}
                      {feeling?.length > 0 && (
                        <div
                          className={styles.postFeeling}
                          sx={{ hidden: feeling?.length === 0 }}
                        >
                          {"is "}
                          <Image
                            src={require(`../facebookReactPost/images/${feelingImage}`)}
                            alt=""
                            width={16}
                            height={16}
                          />
                          {` feeling ${feeling}.`}
                        </div>
                      )}
                      <div className={styles.updatedP}></div>
                    </div>
                    <div className={styles.postProfilePrivacyDate}>
                      {`${postData.createdAt}`}
                      <span style={{ marginLeft: "5px" }}></span>
                      <Public color="#828387" />
                    </div>
                  </div>
                </div>
                <div className={styles.dotHover}>
                  <SaveEditDeleteMenu
                    userId={postData.createdBy}
                    postUserId={user._id}
                  />
                </div>
              </div>
              <div className={styles.postText}>{postData.postBody}</div>

              {url != "" && ( //if src not empty return image
                <div className={styles.postImage}>
                  <Image
                    //   loader={myLoader}
                    src={`${url}`}
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
                  <div className={styles.share_count}>
                    {postData.shareNumber} share
                  </div>
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
                <div onClick={onClickShare} className={styles.post_action}>
                  <i className={styles.share_icon}></i>
                  <span>Share </span>
                </div>
              </div>
              <CommentBar />
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
      ) : (
        <SharedPostComp postData={postData} />
      )}
    </>
  );
};
export { FacebookPostComp };
