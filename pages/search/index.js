import Head from "next/head";
import Image from "next/image";
import { useSearch } from "./useSearch";
import { Auth } from "../../components/auth";
import styles from "../../styles/search.module.css";
import profilePicture from "./images/profilePicture.jpeg";

const Search = () => {
  const { error, users, onChangeSearchValue, onClickSearch } = useSearch();
  return (
    <>
      <Auth>
        <Head>
          <title>Search</title>
        </Head>
        <div className={styles.search}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search Facebook"
              onChange={onChangeSearchValue}
            ></input>
            <input type="submit" onClick={onClickSearch} value="Search"></input>
          </div>
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
                      <div className={styles.userFullName}>{user.email}</div>
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
      </Auth>
    </>
  );
};
export default Search;
