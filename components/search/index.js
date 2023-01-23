import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { DebounceInput } from "react-debounce-input";
import Link from "next/link";
import { useSearch } from "./useSearch";
import { FbSnackBar } from "../snackBar";
import { ActivityLoader } from "../activityLoader";
import { useNotificationCenter } from "../notificationCenter/useNotificationCenter";
import { userState } from "../../atoms/user";
import { searchUsersState } from "../../atoms/users";
import { loadingState } from "../../atoms/loading";
import styles from "../../styles/homeHeader.module.css";

const Search = () => {
  const {
    users,
    snackMsg,
    setUsers,
    setSnackMsg,
    checkRequest,
    onClickSearch,
    onClickAddFriend,
  } = useSearch();

  const { onClickConfirmRequestHandle, onClickRejectRequestHandle } =
    useNotificationCenter();

  const [loading, setLoading] = useRecoilState(loadingState);

  useEffect(() => {
    setUsers(searchUsersState);
  }, [loading]);

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
      {!loading && (
        <div className={styles.searchResults}>
          {users?.length > 0 &&
            users?.map((searchedUser) => {
              return (
                <div className={styles.userSearchedFor}>
                  <div>
                    <Link
                      onClick={() => {
                        setUsers();
                      }}
                      href={`profile?id=${searchedUser._id}`}
                    >
                      {searchedUser.name}
                    </Link>
                  </div>
                  <div>
                    {searchedUser.friendStatus ? (
                      searchedUser.friendStatus[0] === "Received request" ? (
                        <div className={styles.notificationButtons}>
                          <div
                            className={styles.acceptButton}
                            onClick={() =>
                              onClickConfirmRequestHandle(
                                searchedUser.friendStatus[1]
                              )
                            }
                          >
                            Confirm
                          </div>
                          <div
                            className={styles.deleteButton}
                            onClick={() => {
                              onClickRejectRequestHandle(
                                searchedUser.friendStatus[1]
                              );
                              setLoading(true);
                            }}
                          >
                            Decline
                          </div>
                        </div>
                      ) : (
                        <div>
                          {searchedUser.friendStatus === "Friends" ? (
                            <sup>{searchedUser.friendStatus}</sup>
                          ) : (
                            <sup>{searchedUser.friendStatus[0]}</sup>
                          )}
                        </div>
                      )
                    ) : (
                      <div>
                        <button
                          className={styles.acceptButton}
                          onClick={() => {
                            onClickAddFriend(searchedUser._id);
                          }}
                        >
                          Add Friend
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
              {
              }
            })}
          {users?.length === 0 && <div>No users found</div>}
        </div>
      )}
      {snackMsg && (
        <FbSnackBar
          message={snackMsg}
          open={snackMsg && true}
          setOpen={() => setSnackMsg(null)}
        />
      )}
      <ActivityLoader loading={loading} />
    </div>
  );
};
export { Search };
