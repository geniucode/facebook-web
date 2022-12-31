import MenuItem from "@mui/material/MenuItem";
import StyledMenu from "./styledMenu";
import StyledButton from "./styledButton";
import { useCoverPhotoButton } from "./useCoverPhotoButton";
import styles from "../../styles/coverPhotoButton.module.css";

const CoverPhotoButton = () => {
  const { open, anchorEl, uploadRef, handleClick, handleClose, handleChange } =
    useCoverPhotoButton();

  return (
    <div>
      <StyledButton
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
      >
        <div className={styles.cameraIcon}></div>
        <span className={styles.buttonSpan}>Add cover photo</span>
      </StyledButton>
      <input type="file" onChange={handleChange} ref={uploadRef} hidden />
      <StyledMenu
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <div className={styles.menuRow}>
            <div className={styles.selectPhotoIcon}></div>
            Select Photo
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <div
            className={styles.menuRow}
            onClick={() => {
              uploadRef.current.click();
            }}
          >
            <div className={styles.uploadPhotoIcon}></div>
            Upload Photo
          </div>
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default CoverPhotoButton;
