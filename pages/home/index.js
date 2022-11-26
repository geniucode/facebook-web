import { Auth } from "../../components/auth";
import styles from '../../styles/fbHome.module.css'

const HomeScreen = () => {
  return (
    <Auth>
      <div className={styles.signupContainer}>HomeScreen</div>
    </Auth>
  );
}

export default HomeScreen ;

// HOC
