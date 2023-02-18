import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

import plus from "./images/plus.png";
import pin from "./images/pin.png";
import { useProfile } from "./useProfile";
import moreImg from "./images/moreImg.png";
import profilePhoto from "./images/pfp.jpg";
import { Auth } from "../../components/auth";

import HomeHeader from "../../components/homeHeader";
import styles from "../../styles/profile.module.css";
import smallCamera1 from "./images/small-camera1.png";
import { postButtonState } from "../../atoms/urlImage";
import { ShareButtonState } from "../../atoms/shareButton";
import { FacebookPost } from "../../components/facebookPost";
import ProfileAsOtherSeen from "../../components/profileAsOtherSeen";
import { ChangeProfilePic } from "../../components/changeProfilePic/index.js";
import CoverPhotoButton from "../../components/coverPhotoButton";
import { FacebookReactPost } from "../../components/facebookReactPost";
import { TopMenuInProfilePage } from "../../components/topMenuInProfilePage";

const Profile = () => {
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
  } = useProfile();
  const [button, setButton] = useRecoilState(postButtonState);
  const [shareButton, setShareButton] = useRecoilState(ShareButtonState);
  let id;
  useEffect(() => {
    id = router.query["id"];
    if (id) {
      getUserByUrlID(id);
      getAxiosAllUserPostsByHisId(id);
    }
  }, [router, button, shareButton]);

  return (
    <>
      <Auth>
        <HomeHeader />

        {userIdFromUrl === user._id ? (
          <div className={styles.ProfileTopBody}>
            <div className={styles.coverPhotoContainer}>
              <div className={styles.coverPhoto} alt="Add Cover photo" />
              <div style={{ position: "absolute", right: "3%", bottom: "5%" }}>
                <CoverPhotoButton />
              </div>
            </div>

            <div className={styles.profilePhotoContainer}>
              <div className={styles.AddprofilePhotoWithCameraContainer}>
                <Image src={profilePhoto} className={styles.profilePhoto} alt=""/>
                <div
                  style={{
                    position: "absolute",
                    bottom: "33px",
                    left: "129px",
                  }}
                >
                  <ChangeProfilePic />
                </div>
              </div>
              <div className={styles.userNameAndButtonsContainer}>
                <div className={styles.userName}>{userFromUrl}</div>
                <div className={styles.buttons}>
                  <div className={styles.addToStoryContainer}>
                    <Image src={plus} className={styles.plusImg} alt=""/>
                    <div className={styles.addToStory}>Add to story</div>
                  </div>
                  <div className={styles.addEditProfileContainer}>
                    <Image src={pin} className={styles.pinImg} alt=""/>
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
                          key={item}
                          menuItemState={menuItemState}
                          setmenuItemState={setmenuItemState}
                        />
                      </>
                    );
                  })}
                  <div className={styles.moreContainer}>
                    <div className={styles.more}>More</div>
                    <Image className={styles.moreImg} src={moreImg} alt=""/>
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              marginLeft: "57%",
              marginTop: "17px",
              marginBottom: "10px",
            }}
          >
            {userIdFromUrl === user._id ? (
              <FacebookReactPost userId={id} />
            ) : (
              <FacebookReactPost />
            )}
          </div>
          <div
            style={{
              width: "50%",
            }}
          >
            <FacebookPost postsInformation={userpostsFromDb} />
          </div>
        </div>
      </Auth>
    </>
  );
};
export default Profile;
