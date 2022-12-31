import { Auth } from "../../components/auth";
import HomeHeader from "../../components/homeHeader";
import CoverPhotoButton from "../../components/coverPhotoButton/index.js";

const Test = () => {
 
  return (
    <Auth>
      <HomeHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "20px",
        }}
      >
        <CoverPhotoButton/>
      </div>
    </Auth>
  );
};

export default Test;