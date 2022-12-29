import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms/user";
import { searchUsersState } from "../../atoms/users";
import { searchErrorState } from "../../atoms/error";
import { useEffect, useState } from "react";
import { getAxios } from "../../service/axios";
import styles from "../../styles/homeHeader.module.css";
import pfp from "./images/pfp.jpg";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

const HomeHeader = ({}) => {
  const [user, setUser] = useRecoilState(userState);
  const [notifications, setNotifications] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    console.log("hello");
    getNotifications();
  }, []);
  const [users, setUsers] = useRecoilState(searchUsersState);
  const [error, setError] = useRecoilState(searchErrorState);
  const [name, setName] = useState("");
  const onClickSearch = async () => {
    if (name.length > 0) {
      console.log("the name is:", name);
      const response = await getAxios(`user/search?name=${name}`, {
        // name: name,
      });
      if (response?.errors) {
        setError("Please enter a valid name");
        console.log(error);
        return error;
      }
      if (!response?.success) {
        console.log(response);
        setError("No users found");
        console.log(error);
        setUsers([]);
      }
      if (response?.success) {
        setUsers(response.usersFound);
        setError("");
        console.log(response);
        return { users };
      }
    } else {
      setError("Please enter a value to search for");
      setUsers([]);
    }
  };
  const getNotifications = async () => {
    console.log("hellossssssss");
    const response = await getAxios(`user/notifications?user=${user._id}`, {
      // user: user._id,
    });
    if (response?.success) {
      setNotifications(response.notifications);
      console.log(response);
    } else {
      console.log(response);
    }
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href={"/home"}></Link>
        <div className={styles.inputContainer}>
          <div className={styles.searchIcon}>
            <svg
              onClick={onClickSearch}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </div>
          <input
            className={styles.searchInput}
            placeholder="Search Facebook"
            onChange={(e) => {
              setName(e.target.value);
              setError();
              setUsers();
            }}
          />
        </div>
        <div className={styles.haederIconsContainer}>
          <div className={styles.haederIcon}></div>
          <div className={styles.haederIcon} notificationcount={`+9`}>
            {/* above I will put the notification count */}
            <svg
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              viewBox="0 0 28 28"
              height="20"
              width="20"
            >
              <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z">
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  // onClickSetNotificationsTrue
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  {
                    (notifications && console.log(notifications),
                    notifications?.map((notification) => {
                      // notification.notification = "true";
                      //eslint rules
                      return (
                        <>
                          <MenuItem>
                            <Avatar />
                            {/* add requester name */}
                            {notification.requester} Has sent you a friend
                            request
                          </MenuItem>
                          <Divider />
                        </>
                      );
                    }))
                  }
                  {/* {notifications ? (
                    notifications.map((notification) => {
                      <>
                        <MenuItem>
                          <Avatar />
                          {notification.requester.name} Has sent you a friend
                          request
                        </MenuItem>
                        <Divider />
                      </>;
                    })
                  ) : (
                    <MenuItem>You have no notifications</MenuItem>
                  )} */}
                </Menu>
              </path>
            </svg>
          </div>
          <div className={`${styles.haederIcon} ${styles.headerProfilePic}`}>
            <Image src={pfp} alt="pfp" />
            <div className={styles.chevronDown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="298"
                viewBox="0 0 512 298.04"
              >
                <path d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
