import { useRecoilState } from "recoil";
import { DebounceInput } from "react-debounce-input";
import { useSearch } from "./useSearch";
import { FbSnackBar } from "../snackBar";
import { userState } from "../../atoms/user";
import { friendRequestState } from "../../atoms/friendRequest";
import styles from "../../styles/homeHeader.module.css";

const Search = () => {
  const [user, setUser] = useRecoilState(userState);
  const [isFriendRequested, setIsFriendRequested] =
    useRecoilState(friendRequestState);
  const {
    users,
    snackMsg,
    setSnackMsg,
    checkRequest,
    onClickSearch,
    onClickAddFriend,
  } = useSearch();
  return (
    <div className={styles.inputContainer}>
      <div className={styles.searchIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </svg>
      </div>
      <DebounceInput
        className={styles.searchInput}
        minLength={2}
        placeholder="Search Facebook"
        debounceTimeout={500}
        onChange={(e) => {
          const searchValue = e.target.value;
          onClickSearch(searchValue);
        }}
      />
      <div className={styles.searchResults}>
        {users?.length > 0 &&
          users?.map((searchedUser) => {
            //const isFriendrequested = await checkRequest(searchedUser._id);
            console.log("isFriendrequested", searchedUser.friendStatus);
            return (
              <div className={styles.userSearchedFor}>
                <div>{searchedUser.name}</div>
                {console.log("test")}
                <div>friend ?{searchedUser.friendStatus ? "Yes" : "No"}</div>
                {console.log("test2")}
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
  );
};
export { Search };
