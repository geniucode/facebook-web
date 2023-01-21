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
import { useSearch } from "../search/useSearch";
import { useHomeHeader } from "../homeHeader/useHomeHeader";

const ProfileAsOtherSeen = ({ userIdFromUrl }) => {
  const { onClickRemoveRequestHandle } = useHomeHeader();
  const { friendsStatus, checkRequest, onClickAddFriend } = useSearch();
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
  var id;
  useEffect(() => {
    id = router.query["id"];

    if (id) {
      getUserByUrlID(id);
      checkRequest(id);
    }
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
                  {!friendsStatus && (
                    <div
                      onClick={() => onClickAddFriend(router.query["id"])}
                      className={styles.addToStory}
                    >
                      Add Friend
                    </div>
                  )}
                  {friendsStatus === "Friends" && (
                    <div
                      onClick={() =>
                        onClickRemoveRequestHandle(router.query["id"])
                      }
                      className={styles.addToStory}
                    >
                      Remove Friend
                    </div>
                  )}
                  {friendsStatus && friendsStatus !== "Friends" && (
                    <div className={styles.addToStory}>
                      {friendsStatus[0] === "pending" && (
                        <span
                          onClick={() =>
                            onClickRemoveRequestHandle(router.query["id"])
                          }
                        >
                          Cancel Request
                        </span>
                      )}
                      {friendsStatus[0] === "Received request" && (
                        <span
                          onClick={() =>
                            onClickRemoveRequestHandle(router.query["id"])
                          }
                        >
                          Decline Request
                        </span>
                      )}
                    </div>
                  )}
                </div>
                {/* {

                  <div>
                  {searchedUser.friendStatus ? (
                    <sup>{searchedUser.friendStatus}</sup>
                  ) : (
                    <div>
                      <div
                        className={styles.acceptButton}
                        onClick={() => {
                          onClickAddFriend(searchedUser._id);
                        }}
                      >
                        Add Friend
                        </div>
                    </div>
                  )}
                </div> } */}

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

//test