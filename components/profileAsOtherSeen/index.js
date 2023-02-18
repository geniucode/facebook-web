import { useEffect } from "react";
import Image from "next/image";
import { useRecoilState, useSetRecoilState } from "recoil";
import { TopMenuInProfilePage } from "../topMenuInProfilePage";
import { useProfileAsOtherSeen } from "./useProfileAsOtherSeen";
import styles from "../../styles/profileAsOtherSeen.module.css";
import { FacebookPost } from "../facebookPost";
import moreImg from "./images/moreImg.png";
import profilePhoto from "./images/pfp.jpg";
import addfriendWhite from "./images/addfriendwhite.png";
// import message from "./images/message.png";
import { useSearch } from "../search/useSearch";
import { useHomeHeader } from "../homeHeader/useHomeHeader";
import { loadingState } from "../../atoms/loading";
const ProfileAsOtherSeen = ({ userIdFromUrl }) => {
  const { onClickRemoveRequestHandle } = useHomeHeader();
  const { friendsStatus, checkRequest, onClickAddFriend, isLoading } =
    useSearch();
  const [loading, setLoading] = useRecoilState(loadingState);


const ProfileAsOtherSeen = () => {
  const {
    menuItems,
    userFromUrl,
    router,
    userIdFromUrl,
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
    if (id) getUserByUrlID(id);
  }, [router]);

  useEffect(() => {
    if (userIdFromUrl) getAxiosAllUserPostsByHisId(id);
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
                  {/* <Image src={addfriend} className={styles.plusImg} /> */}
                  <Image src={addfriendWhite} className={styles.plusImg} />
                  {!friendsStatus && (
                    <div
                      onClick={() => onClickAddFriend(router.query["id"])} 
                      disabled={isLoading}
                      className={styles.addToStory}
                    >
                      {loading ? (
                        <div className={styles.loadingSpinner}></div>
                      ) : (
                        "Add Friend"
                      )}
                    </div>
                  )}
                  {friendsStatus === "Friends" && (
                    <div
                      onClick={() =>
                        onClickRemoveRequestHandle(router.query["id"])
                      }
                      className={styles.addToStory}
                      disabled={isLoading}
                    >
                      {loading ? (
                        <div className={styles.loadingSpinner}></div>
                      ) : (
                        "Remove Friend"
                      )}
                    </div>
                  )}
                  {friendsStatus && friendsStatus !== "Friends" && (
                    <div className={styles.addToStory}>
                      {friendsStatus[0] === "pending" && (
                        <div
                          onClick={() =>
                            onClickRemoveRequestHandle(router.query["id"])
                          }
                          disabled={isLoading}
                        >
                          {loading ? (
                            <div className={styles.loadingSpinner}></div>
                          ) : (
                            "Cancel Request"
                          )}
                        </div>
                      )}
                      {friendsStatus[0] === "Received request" && (
                        <span
                          onClick={() =>
                            onClickRemoveRequestHandle(router.query["id"])
                          }
                          disabled={isLoading}
                        >
                          {loading ? (
                            <div className={styles.loadingSpinner}></div>
                          ) : (
                            "Decline Request"
                          )}{" "}
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
                  {/* <Image src={message} className={styles.pinImg} /> */}
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
        } 
};
export default ProfileAsOtherSeen;

