import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/user";
import { getAxios, postAxios } from "../../service/axios";

const useHomeHeader = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onMouseEnterupdateNotification = (id) => {
    const setNotificationsTrue = postAxios("update-notification", {
      id,
    });
  };

  const onClickConfirmRequestHandle = (id) => {
    const acceptFriendRequest = postAxios("accept-friend-request", {
      id,
    });
  };

  const onClickRejectRequestHandle = (id) => {
    const rejectFriendRequest = postAxios("reject-friend-request", {
      id,
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [user, setUser] = useRecoilState(userState);
  const [notifications, setNotifications] = useState();

  const getNotifications = async () => {
    const response = await getAxios(`user/friend-notifications`);
    if (response?.success) {
      setNotifications(response.notifications);
      console.log(response);
    } else {
      console.log(response);
    }
  };
  //   useEffect(() => {
  //     getNotifications();
  //   }, []);

  return {
    open,
    notifications,
    anchorEl,
    handleClick,
    handleClose,
    getNotifications,
  };
};

export { useHomeHeader };
