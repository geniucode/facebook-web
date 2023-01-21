import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../../atoms/user";
import { loadingState } from "../../atoms/loading";
import { postAxios } from "../../service/axios";

const useNotificationCenter = () => {
  let msg = "";
  const [user, setUser] = useRecoilState(userState);
  const setLoading = useSetRecoilState(loadingState);
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
    if (response?.success) {
      msg = response.message;
    } else {
      msg = response.message;
    }
    setLoading(false);
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
    setLoading(false);
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
