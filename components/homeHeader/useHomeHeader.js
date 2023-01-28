import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../../atoms/user";
import { getAxios, postAxios } from "../../service/axios";
import { loadingState } from "../../atoms/loading";


const useHomeHeader = (props) => {
  let msg = "";
  const [user, setUser] = useRecoilState(userState);
  const [notifications, setNotifications] = useState();
  const [snackMsg, setSnackMsg] = useState(null);
  const setLoading = useSetRecoilState(loadingState);

  const getNotifications = async () => {
    const response = await getAxios(`user/friend-notifications`);
    if (response?.success) {
      setNotifications(response.notifications);
      console.log(response);
    } else {
      console.log(response);
    }
  };
  useEffect(() => {
    getNotifications();
  }, []);
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

  const onClickRemoveRequestHandle = async (id) => {
    setLoading (true);
    const response = await postAxios("remove-friend-request", {
      id,
    });
    if (response?.success) {
      msg = response.message;
    } else {
      msg = response.message;
    }
    setLoading (false);
    console.log(msg);
    setSnackMsg(msg);
  };

  return {
    notifications,
    snackMsg,
    setSnackMsg,
    onMouseEnterupdateNotification,
    onClickConfirmRequestHandle,
    onClickRejectRequestHandle,
    onClickRemoveRequestHandle,
  };
};

export { useHomeHeader };
