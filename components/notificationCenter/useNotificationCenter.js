import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../../atoms/user";
import { loadingState } from "../../atoms/loading";
import { postAxios } from "../../service/axios";


const useNotificationCenter = () => {
  let msg = "";
  const [user, setUser] = useRecoilState(userState);
  const setLoading = useSetRecoilState(loadingState);
  const [isLoading, setIsLoading] = useState(false);

  const [snackMsg, setSnackMsg] = useState(null);
  const onMouseEnterupdateNotification = (id) => {
    const setNotificationsTrue = postAxios("update-notification", {
      id,
    });
  };
  const onClickConfirmRequestHandle = async (id) => {
    setLoading(true);
    setIsLoading(true);
    const response = await postAxios("accept-friend-request", {
      id,
    });
    if (response?.success) {
      msg = response.message;
    } else {
      msg = response.message;
    }
    setLoading(false);
    setIsLoading(false);
    setSnackMsg(msg);
  };
  const onClickRejectRequestHandle = async (id) => {
    setLoading(true);
    setIsLoading(true);
    const response = await postAxios("reject-friend-request", {
      id,
    });
    if (response?.success) {
      msg = response.message;
    } else {
      msg = response.message;
    }
    setLoading(false);
    setIsLoading(false);
    setSnackMsg(msg);
  };

  return {
    snackMsg,
    isLoading,
    setSnackMsg,
    onMouseEnterupdateNotification,
    onClickConfirmRequestHandle,
    onClickRejectRequestHandle,
  };
};

export { useNotificationCenter };
