import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/user";
import { getAxios, postAxios } from "../../service/axios";

const useHomeHeader = (props) => {
  let msg = "";
  const [user, setUser] = useRecoilState(userState);
  const [notifications, setNotifications] = useState();
  const [snackMsg, setSnackMsg] = useState(null);

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
    const response = await postAxios("remove-friend-request", {
      id,
    });
    if (response?.success) {
      msg = response.message;
    } else {
      msg = response.message;
    }
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
