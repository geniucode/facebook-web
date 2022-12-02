import styles from "../../styles/facebookReactPost.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const FacebookReactPost = () => {
  return (
    <>
      <div className={styles.fbPost}>
        <div className={styles.commentPost}>
          <div className={styles.profilePic}>
            <img src="" />
          </div>
          <div className={styles.commentField}>haaaaa</div>
        </div>
        <div className={styles.reactButtons}>
          <div className={styles.liveVideo}>
            <Stack spacing={2} direction="row">
              <Button variant="text">Text</Button>
            </Stack>
          </div>
          <div className={styles.photoVideo}>
            <Stack spacing={2} direction="row">
              <Button variant="text">Text</Button>
            </Stack>
          </div>
          <div className={styles.feelingActivity}>
            <Stack spacing={2} direction="row">
              <Button variant="text">Text</Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacebookReactPost;
