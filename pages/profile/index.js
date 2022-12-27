import Image from "next/image";
import { Auth } from "../../components/auth"
import HomeHeader from "../../components/homeHeader"
import styles from "../../styles/profile.module.css";
import smallCamera1 from './images/small-camera1.png'
import profilePhoto from './images/pfp.jpg'

const Profile=()=>{
    return(
        <>
        <Auth>
         <HomeHeader />
         <div className={styles.ProfileTopBody}>
         <div className={styles.coverPhotoContainer}>
            <Image className={styles.coverPhoto} alt="Add Cover photo"/>
            <div className={styles.AddCoverPhotoWithCameraContainer}>
                <Image className={styles.smallCamera} src={smallCamera1}/>
            <div className={styles.AddCoverPhoto}>Add cover photo</div>
            </div>
         </div>

         <div className={styles.profilePhotoContainer}>
         <div className={styles.AddprofilePhotoWithCameraContainer}>
            <Image src={profilePhoto} className={styles.profilePhoto}/>
                {/* <Image className={styles.smallCameraForProfilePhoto} src={smallCamera1}/> */}
            </div>
            <div className={styles.userName}>User Name</div>
            <div className={styles.buttons}>
                <div className={styles.addToStore}> Add to story</div>
                <div className={styles.addToStore}> Edit profile</div>
            </div>
           
         </div>
        
         
         </div>
         </Auth>
        </>
    )
}
export default Profile