import { FacebookPostComp } from "./post";

const FacebookPost = ({ postsInformation }) => {
  return (
    <>
      {postsInformation?.map((item) => {
        return <FacebookPostComp postData={item} />;
      })}
    </>
  );
};
export { FacebookPost };
