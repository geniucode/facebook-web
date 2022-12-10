import Image from "next/image";
import Link from "next/link";
import HomeIcon from "./images/home-icon.svg";
import userIcon from "./images/user-icon.png";
import seeAllIcon from "./images/see-all-icon.png";
import searchIcon from "./images/search-icon.png";
import { useHomePageMenu } from "./useHomePageMenu";
import seeAllGroupsIcon from "./images/see-all-groups-icon.png";
import styles from "../../styles/homePageMenu.module.css";

const HomePageMneu = () => {
  const { user,items,homeIcon, onClickHomeIcon,onClickNotHomeIcon} = useHomePageMenu();


  return (
    <>
      <div className={styles.homePageMenuContanier}>
        {/* homeContanier */}
        <Link href="/home"><div className={styles.homeContanier} onClick={onClickHomeIcon} >
          <HomeIcon className={styles.homeIcon} fill={`${homeIcon?'#1b74e4':''}`}/>
          <div className={styles.homeTitle}>Home</div>
        </div></Link>
        {/* userContainer */}
        <div className={styles.userContanier} onClick={onClickNotHomeIcon}>
          <div className={styles.userIcon}>
            <Image src={userIcon} />
          </div>
          <div className={styles.userEmail}>{user.name}</div>
        </div>
        {/* horizontal line */}
        <div className={styles.horizontalLine}>
          <hr />
        </div>
        {/* find friends */}
       {
        items.map((item)=>{
          return( <Link href={item.href}><div className={styles.findFriendsToSeeAllContanier} onClick={onClickNotHomeIcon}>
            <div className={styles.findFriendsToSeeAllIcon}>
              {item.icon}
            </div>
            <div className={styles.findFriendsToSeeAllTitle}>{item.title}</div>
          </div></Link>)
        })
       }
       {/* seeAllContainer */}
       <Link href=""><div className={styles.seeAllContanier} onClick={onClickNotHomeIcon}>
          <div className={styles.seeAllIcon}>
            <Image src={seeAllIcon} />
          </div>
        </Link>

        {/* horizontal line */}
        <div className={styles.horizontalLine}>
          <hr />
        </div>
        {/* seeAllGroups */}
        <Link href=""><div className={styles.seeAllGroupsContanier} onClick={onClickNotHomeIcon}>
          <div className={styles.seeAllGroupsIcon}>
            <Image src={seeAllGroupsIcon} />
          </div>
          <div className={styles.seeAllGroupsTitle} onClick={onClickNotHomeIcon}>See all groups</div>
        </div></Link>
      </div>
    </>
  );
};

export { HomePageMneu };
