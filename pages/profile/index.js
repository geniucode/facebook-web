import { Auth } from "../../components/auth";
import styles from "../../styles/profile.module.css"

const ProfileScreen = () => {
  return (
    <Auth>
      <div className={styles.signupContainer}>ProfileScreen</div>
    </Auth>
  );
};

export default ProfileScreen ;

// HOC
