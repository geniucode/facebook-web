import { useRecoilState } from "recoil";
import { useState } from "react";
import { getAxios, postAxios } from "../../service/axios";
import { searchUsersState } from "../../atoms/users";
import { userState } from "../../atoms/user";
import { friendRequestState } from "../../atoms/friendRequest";

const useSearch = () => {
  const [error, setError] = useState();
  const [snackMsg, setSnackMsg] = useState(null);
  const [users, setUsers] = useRecoilState(searchUsersState);
  const [isFriendRequested, setIsFriendRequested] =
    useRecoilState(friendRequestState);
  const [user, setUser] = useRecoilState(userState);
  let msg = "";
  const checkRequest = async (recipient) => {
    // probably should be in global hooks
    try {
      const response = await getAxios(
        `check-request?recipient=${recipient}`,
        {}
      );
      console.log("response.succes is", response?.success);
      if (response?.success) {
        setIsFriendRequested(true);
      } else {
        setIsFriendRequested(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickAddFriend = async (id) => {
    const receiverId = id;
    const senderId = user._id;
    const response = await postAxios("friend-request", {
      recipient: receiverId,
    });
    if (response.success) {
      console.log(response.success);
      msg = response.message;
    } else {
      msg = response.message;
      console.log(response.message);
    }
    setSnackMsg(msg);
  };
  const showSearchResults = () => {
    if (users?.length > 0) {
      console.log("dsalkhdlksahdlksa");
      users?.map((user) => {
        return `
          <div className={styles.userSearchedFor}>
            <span className={styles.usersImage}></span>
            <span>{user.name}</span>
          </div> `;
      });
    }
    if (users[0]?.value === "notFound") {
      return "<div>No users Found</div>";
    }
  };

  const onClickSearch = async (searchValue) => {
    const notFound = ["notFound"];
    if (searchValue.length > 0) {
      const response = await getAxios(`user/search?name=${searchValue}`, {});

      if (!response?.success) {
        setError("No users found");
        setUsers(notFound);
      }
      if (response?.success) {
        setUsers(response.usersFound);
        setError("");
      }
    } else {
      setError("Please enter a value to search for");
      setUsers();
    }
  };
  return {
    users,
    snackMsg,
    setSnackMsg,
    checkRequest,
    onClickAddFriend,
    onClickSearch,
    showSearchResults,
  };
};

export { useSearch };
