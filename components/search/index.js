import { DebounceInput } from "react-debounce-input";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/user";
import { friendRequestState } from "../../atoms/friendRequest";
import { useSearch } from "./useSearch";
import styles from "../../styles/homeHeader.module.css";

const Search = (props) => {
  const [user, setUser] = useRecoilState(userState);
  const [isFriendRequested, setIsFriendRequested] =
    useRecoilState(friendRequestState);
  const { users, checkRequest, onClickSearch, onClickAddFriend } = useSearch();
  return (
    <div className={styles.inputContainer}>
      <div className={styles.searchIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </svg>
      </div>
      <DebounceInput
        className={styles.searchInput}
        minLength={1}
        placeholder="Search Facebook"
        debounceTimeout={2000}
        onChange={(e) => {
          const searchValue = e.target.value;
          onClickSearch(searchValue);
        }}
      />
      <div className={styles.searchResults}>
        {users?.length > 0 &&
          users?.map((searchedUser) => {
            const ifFriends = user.friends.includes(searchedUser._id);
            console.log(
              "Ask Faraj Why is this printing 4 times and infinite loop is happening if we enable line 37"
            );
            //   checkRequest(searchedUser._id);
            return (
              <div className={styles.userSearchedFor}>
                {searchedUser !== "notFound" ? (
                  <>
                    <span className={styles.usersImage}></span>
                    <span>{searchedUser.name}</span>
                    {ifFriends ? (
                      <sup style={{ fontSize: "10px", fontWeight: "bolder" }}>
                        Friends
                      </sup>
                    ) : (
                      <div>
                        {/* {console.log(
                            "is friends requested?: ",
                            isFriendRequested
                          )} */}
                        {isFriendRequested === false && (
                          <input
                            type="button"
                            onClick={() => onClickAddFriend(searchedUser._id)}
                            className={styles.addFriend}
                            value="Add Friend"
                          ></input>
                        )}
                        {isFriendRequested === true && (
                          <sup
                            style={{ fontSize: "10px", fontWeight: "bolder" }}
                          >
                            Request Pending
                          </sup>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <span>No Users Found</span>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
export { Search };
