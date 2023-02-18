import { useRecoilState } from "recoil";
import { CircularProgress } from "@mui/material";
import { loadingState } from "../../atoms/loading";
import styles from "../../styles/activityLoader.module.css";
const ActivityLoader = ({}) => {
  const [loading, setLoading] = useRecoilState(loadingState);
  {
  }

  return (
    <div className={styles.footerLeftCorner}>
      {loading && <CircularProgress color="success" />}
    </div>
  );
};
export { ActivityLoader };
