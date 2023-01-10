import { useEffect, useState } from "react";
import Image from "next/image";
import { useNotificationCenter } from "./useNotificationCenter";
import { FbSnackBar } from "../snackBar";
import { getAxios } from "../../service/axios";
import styles from "../../styles/homeHeader.module.css";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import usrImg from "./images/user.png";

const NotificationCenter = () => {
  const {
    snackMsg,
    setSnackMsg,
    onMouseEnterupdateNotification,
    onClickConfirmRequestHandle,
    onClickRejectRequestHandle,
  } = useNotificationCenter();
  const [notifications, setNotifications] = useState();
  let msg = "";

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
  return (
    <div
      className={styles.haederIcon}
      notificationcount={
        notifications?.filter((item) => !item.notification)?.length
      }
    >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => {
          handleClick(event);
        }}
      >
        <svg viewBox="0 0 28 28" height="20" width="20">
          <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
        </svg>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {notifications &&
          notifications?.map((notification) => {
            return (
              <div
                onMouseEnter={() => {
                  onMouseEnterupdateNotification(notification._id);
                }}
                className={styles.notificationsContainer}
              >
                <div
                  className={`${
                    notification.notification ? styles.seen : styles.pending
                  }`}
                >
                  <MenuItem>
                    <div>
                      <div className={styles.notificationHeader}>
                        <Image
                          className={styles.profiePictureImg}
                          src={usrImg}
                          alt="profilePic"
                        />
                        <span>
                          <span>{notification.requester.name}</span>
                          &nbsp;sent you a friend
                          <br />
                          request.
                        </span>
                      </div>
                      <div className={styles.notificationButtons}>
                        <div
                          className={styles.acceptButton}
                          onClick={() =>
                            onClickConfirmRequestHandle(notification._id)
                          }
                        >
                          Confirm
                        </div>
                        <div
                          className={styles.deleteButton}
                          onClick={() =>
                            onClickRejectRequestHandle(notification._id)
                          }
                        >
                          Decline
                        </div>
                      </div>
                    </div>
                  </MenuItem>
                </div>
                <Divider />
              </div>
            );
          })}
      </Menu>
      {snackMsg && (
        <FbSnackBar
          message={snackMsg}
          open={snackMsg && true}
          setOpen={() => setSnackMsg(null)}
        />
      )}
    </div>
  );
};
export { NotificationCenter };
