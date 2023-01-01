import Image from "next/image";
import { useEffect } from "react";
import pin from "./images/pin.png";
import plus from "./images/plus.png";
import { useProfile } from "./useProfile";
import moreImg from "./images/moreImg.png";
import profilePhoto from "./images/pfp.jpg";
import { Auth } from "../../components/auth";
import HomeHeader from "../../components/homeHeader";
import styles from "../../styles/profile.module.css";
import smallCamera1 from "./images/small-camera1.png";
import cameraForProfilePhoto from "./images/camera-for-profile-photo.png";
import { TopMenuInProfilePage } from "../../components/topMenuInProfilePage";
import ProfileAsOtherSeen from "../../components/profileAsOtherSeen";

const Profile = () => {
  const {
    user,
    menuItems,
    userFromUrl,
    userIdFromUrl,
    router,
    menuItemState,
    setmenuItemState,
    getUserByUrlID,
  } = useProfile();
  let id;
  useEffect(() => {
    id = router.query["id"];
    if (id) getUserByUrlID(id);
    console.log("idfromurl", userIdFromUrl);
    console.log("user._id ", user._id);
  }, [router]);

  return (
    <>
      <Auth>
        <HomeHeader />
        {userIdFromUrl === user._id ? (
          <div className={styles.ProfileTopBody}>
            <div className={styles.coverPhotoContainer}>
              <div className={styles.coverPhoto} alt="Add Cover photo" />
              <div className={styles.AddCoverPhotoWithCameraContainer}>
                <Image className={styles.smallCamera} src={smallCamera1} />
                <div className={styles.AddCoverPhoto}>Add cover photo</div>
              </div>
            </div>

            <div className={styles.profilePhotoContainer}>
              <div className={styles.AddprofilePhotoWithCameraContainer}>
                <Image src={profilePhoto} className={styles.profilePhoto} />
                <div className={styles.cycle}>
                  <Image
                    className={styles.smallCameraForProfilePhoto}
                    src={cameraForProfilePhoto}
                  />
                </div>
              </div>
              <div className={styles.userNameAndButtonsContainer}>
                <div className={styles.userName}>{userFromUrl}</div>
                <div className={styles.buttons}>
                  <div className={styles.addToStoryContainer}>
                    <Image src={plus} className={styles.plusImg} />
                    <div className={styles.addToStory}>Add to story</div>
                  </div>
                  <div className={styles.addEditProfileContainer}>
                    <Image src={pin} className={styles.pinImg} />
                    <div className={styles.editProfile}>Edit profile</div>
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
                <div className={styles.threePoints}>
                  <div>...</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ProfileAsOtherSeen />
        )}
      </Auth>
    </>
  );
};
export default Profile;
