import Image from "next/image";
import styles from "../../styles/facebookPosts.module.css";
import Public from "../facebookPost/svg/public.js";
import Dots from "../facebookPost/svg/Dots.js";
import ReactsPopup from "./ReactsPopup";
import profilePicture from "../facebookPost/images/tempImages/profilePic.png";
import postPicture from "../facebookPost/images/tempImages/pollfishPeople.png";
import { useState } from "react";
import { postsInformationState } from "../../atoms/postsInformation";
import { useRecoilState } from "recoil";
import Moment from 'react-moment';
import moment from "moment";
import { withStyles } from "@mui/material";

const FacebookPost = () => {


  const [visible, setVisible] = useState(false);
  //const [postsCreationTime,setPostsCreationTime] = useState([]);
  const [postsInformation,setPostsInformation]=useRecoilState(postsInformationState)

  
    // console.log(momentPostsCreationTime);
    // const dateToFormat = postsCreationTime[2];
    // <Moment>{dateToFormat}</Moment>
    //console.log(postsCreationTime[0][0].postTime);
    // console.log(dateToFormat)
    // let dbdate = new Intl.DateTimeFormat('en-US',
    // { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' })
    // .format(postsCreationTime[0][0].postTime)
    // console.log(dbdate);
    // let now = moment();
    // while(postsCreationTime.length>0){
    //   let expiration = moment(postsCreationTime[4]);
    // }
  //   let postsCreationTime=postsInformation.map((item)=>{ return item[2].postTime})
  //   let momentPostsCreationTime=postsCreationTime.map((item)=>{ return moment(item)})
  //   var tim=0;
    
  //   for(let item of momentPostsCreationTime){
  //     let now = moment();
  //     console.log(item)
  //     let diff = now.diff(item);
  //     let diffDuration = moment.duration(diff);
  //     let yearsDiff=diffDuration.years() + "y";
  //     let monthDiff=diffDuration.months() + "m";
  //     let weekDiff = diffDuration.weeks() + "w";
  //     let dayDiff = diffDuration.days() + "d";
  //     let hoursDiff = diffDuration.hours() + "hrs";
  //     let minDiff = diffDuration.minutes() + "s";
  //     if(yearsDiff>0){
  //       tim=yearsDiff
  //       console.log("tim is years"+tim)
  //     }
  //     else if(yearsDiff<=0 &&monthDiff>0){
  //     tim=monthDiff
  //   console.log("tim is month "+tim)}
  //     else if(yearsDiff<=0 &&monthDiff<=0&&weekDiff>0){
  //     tim=weekDiff
  //     console.log("tim is week"+tim)}
  //     else if(yearsDiff<=0 &&monthDiff<=0&&weekDiff<=0&&dayDiff>0){
  //     tim=dayDiff
  //     console.log("tim is day"+tim)}
  //     else if(yearsDiff<=0 &&monthDiff<=0&&weekDiff<=0&&dayDiff<=0&&hoursDiff>0){
  //     tim=hoursDiff
  //     console.log("tim is hours"+tim)}
  //     else if(yearsDiff<=0 &&monthDiff<=0&&weekDiff<=0&&dayDiff<=0&&hoursDiff<=0&&minDiff>0){
  //     tim=minDiff
  //     console.log("tim is years"+tim)}
  //     // else{
  //     //   tim=1
  //     // console.log("tim is"+tim)
  //     // }

   
  // }

   
  
    //let now = moment();
  
   
//    let expiration = moment(postsCreationTime[4]);
//    console.log(now);
//    console.log("now");
//    console.log(expiration);
//    let diff = now.diff(expiration);
//    let diffDuration = moment.duration(diff);
//    let x=7;


// let dayDiff = diffDuration.days() + "d";
// let hoursDiff = diffDuration.hours() + "hrs";
// let minDiff = diffDuration.years() + "m";
// console.log(minDiff)

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
               {`${item[2].timeByMoment} . ` }<Public color="#828387" />
               {/* <Moment>{item[2].postTime}</Moment> */}
               {/* {moment()><Moment>{item[2].postTime}</Moment> ? "new" : "past"} */}
               {/* {`${currentTimestamp}` }<Public color="#828387" /> */}
               {/* {moment('DD-MM-YYYY').diff(item[2].postTime,'d')} */}
               {/* {`${moment()}`} */}
               {/* {minDiff} */}
               {/* {`${tim}` }<Public color="#828387" /> */}
            
               
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
