import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchUsersState } from "../../atoms/users";
import { searchErrorState } from "../../atoms/error";
import { Auth } from "../../components/auth";
import { HomePageMneu } from "../../components/homePageMenu";
import HomeHeader from "../../components/homeHeader";
import profilePicture from "./images/profile-picture.jpeg";
import styles from "../../styles/search.module.css";
import { useSearch } from "./useSearch";
import { FbSnackBar } from "../../components/snackBar";

const Search = () => {
  const [users, setUsers] = useRecoilState(searchUsersState);
  const [error, setError] = useRecoilState(searchErrorState);

  useEffect(() => {
    setUsers({});
    setError("");
  }, []);
  const { onClickAddFriend,setSnackMsg,snackMsg } = useSearch();

  return (
    <>
      <Auth>
        <Head>
          <title>Search</title>
        </Head>
        <HomeHeader />
        <div className={styles.bodyContainer}>
          <HomePageMneu />
          <div className={styles.searchResult}>
            {error && <p className={styles.errorMsg}>{error}</p>}
            {users?.length > 0 &&
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
                      <div className={styles.userFullName}>{user.name}</div>
                    </div>
                    <div className={styles.userButtons}>
                      <input
                        type="button"
                        onClick={() => onClickAddFriend(user._id)}
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
          {snackMsg && (
        <FbSnackBar
          message={snackMsg}
          open={snackMsg && true}
          setOpen={() => setSnackMsg(null)}
        />
      )}
        </div>
  
      </Auth>
    </>
  );
};
export default Search;
