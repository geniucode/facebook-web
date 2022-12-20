import Image from "next/image";
import styles from "../../styles/facebookPosts.module.css";
import Public from "../facebookPost/svg/public.js";
import Dots from "../facebookPost/svg/Dots.js";
import ReactsPopup from "./ReactsPopup";
import profilePicture from "../facebookPost/images/tempImages/profilePic.png";
import postPicture from "../facebookPost/images/tempImages/pollfishPeople.png";
import { useState } from "react";
import {  postsInformation} from "../../pages/home/useHome.js";

const FacebookPost = () => {


  const [visible, setVisible] = useState(false);
  // let currentTimestamp = Date.now()
  //  console.log(currentTimestamp); // get current timestamp
  //  let date = new Intl.DateTimeFormat('en-US',
  //   { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
  //   .format(currentTimestamp)
  //   console.log(date);
    ///////
    
    //console.log(postsCreationTime[0][0].postTime);
    // let dbdate = new Intl.DateTimeFormat('en-US',
    // { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
    // .format(postsCreationTime[0][0].postTime)
    // console.log(dbdate);

  return (
   <>
   {postsInformation.map((item)=>{return(
     <div className={styles.postsBlock}>
     <div className={styles.posts}>
       <div className={styles.post}>
         <div className={styles.postHeader}>
           <div className={styles.postHeaderLeft}>
             <Image src={profilePicture} alt="profilePic" />
             <div className={styles.header_col}>
               <div className={styles.postProfileName}>
               {`${item[0].userName}`}
                 <div className={styles.updatedP}></div>
               </div>
               <div className={styles.postProfilePrivacyDate}>
               {`${item[2].postTime} . ` }<Public color="#828387" />
               {/* {`${currentTimestamp}` }<Public color="#828387" /> */}
               </div>
             </div>
           </div>
           <div className={styles.dotHover}>
             <Dots color="#828387" />
           </div>
         </div>
         <div className={styles.postText}>
         {`${item[1].postBody}`}
         </div>
         <div className={styles.postImage}>
           <Image src={postPicture} alt="profilePic" />
         </div>
         <div className={styles.post_infos}>
           <div className={styles.reacts_count}>
             <div className={styles.reacts_count_imgs}></div>
             <div className={styles.reacts_count_num}></div>
           </div>
           <div className={styles.to_right}>
             <div className={styles.comments_count}>65 comments</div>
             <div className={styles.share_count}>37 share</div>
           </div>
         </div>
         <div className={styles.post_actions}>
           <ReactsPopup visible={visible} setVisible={setVisible} />
           <div
             className={styles.post_action}
             onMouseOver={() => {
               setTimeout(() => {
                 setVisible(true);
               }, 500);
             }}
             onMouseLeave={() => {
               setTimeout(() => {
                 setVisible(false);
               }, 500);
             }}
           >
             <i className={styles.like_icon}></i>
             <span>Like</span>
           </div>
           <div className={styles.post_action}>
             <i className={styles.comment_icon}></i>
             <span>Comment</span>
           </div>
           <div className={styles.post_action}>
             <i className={styles.share_icon}></i>
             <span>Share</span>
           </div>
         </div>
       </div>
     </div>
   </div>
   )})}
   </>
  );
};
export { FacebookPost };
