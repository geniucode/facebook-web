import Link from "next/link";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/user";
import { Auth } from "../../components/auth";
import searchIcon from "./images/search-icon.png";
import styles from "../../styles/homePageMenu.module.css";

const Home = () => {
  const user = useRecoilValue(userState);

  return (
    <Auth>
      Hey {user.email}
      <Link href="/search">
        <div className={styles.searchContanier}>
          <div className={styles.searchIcon}>
            <Image src={searchIcon} />
          </div>
          <div className={styles.searchTitle}>Go to search page</div>
        </div>
      </Link>
    </Auth>
  );
};

export default Home;
