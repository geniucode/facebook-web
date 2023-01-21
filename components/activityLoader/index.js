import { CircularProgress } from "@mui/material";
import { useState } from "react";
import styles from "../../styles/activityLoader.module.css";

const ActivityLoader = ({ loading }) => {
  {
  }

  // {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }
  return (
    <div className={styles.footerLeftCorner}>
      {loading && <CircularProgress color="success" />}
    </div>
  );
};
export { ActivityLoader };
