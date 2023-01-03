import Image from "next/image";
import { useEffect } from "react";
import moreImg from "./images/moreImg.png";
import profilePhoto from "./images/pfp.jpg";
import { TopMenuInProfilePage } from "../topMenuInProfilePage";
import { useProfileAsOtherSeen } from "./useProfileAsOtherSeen";
import styles from "../../styles/profileAsOtherSeen.module.css";
import ContentNotAvailable from "../../components/contentNotAvailable";
import { FacebookPost } from "../facebookPost";

const ProfileAsOtherSeen = () => {
  const {
    user,
    menuItems,
    userFromUrl,
    userIdFromUrl,
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
  });

  return (
    <>
      {userFromUrl != null ? (
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
      ) : (
        <ContentNotAvailable />
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
