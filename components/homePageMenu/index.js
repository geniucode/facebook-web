import Image from "next/image";
import Link from "next/link";
import { useLogin } from "../../pages/login/useLogin";
import homeIcon from "./images/home-icon.png";
import userIcon from "./images/user-icon.png";
import friendsIcon from "./images/friends-icon.png";
import marketplaceIcon from "./images/marketplace-icon.png";
import memoriesIcon from "./images/memories-icon.png";
import savedIcon from "./images/saved-icon.png";
import pagesIcon from "./images/pages-icon.png";
import seeAllIcon from "./images/see-all-icon.png";
import seeAllGroupsIcon from "./images/see-all-groups-icon.png";
import styles from "../../styles/homePageMenu.module.css";
import { useHomePageMenu } from "./useHomePageMenu";

const HomePageMneu = () => {
  const { user } = useHomePageMenu();

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
        <div className={styles.findFriendsContanier}>
          <div className={styles.findFriendsIcon}>
            <Image src={friendsIcon} />
          </div>
          <div className={styles.findFriendsTitle}>Find friends</div>
        </div>
        {/* Marketlace */}
        <div className={styles.marketplaceContanier}>
          <div className={styles.marketplaceIcon}>
            <Image src={marketplaceIcon} />
          </div>
          <div className={styles.marketplaceTitle}>Marketplace</div>
        </div>
        {/* memories */}
        <div className={styles.memoriesContanier}>
          <div className={styles.memoriesIcon}>
            <Image src={memoriesIcon} />
          </div>
          <div className={styles.memoriesTitle}>Memories</div>
        </div>
        {/* saved */}
        <div className={styles.savedContanier}>
          <div className={styles.savedIcon}>
            <Image src={savedIcon} />
          </div>
          <div className={styles.savedTitle}>Saved</div>
        </div>
        {/* pages */}
        <div className={styles.pagesContanier}>
          <div className={styles.pagesIcon}>
            <Image src={pagesIcon} />
          </div>
          <div className={styles.pagesTitle}>Pages</div>
        </div>
        {/* seeAll */}
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
