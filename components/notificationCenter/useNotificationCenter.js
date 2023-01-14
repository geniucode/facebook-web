import { useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/user";
import { postAxios } from "../../service/axios";

const useNotificationCenter = () => {
  let msg = "";
  const [user, setUser] = useRecoilState(userState);
  const [snackMsg, setSnackMsg] = useState(null);

  const onMouseEnterupdateNotification = (id) => {
    const setNotificationsTrue = postAxios("update-notification", {
      id,
    });
  };
  const onClickConfirmRequestHandle = async (id) => {
    const response = await postAxios("accept-friend-request", {
      id,
    });
    console.log("accept friend request: ", response);
    if (response?.success) {
      msg = response.message;
    } else {
      msg = response.message;
    }
    setSnackMsg(msg);
  };
  const onClickRejectRequestHandle = async (id) => {
    const response = await postAxios("reject-friend-request", {
      id,
    });
    if (response?.success) {
      msg = response.message;
    } else {
      msg = response.message;
    }
    setSnackMsg(msg);
  };

  return {
    snackMsg,
    setSnackMsg,
    onMouseEnterupdateNotification,
    onClickConfirmRequestHandle,
    onClickRejectRequestHandle,
  };
};

export { useNotificationCenter };
