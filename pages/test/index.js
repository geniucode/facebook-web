import HomeHeader from "../../components/homeHeader";
import CustomizedMenus from "../../components/coverPhotoButton/index.js";

const Test = () => {
 
  return (
    <>
      <HomeHeader />
      <div
        style={{
          display: "flex",
          padding: "20px",
        }}
      >
        <CustomizedMenus/>
      </div>
    </>
  );
};

export default Test;