import {  useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/user";
import { postAxios } from "../../service/axios";

//remove it to  add friend hook

const useSearch = () => {
  const [user, setUser] = useRecoilState(userState);
  const [snackMsg, setSnackMsg] = useState(null);

  const onClickAddFriend = async (id) => {
    let msg = null;

    const receiverId = id;
    const senderId = user._id;
    const response = await postAxios("friend-request", {
      recipient: receiverId,
    });
    console.log("response", response);
    if (response.success) {
      console.log(response.success);
      msg = "request was added successfully";
      // add snackbar
      // setError(response.message);
    } else {
      // add snackbar
      // setError(response.message);
      console.log(response.message);
      msg = "adding Friend has failed";
    }
    setSnackMsg(msg);
  };

  return {
    onClickAddFriend,
    setSnackMsg,
    snackMsg,
  };
};
export { useSearch };
