import styles from "../../styles/contentNotAvailable.module.css";
import lock from "./images/lock.png";
import Image from "next/image";
const ContentNotAvailable = () => {
  return (
    <>
      <div className={styles.allPage}>
        <Image src={lock} />
        <div className={styles.contentNotAvai}>
          This content isn't available right now
        </div>
      </div>
      ;
    </>
  );
};
export default ContentNotAvailable;
