import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useSearch } from "./useSearch";
import { Auth } from "../../components/auth";
import { HomePageMneu } from "../../components/homePageMenu";
import facebookIcon from "./images/facebook-icon.png";
import searchIcon from "./images/search-icon.png";
import profilePicture from "./images/profile-picture.jpeg";
import styles from "../../styles/search.module.css";

const Search = () => {
  const { error, users, onChangeSearchValue, onClickSearch } = useSearch();
  return (
    <>
      <Auth>
        <Head>
          <title>Search</title>
        </Head>

        <div className={styles.search}>
          <div className={styles.searchHeader}>
            <Link href="/home">
              <Image src={facebookIcon} alt="Facebook Icon"></Image>
            </Link>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search Facebook"
                onChange={onChangeSearchValue}
              ></input>
              <button type="submit" onClick={onClickSearch}>
                <Image src={searchIcon} alt="Search"></Image>
              </button>
            </div>
          </div>
          <div className={styles.bodyContainer}>
            <div>
              <HomePageMneu />
            </div>
            <div>
              {error && <p className={styles.errorMsg}>{error}</p>}
              <div className={styles.searchResult}>
                {users.length > 0 &&
                  users.map((user) => {
                    return (
                      <div className={styles.userWidget}>
                        <div className={styles.userDetails}>
                          <div className={styles.userImg}>
                            <Image
                              className={styles.profilePicture}
                              src={profilePicture}
                              alt="Profile Picture"
                            ></Image>
                          </div>
                          <div className={styles.userFullName}>
                            {user.email}
                          </div>
                        </div>
                        <div className={styles.userButtons}>
                          <input
                            type="button"
                            className={styles.addFriend}
                            value="Add Friend"
                          ></input>
                          <input
                            type="button"
                            className={styles.removeSuggestion}
                            value="Remove"
                          ></input>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Auth>
    </>
  );
};
export default Search;
