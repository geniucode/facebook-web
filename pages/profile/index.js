import Image from "next/image";
import { Auth } from "../../components/auth";
import HomeHeader from "../../components/homeHeader";
import styles from "../../styles/profile.module.css";
import smallCamera1 from "./images/small-camera1.png";
import profilePhoto from "./images/pfp.jpg";
import cameraForProfilePhoto from "./images/camera-for-profile-photo.png";
import pin from "./images/pin.png";
import plus from "./images/plus.png";
import moreImg from "./images/moreImg.png";
import { userState } from "../../atoms/user";
import { useRecoilState } from "recoil";
import { TopMenuInProfilePage } from "../../components/topMenuInProfilePage";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAxios } from "../../service/axios";
import ContentNotAvailable from "../../components/contentNotAvailable";

const Profile = () => {
  const menuItems = [
    "Post",
    "About",
    "Friends",
    "Photos",
    "Videos",
    "Check-ins",
  ];
  const [user] = useRecoilState(userState);
  const [userFromUrl, setUserFromUrl] = useState();
  const router = useRouter();
  const [menuItemState, setmenuItemState] = useState("Post");
  const getUserByUrlID = async (id) => {
    const response = await getAxios(`user/by-id?id=${id}`);
    if (response?.success) {
      console.log(response.userFound.name);
      setUserFromUrl(response.userFound.name);
    }
  };

  //    useEffect(()=>{
  //     router.push({
  //       pathname: '/profile',
  //       query: { id: user._id }
  //     },
  //     )
  //    },[])
  useEffect(() => {
    const id = router.query["id"];
    if (id) getUserByUrlID(id);
  }, [router]);

  return (
    <>
      <Auth>
        <HomeHeader />
        {userFromUrl != null ? (
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
          <ContentNotAvailable />
        )}
      </Auth>
    </>
  );
};
export default Profile;
