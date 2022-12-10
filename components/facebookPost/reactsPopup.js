import styles from "../../styles/facebookPosts.module.css";
import like from "../facebookPost/images/reactionImages/like.gif";
import love from "../facebookPost/images/reactionImages/love.gif";
import Care from "../facebookPost/images/reactionImages/care.gif";
import Haha from "../facebookPost/images/reactionImages/haha.gif";
import Sad from "../facebookPost/images/reactionImages/sad.gif";
import Wow from "../facebookPost/images/reactionImages/wow.gif";
import Angry from "../facebookPost/images/reactionImages/angry.png";

import Image from "next/image";


export const reactsArray = [
  {
    name: "like",
    image: like,
  },
  {
    name: "love",
    image: love,
  },
  {
    name: "Care",
    image: Care,
  },
  {
    name: "Haha",
    image: Haha,
  },
  {
    name: "Wow",
    image: Wow,
  },
  {
    name: "Sad",
    image: Sad,
  },
  {
    name: "Angry",
    image: Angry,
  },
];
export default function ReactsPopup({ visible, setVisible }) {
  return (
    <>
      {visible && (
        <div
          className={styles.reacts_popup}
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
          {reactsArray.map((react, i) => (
            <div className={styles.react} key={i}>
              <Image src={react.image}/>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
