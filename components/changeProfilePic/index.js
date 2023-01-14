import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FbSnackBar } from "../snackBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/changeProfilePic.module.css";
import { postAxios, postWithImageAxios, putAxios } from "../../service/axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #ffffff",
  borderRadius: `10px`,
  textAlign: `center`,
  boxShadow: 24,
  p: 4,
};

const ChangeProfilePic = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState("");
  const [snackMsg, setSnackMsg] = useState(null);

  const handleUploadFile = (event) => {
    setFile(event.target.files[0]);
    console.log("file", event.target.files[0]);
  };

  const onClickChangeProfilePic = async () => {
    let msg = null;

    try {
      let url = "";
      if (file) {
        const response = await postWithImageAxios("upload", {
          file: file,
        });
        url = response.url;
      }
      console.log(url);
      let res = await putAxios("change-profile-pic", {
        profilePic: url,
      });
      console.log("url:", url);

      if (res) {
        msg = "Profile picture has been changed";
      }
    } catch (error) {
      if (error) {
        msg = `${error}`;
        console.log(error);
      }
    }
    setSnackMsg(msg);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Update Profile Picture</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update profile picture
          </Typography>
          <div className={styles.line}></div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className={styles.inputFile}>
              <label className={styles.upload} for="image_uploads">
                + Upload photo
              </label>
              <input
                type="file"
                id="image_uploads"
                onChange={handleUploadFile}
              />
              <div className={styles.avatar}>
                <button>Create an Avatar Profile Picture</button>
              </div>
              <div className={styles.frame}>
                <button>Add Frame</button>
              </div>
              <div className={styles.thumbnail}>
                <button>Edit Thumbnail</button>
              </div>
            </div>
            <Button onClick={onClickChangeProfilePic}>Save</Button>
          </Typography>
          {snackMsg && (
            <FbSnackBar
              message={snackMsg}
              open={snackMsg && true}
              setOpen={() => setSnackMsg(null)}
              autoHideDuration={5000}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export { ChangeProfilePic };
