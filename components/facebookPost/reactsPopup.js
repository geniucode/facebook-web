import { useState } from "react";

const reactsArray = [
  {
    name: "like",
    image: "../facebookPost/images/formatedImage/reactImages/like.gif",
  },
  {
    name: "love",
    image: "../facebookPost/images/formatedImage/reactImages/love.gif",
  },
  {
    name: "haha",
    image: "../facebookPost/images/formatedImage/reactImages/haha.gif",
  },
  {
    name: "wow",
    image: "../facebookPost/images/formatedImage/reactImages/wow.gif",
  },
  {
    name: "sad",
    image: "../facebookPost/images/formatedImage/reactImages/sad.gif",
  },
  {
    name: "angry",
    image: "../facebookPost/images/formatedImage/reactImages/angry.gif",
  },
];
function ReactsPopup({ visible, setVisible }) {
  return (
    <>
      {visible && (
        <div
          className="reacts_popup"
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
            <div className="react" key={i}>
              <img src={react.image} alt="" />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default ReactsPopup