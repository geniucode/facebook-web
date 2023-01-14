import { useState } from "react";
import { useRecoilState } from "recoil";
import { getAxios, postAxios } from "../../service/axios";
import { searchUsersState } from "../../atoms/users";
import { userState } from "../../atoms/user";

const useSearch = () => {
  const [error, setError] = useState();
  const [snackMsg, setSnackMsg] = useState(null);
  const [users, setUsers] = useRecoilState(searchUsersState);
  const [user, setUser] = useRecoilState(userState);
  let msg = "";
  const checkRequest = async (recipient) => {
    try {
      if (user._id === recipient) {
        return " ";
      }
      const response = await getAxios(
        `check-request?recipient=${recipient}`,
        {}
      );
      if (response?.success) {
        return response.message;
      } else {
        return false;
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
      console.log(response.message);
      msg = response.message;
    }
    setSnackMsg(msg);
    setTimeout(function () {
      //render document only here if possible
    }, 3000);
  };

  const onClickSearch = async (searchValue) => {
    const notFound = ["notFound"];
    if (searchValue.length > 0) {
      const response = await getAxios(`user/search?name=${searchValue}`, {});

      if (!response?.success) {
        setError("No users found");
        setUsers([]);
      }
      if (response?.success) {
        const mappedUser = await Promise.all(
          response.usersFound.map(async (data) => {
            data.friendStatus = await checkRequest(data._id);
            return data;
          })
        );
        setUsers(mappedUser);
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
  };
};

export { useSearch };
