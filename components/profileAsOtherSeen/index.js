import { useEffect } from "react";
import Image from "next/image";

import { TopMenuInProfilePage } from "../topMenuInProfilePage";
import { useProfileAsOtherSeen } from "./useProfileAsOtherSeen";
import styles from "../../styles/profileAsOtherSeen.module.css";
import { FacebookPost } from "../facebookPost";
import moreImg from "./images/moreImg.png";
import profilePhoto from "./images/pfp.jpg";
import addfriend from "./images/addfriendpng.png";
import message from "./images/message.png";

const ProfileAsOtherSeen = ({ userIdFromUrl }) => {
  const {
    user,
    menuItems,
    userFromUrl,
    router,
    menuItemState,
    userpostsFromDb,
    setmenuItemState,
    getUserByUrlID,
    getAxiosAllUserPostsByHisId,
  } = useProfileAsOtherSeen();
  let id;
  useEffect(() => {
    id = router.query["id"];
    if (id) getUserByUrlID(id);
    console.log("idfromurl", userIdFromUrl);
    console.log("user._id ", user._id);
  }, [router]);
  useEffect(() => {
    if (userIdFromUrl) getAxiosAllUserPostsByHisId(userIdFromUrl);
  }, [router]);

  return (
    <>
      {userFromUrl != null && (
        <div className={styles.ProfileTopBody}>
          <div className={styles.coverPhotoContainer}>
            <div className={styles.coverPhoto} alt="Add Cover photo" />
          </div>
          <div className={styles.profilePhotoContainer}>
            <div className={styles.AddprofilePhotoWithCameraContainer}>
              <Image src={profilePhoto} className={styles.profilePhoto} />
            </div>
            <div className={styles.userNameAndButtonsContainer}>
              <div className={styles.userName}>{userFromUrl}</div>
              <div className={styles.buttons}>
                  <div className={styles.addToStoryContainer}>
                    <Image src={addfriend} className={styles.plusImg} />
                    <div className={styles.addToStory}>Add Friend</div>
                  </div>
                  <div className={styles.addEditProfileContainer}>
                    <Image src={message} className={styles.pinImg} />
                    <div className={styles.editProfile}>Message</div>
                  </div>
                </div>
            </div>
          </div>

          <div className={styles.lineAndMenuContainer}>
            <div className={styles.line}></div>
            <div className={styles.menuAndThreePointsContainer}>
              <div className={styles.menu}>
                {menuItems.map((item) => {
                  return (
                    <>
                      <TopMenuInProfilePage
                        item={item}
                        menuItemState={menuItemState}
                        setmenuItemState={setmenuItemState}
                      />
                    </>
                  );
                })}
                <div className={styles.moreContainer}>
                  <div className={styles.more}>More</div>
                  <Image className={styles.moreImg} src={moreImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "60%",
          }}
        >
          <FacebookPost postsInformation={userpostsFromDb} />
        </div>
      </div>
    </>
  );
};
export default ProfileAsOtherSeen;
