import Image from "next/image";
import homeIcon from "./images/home-icon.png";
import userIcon from "./images/user-icon.png";
import seeAllIcon from "./images/see-all-icon.png";
import { useHomePageMenu } from "./useHomePageMenu";
import seeAllGroupsIcon from "./images/see-all-groups-icon.png";
import styles from "../../styles/homePageMenu.module.css";

const HomePageMneu = () => {
  const { user,items } = useHomePageMenu();

  return (
    <>
      <div className={styles.homePageMenuContanier}>
        {/* homeContanier */}
        <div className={styles.homeContanier}>
          <div className={styles.homeIcon}>
            <Image src={homeIcon} />
          </div>
          <div className={styles.homeTitle}>Home</div>
        </div>
        {/* userContainer */}
        <div className={styles.userContanier}>
          <div className={styles.userIcon}>
            <Image src={userIcon} />
          </div>
          <div className={styles.userEmail}>{user.email}</div>
        </div>
        {/* horizontal line */}
        <div className={styles.horizontalLine}>
          <hr />
        </div>
        {/* find friends */}
       {
        items.map((item)=>{
          return( <div className={styles.findFriendsToSeeAllContanier}>
            <div className={styles.findFriendsToSeeAllIcon}>
              {item.icon}
            </div>
            <div className={styles.findFriendsToSeeAllTitle}>{item.title}</div>
          </div>)
        })
       }
       {/* seeAllContainer */}
       <div className={styles.seeAllContanier}>
          <div className={styles.seeAllIcon}>
            <Image src={seeAllIcon} />
          </div>
          <div className={styles.seeAllTitle}>See all</div>
        </div>
       
        {/* horizontal line */}
        <div className={styles.horizontalLine}>
          <hr />
        </div>
        {/* seeAllGroups */}
        <div className={styles.seeAllGroupsContanier}>
          <div className={styles.seeAllGroupsIcon}>
            <Image src={seeAllGroupsIcon} />
          </div>
          <div className={styles.seeAllGroupsTitle}>See all groups</div>
        </div>
      </div>
    </>
  );
};

export { HomePageMneu };
